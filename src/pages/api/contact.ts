// src/pages/api/contact.ts
export const prerender = false; // Exige renderizado en el servidor (SSR) para este endpoint

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    // Zero-JS: Parseamos el FormData enviado de forma nativa por el navegador
    const formData = await request.formData();
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const service = formData.get('service')?.toString();

    // Validación estricta en servidor
    if (!name || !email || !service) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Aquí integramos con nuestro CRM o servicio de email (SendGrid, Resend, etc.)
    console.log(`🚀 [Nuevo Lead VortexLM] ${name} (${email}) - Interés: ${service}`);

    // Redirección nativa 303: El navegador es redirigido a la página de agradecimiento
    // Sin necesidad de usar fetch() desde el lado del cliente ni cargar librerías extra.
    return redirect('/gracias?success=true', 303);

  } catch (error) {
    console.error('Error procesando el formulario de contacto:', error);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
