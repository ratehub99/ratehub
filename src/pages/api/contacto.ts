// Endpoint del formulario de contacto. Corre en servidor (el resto del sitio es estático).
import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';
import { handleContact } from '../../lib/contact-form';

export const prerender = false;

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

export const POST: APIRoute = async ({ request, clientAddress }) => {
  // Rechaza pedidos que no vengan del propio sitio (defensa básica contra CSRF).
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== new URL(request.url).host)
    return json({ ok: false, message: 'Pedido no permitido.' }, 403);

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ ok: false, message: 'No pudimos leer el formulario.' }, 400);
  }

  const ip = (() => {
    try {
      return clientAddress;
    } catch {
      return undefined;
    }
  })();

  const result = await handleContact(
    data,
    {
      resendApiKey: getSecret('RESEND_API_KEY'),
      turnstileSecret: getSecret('TURNSTILE_SECRET_KEY'),
      to: getSecret('CONTACT_TO_EMAIL'),
      from: getSecret('CONTACT_FROM_EMAIL'),
    },
    ip,
  );

  return result.ok ? json({ ok: true }, 200) : json(result, result.status);
};

// Cualquier otro método: 405.
export const ALL: APIRoute = () =>
  new Response(null, { status: 405, headers: { Allow: 'POST' } });
