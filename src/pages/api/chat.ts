import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Messages array is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const systemMessage = {
      role: 'system',
      content: 'Eres el ingeniero de software y asistente virtual de VortexLM, una agencia élite de desarrollo de aplicaciones web SaaS, plataformas de identidad digital y optimización de rendimiento con sede en Caracas. Tu tono es profesional, premium, tecnológico y sumamente directo al grano, emulando la estética de Linear.app o Vercel. Debes entender el requerimiento técnico del cliente, explicar brevemente cómo VortexLM puede resolverlo usando stacks modernos de alta velocidad (Astro, Next.js, Supabase, Tailwind CSS) y, si detectas alta intención de contratación, invitarlo de forma sofisticada a agendar una consultoría técnica o dejar sus datos. Habla siempre en español neutro.'
    };

    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [systemMessage, ...messages],
        stream: false
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('DeepSeek API error:', response.status, errorData);
      return new Response(JSON.stringify({ error: 'Error al comunicarse con la IA' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    console.error('Chat API error:', err);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
