// src/pages/api/contact.ts
export const prerender = false; // Exige renderizado en el servidor (SSR) para este endpoint

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// Verificar que RESEND_API_KEY esté configurada antes de inicializar Resend
if (!import.meta.env.RESEND_API_KEY) {
  console.error('CRITICAL: RESEND_API_KEY is not configured in environment variables');
}

const resend = import.meta.env.RESEND_API_KEY
  ? new Resend(import.meta.env.RESEND_API_KEY)
  : null;

export const POST: APIRoute = async ({ request }) => {
  try {
    // Verificar que Resend esté configurado
    if (!resend) {
      console.error('CRITICAL: RESEND_API_KEY is not configured in environment variables');
      return new Response(JSON.stringify({ error: 'Configuración de correo no disponible. Contacta al administrador.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

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
      from: 'VortexLM <info@vortexlm.com>',
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
    console.error('=== CONTACT FORM ERROR ===');
    console.error('Timestamp:', new Date().toISOString());
    console.error('Error details:', err instanceof Error ? err.message : err);
    console.error('Stack:', err instanceof Error ? err.stack : 'No stack trace');
    console.error('===========================');
    return new Response(JSON.stringify({ error: 'Error interno del servidor. Intenta de nuevo más tarde.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
