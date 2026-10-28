// Vercel Function del formulario de contacto (POST /api/contacto).
// Toda la lógica vive en src/lib/contact-form.ts; acá solo se leen las variables de entorno.
import { handleRequest } from '../src/lib/contact-form.js';

export default {
  fetch(request: Request): Promise<Response> {
    return handleRequest(request, {
      resendApiKey: process.env.RESEND_API_KEY,
      turnstileSecret: process.env.TURNSTILE_SECRET_KEY,
      to: process.env.CONTACT_TO_EMAIL,
      from: process.env.CONTACT_FROM_EMAIL,
    });
  },
};
