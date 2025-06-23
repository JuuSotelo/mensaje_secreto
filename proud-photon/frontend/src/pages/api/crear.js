// API endpoint para crear mensajes secretos
import { randomUUID } from 'crypto';

const messages = globalThis.__messages || (globalThis.__messages = new Map());

export async function POST({ request }) {
  let text;
  try {
    const body = await request.text();
    text = JSON.parse(body).text;
  } catch (e) {
    return new Response(JSON.stringify({ error: 'JSON inválido' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
  if (!text) {
    return new Response(JSON.stringify({ error: 'Mensaje requerido' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }
  const id = (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID().slice(0, 6) : Math.random().toString(36).slice(2, 8);
  messages.set(id, text);
  return new Response(JSON.stringify({ url: `/view/${id}` }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
