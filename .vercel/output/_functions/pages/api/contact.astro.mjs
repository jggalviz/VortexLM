export { renderers } from '../../renderers.mjs';

const prerender = false;
const POST = async ({ request, redirect }) => {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const service = formData.get("service")?.toString();
    if (!name || !email || !service) {
      return new Response(JSON.stringify({ error: "Faltan campos requeridos" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    console.log(`🚀 [Nuevo Lead Anti-Gravity] ${name} (${email}) - Interés: ${service}`);
    return redirect("/gracias?success=true", 303);
  } catch (error) {
    console.error("Error procesando el formulario de contacto:", error);
    return new Response(JSON.stringify({ error: "Error interno del servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
