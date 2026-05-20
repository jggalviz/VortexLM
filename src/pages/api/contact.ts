// src/pages/api/contact.ts
export const prerender = false; // Exige renderizado en el servidor (SSR) para este endpoint

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    // Zero-JS: Parseamos el FormData enviado de forma nativa por el navegador
    const formData = await request.formData();
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const service = formData.get('service')?.toString();
    const message = formData.get('message')?.toString() || '';

    // Validación estricta en servidor
    if (!name || !email || !service) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'VortexLM <onboarding@resend.dev>',
      to: ['info@vortexlm.com'],
      subject: `Nuevo contacto: ${service} - ${name}`,
      html: `
        <h2>Nuevo contacto desde VortexLM</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicio:</strong> ${service}</p>
        ${message ? `<p><strong>Mensaje:</strong> ${message}</p>` : ''}
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: 'Error al enviar el mensaje' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Error:', err);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
