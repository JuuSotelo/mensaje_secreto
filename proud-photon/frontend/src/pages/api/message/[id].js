// API endpoint para mostrar y eliminar el mensaje secreto
const messages = globalThis.__messages || (globalThis.__messages = new Map());

export async function GET({ params }) {
  const { id } = params;
  if (!id) {
    return new Response(JSON.stringify({ error: 'ID requerido' }), { status: 400 });
  }
  const text = messages.get(id);
  if (!text) {
    return new Response(JSON.stringify({ error: 'Mensaje no encontrado o ya leído' }), { status: 404 });
  }
  messages.delete(id);
  return new Response(JSON.stringify({ text }), { status: 200 });
}
