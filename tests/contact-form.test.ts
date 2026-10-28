// Ejecutar: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handleContact, handleRequest } from '../src/lib/contact-form.ts';

const cfg = { resendApiKey: 'k', turnstileSecret: 's', to: 'dest@example.com', from: 'web@send.example.com' };

const form = (over: Record<string, string> = {}) => {
  const f = new FormData();
  const base: Record<string, string> = {
    nombre: 'Ana', apellido: 'Pérez', email: 'ana@empresa.com', empresa: 'Empresa SA',
    mensaje: 'Hola, quiero consultar por un sitio.', consentimiento: 'on', 'cf-turnstile-response': 'tok', website: '',
    ...over,
  };
  for (const [k, v] of Object.entries(base)) if (v !== '__omit__') f.set(k, v);
  return f;
};

type Call = { url: string; init?: RequestInit };
const mockFetch = (turnstileOk: boolean, resendOk: boolean) => {
  const calls: Call[] = [];
  const fn = (async (url: string, init?: RequestInit) => {
    calls.push({ url, init });
    if (url.includes('siteverify')) return new Response(JSON.stringify({ success: turnstileOk }), { status: 200 });
    return new Response(JSON.stringify({ id: 'x' }), { status: resendOk ? 200 : 500 });
  }) as unknown as typeof fetch;
  return { fn, calls };
};

test('envío ok: verifica Turnstile y manda a Resend con reply_to', async () => {
  const { fn, calls } = mockFetch(true, true);
  const r = await handleContact(form(), cfg, '1.2.3.4', fn);
  assert.deepEqual(r, { ok: true });
  assert.equal(calls.length, 2);
  assert.ok(calls[0].url.includes('siteverify'));
  const sent = JSON.parse(String(calls[1].init?.body));
  assert.equal(sent.reply_to, 'ana@empresa.com');
  assert.deepEqual(sent.to, ['dest@example.com']);
  assert.equal(sent.from, 'web@send.example.com');
});

test('Turnstile fallido: no envía el mail', async () => {
  const { fn, calls } = mockFetch(false, true);
  const r = await handleContact(form(), cfg, undefined, fn);
  assert.equal(r.ok, false);
  assert.equal(!r.ok && r.code, 'turnstile');
  assert.equal(calls.length, 1);
});

test('sin token de Turnstile: rechaza sin llamar a Resend', async () => {
  const { fn, calls } = mockFetch(true, true);
  const r = await handleContact(form({ 'cf-turnstile-response': '' }), cfg, undefined, fn);
  assert.equal(!r.ok && r.code, 'turnstile');
  assert.equal(calls.length, 0);
});

test('campos inválidos y obligatorios: 422 con errores por campo, sin red', async () => {
  const { fn, calls } = mockFetch(true, true);
  const r = await handleContact(
    form({ nombre: '', apellido: 'P', email: 'no-es-email', empresa: '__omit__', mensaje: 'corto', consentimiento: '__omit__' }),
    cfg, undefined, fn);
  assert.equal(r.ok, false);
  if (!r.ok) {
    assert.equal(r.status, 422);
    assert.deepEqual(Object.keys(r.errors ?? {}).sort(), ['apellido', 'consentimiento', 'email', 'empresa', 'mensaje', 'nombre']);
  }
  assert.equal(calls.length, 0);
});

test('honeypot completo: responde ok pero no envía nada', async () => {
  const { fn, calls } = mockFetch(true, true);
  const r = await handleContact(form({ website: 'http://spam.example' }), cfg, undefined, fn);
  assert.deepEqual(r, { ok: true });
  assert.equal(calls.length, 0);
});

test('falla de Resend: 502 con mensaje claro', async () => {
  const { fn } = mockFetch(true, false);
  const r = await handleContact(form(), cfg, undefined, fn);
  assert.equal(!r.ok && r.status, 502);
});

test('sin configuración: 503 y no llama a la red', async () => {
  const { fn, calls } = mockFetch(true, true);
  const r = await handleContact(form(), { ...cfg, resendApiKey: undefined }, undefined, fn);
  assert.equal(!r.ok && r.code, 'config');
  assert.equal(calls.length, 0);
});

test('saltos de línea en nombre/empresa no pueden inyectar encabezados', async () => {
  const { fn, calls } = mockFetch(true, true);
  await handleContact(form({ nombre: 'Ana\r\nBcc: x@y.com', empresa: 'E\nSA' }), cfg, undefined, fn);
  const sent = JSON.parse(String(calls[1].init?.body));
  assert.ok(!/[\r\n]/.test(sent.subject));
});

const req = (method: string, body?: FormData, headers: Record<string, string> = {}) =>
  new Request('https://ratehub.com.ar/api/contacto', {
    method,
    body,
    headers: { origin: 'https://ratehub.com.ar', host: 'ratehub.com.ar', ...headers },
  });

test('HTTP: GET devuelve 405 con Allow: POST', async () => {
  const r = await handleRequest(req('GET'), cfg);
  assert.equal(r.status, 405);
  assert.equal(r.headers.get('allow'), 'POST');
});

test('HTTP: origen de otro sitio devuelve 403 y no llama a la red', async () => {
  const { fn, calls } = mockFetch(true, true);
  const r = await handleRequest(req('POST', form(), { origin: 'https://otro-sitio.com' }), cfg, fn);
  assert.equal(r.status, 403);
  assert.equal(calls.length, 0);
});

test('HTTP: campos inválidos devuelve 422 con JSON de errores', async () => {
  const r = await handleRequest(req('POST', form({ email: 'x' })), cfg);
  assert.equal(r.status, 422);
  const j = await r.json();
  assert.equal(j.ok, false);
  assert.ok(j.errors.email);
});

test('HTTP: honeypot completo devuelve 200 sin enviar', async () => {
  const { fn, calls } = mockFetch(true, true);
  const r = await handleRequest(req('POST', form({ website: 'spam' })), cfg, fn);
  assert.equal(r.status, 200);
  assert.equal(calls.length, 0);
});

test('HTTP: envío ok devuelve 200 y pasa la IP de x-forwarded-for a Turnstile', async () => {
  const { fn, calls } = mockFetch(true, true);
  const r = await handleRequest(req('POST', form(), { 'x-forwarded-for': '203.0.113.9, 10.0.0.1' }), cfg, fn);
  assert.equal(r.status, 200);
  assert.equal(calls.length, 2);
  assert.ok(String(calls[0].init?.body).includes('remoteip=203.0.113.9'));
});
