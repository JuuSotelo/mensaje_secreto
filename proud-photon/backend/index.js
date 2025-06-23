// Archivo principal para el backend
// Aquí puedes iniciar tu servidor o lógica de API

const express = require('express');
const cors = require('cors');
const { randomUUID } = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

// Almacenamiento en memoria para los mensajes
const messages = {};

// Endpoint para crear un mensaje secreto
app.post('/api/message', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: 'Mensaje requerido' });
  const id = randomUUID();
  messages[id] = text;
  res.json({ url: `/view/${id}` });
});

// Endpoint para leer y eliminar el mensaje
app.get('/api/message/:id', (req, res) => {
  const { id } = req.params;
  const text = messages[id];
  if (!text) return res.status(404).json({ error: 'Mensaje no encontrado o ya leído' });
  delete messages[id];
  res.json({ text });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend escuchando en puerto ${PORT}`);
});

console.log('Backend iniciado');
