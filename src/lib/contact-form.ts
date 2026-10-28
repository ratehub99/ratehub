// Lógica del formulario de contacto. Sin dependencias de Astro para poder probarla aparte.
// No guarda nada: el mensaje se valida, se verifica Turnstile y se envía por Resend.

export const FIELD_LIMITS = {
  nombre: { min: 2, max: 60 },
  apellido: { min: 2, max: 60 },
  email: { max: 254 },
  empresa: { min: 2, max: 100 },
  mensaje: { min: 10, max: 2000 },
} as const;

export type FieldName = 'nombre' | 'apellido' | 'email' | 'empresa' | 'mensaje' | 'consentimiento';
export type FieldErrors = Partial<Record<FieldName, string>>;

export interface ContactValues {
  nombre: string;
  apellido: string;
  email: string;
  empresa: string;
  mensaje: string;
}

export interface ContactConfig {
  resendApiKey?: string;
  turnstileSecret?: string;
  to?: string;
  from?: string;
}

export type ContactResult =
  | { ok: true }
  | { ok: false; status: number; code: 'invalid' | 'turnstile' | 'config' | 'send'; message: string; errors?: FieldErrors };

// Formato razonable de email (no pretende cubrir todo el RFC 5322).
const EMAIL_RE = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;

/** Una sola línea: sin saltos ni caracteres de control (evita inyección en encabezados). */
const oneLine = (v: unknown) =>
  String(v ?? '').replace(/[\u0000-\u001F\u007F\u2028\u2029]+/g, ' ').replace(/\s+/g, ' ').trim();

const multiLine = (v: unknown) =>
  String(v ?? '').replace(/\r\n?/g, '\n').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();

export function validate(data: FormData): { values: ContactValues; errors: FieldErrors } {
  const values: ContactValues = {
    nombre: oneLine(data.get('nombre')),
    apellido: oneLine(data.get('apellido')),
    email: oneLine(data.get('email')),
    empresa: oneLine(data.get('empresa')),
    mensaje: multiLine(data.get('mensaje')),
  };
  const errors: FieldErrors = {};
  const L = FIELD_LIMITS;

  if (!values.nombre) errors.nombre = 'Escribí tu nombre.';
  else if (values.nombre.length < L.nombre.min) errors.nombre = `El nombre debe tener al menos ${L.nombre.min} letras.`;
  else if (values.nombre.length > L.nombre.max) errors.nombre = `El nombre puede tener hasta ${L.nombre.max} caracteres.`;

  if (!values.apellido) errors.apellido = 'Escribí tu apellido.';
  else if (values.apellido.length < L.apellido.min) errors.apellido = `El apellido debe tener al menos ${L.apellido.min} letras.`;
  else if (values.apellido.length > L.apellido.max) errors.apellido = `El apellido puede tener hasta ${L.apellido.max} caracteres.`;

  if (!values.email) errors.email = 'Escribí tu email.';
  else if (values.email.length > L.email.max || !EMAIL_RE.test(values.email))
    errors.email = 'El email no parece válido. Revisá que tenga la forma nombre@dominio.com.';

  if (!values.empresa) errors.empresa = 'Escribí el nombre de tu empresa.';
  else if (values.empresa.length < L.empresa.min) errors.empresa = `La empresa debe tener al menos ${L.empresa.min} letras.`;
  else if (values.empresa.length > L.empresa.max) errors.empresa = `La empresa puede tener hasta ${L.empresa.max} caracteres.`;

  if (!values.mensaje) errors.mensaje = 'Escribí tu mensaje.';
  else if (values.mensaje.length < L.mensaje.min) errors.mensaje = `El mensaje debe tener al menos ${L.mensaje.min} caracteres.`;
  else if (values.mensaje.length > L.mensaje.max) errors.mensaje = `El mensaje puede tener hasta ${L.mensaje.max} caracteres.`;

  if (data.get('consentimiento') !== 'on') errors.consentimiento = 'Para enviar el mensaje tenés que aceptar la política de privacidad.';

  return { values, errors };
}

export async function verifyTurnstile(
  token: string,
  secret: string,
  ip: string | undefined,
  doFetch: typeof fetch = fetch,
): Promise<boolean> {
  if (!token || token.length > 2048) return false;
  const body = new URLSearchParams({ secret, response: token });
  if (ip) body.set('remoteip', ip);
  try {
    const res = await doFetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body });
    if (!res.ok) return false;
    const json = (await res.json()) as { success?: boolean };
    return json.success === true;
  } catch {
    return false;
  }
}

export async function sendContactEmail(
  v: ContactValues,
  cfg: Required<Pick<ContactConfig, 'resendApiKey' | 'to' | 'from'>>,
  doFetch: typeof fetch = fetch,
): Promise<boolean> {
  const subject = `Consulta web: ${v.nombre} ${v.apellido} (${v.empresa})`.slice(0, 200);
  const text = [
    `Nombre: ${v.nombre} ${v.apellido}`,
    `Email: ${v.email}`,
    `Empresa: ${v.empresa}`,
    '',
    v.mensaje,
    '',
    '— Enviado desde el formulario de ratehub.com.ar',
  ].join('\n');
  try {
    const res = await doFetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${cfg.resendApiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: cfg.from, to: [cfg.to], reply_to: v.email, subject, text }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export async function handleContact(
  data: FormData,
  cfg: ContactConfig,
  ip: string | undefined,
  doFetch: typeof fetch = fetch,
): Promise<ContactResult> {
  // Honeypot: un bot lo completa, una persona no lo ve. Se responde "ok" sin enviar nada.
  if (oneLine(data.get('website')) !== '') return { ok: true };

  const { values, errors } = validate(data);
  if (Object.keys(errors).length > 0)
    return { ok: false, status: 422, code: 'invalid', message: 'Revisá los campos marcados.', errors };

  if (!cfg.resendApiKey || !cfg.turnstileSecret || !cfg.to || !cfg.from)
    return { ok: false, status: 503, code: 'config', message: 'El formulario no está disponible en este momento. Escribinos por WhatsApp o por email.' };

  const token = String(data.get('cf-turnstile-response') ?? '');
  if (!(await verifyTurnstile(token, cfg.turnstileSecret, ip, doFetch)))
    return { ok: false, status: 400, code: 'turnstile', message: 'No pudimos verificar que no sos un robot. Volvé a intentarlo.' };

  const sent = await sendContactEmail(values, { resendApiKey: cfg.resendApiKey, to: cfg.to, from: cfg.from }, doFetch);
  if (!sent)
    return { ok: false, status: 502, code: 'send', message: 'No pudimos enviar tu mensaje. Probá de nuevo en unos minutos o escribinos por WhatsApp.' };

  return { ok: true };
}
