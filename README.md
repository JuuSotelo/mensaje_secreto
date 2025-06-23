---
# 🕵️‍♂️ Mensaje Secreto - Astro

¡Bienvenido! Este proyecto te permite crear y compartir mensajes secretos de un solo uso de forma sencilla y segura.

## 🚀 ¿Cómo funciona?
1. Escribe un mensaje secreto en la página principal.
2. Obtén un enlace único para compartir.
3. El destinatario podrá ver el mensaje solo una vez. ¡Luego se autodestruye!

---

## 📁 Estructura del Proyecto

```
proud-photon/
├── backend/        # API y lógica de mensajes
├── frontend/       # Interfaz de usuario Astro
│   ├── src/
│   │   ├── layouts/
│   │   │   └── Layout.astro
│   │   └── pages/
│   │       └── view/[id].astro
└── README.md       # Este archivo
```

---

## 💻 Comandos útiles

| Comando                | Acción                                      |
|-----------------------|----------------------------------------------|
| `npm install`         | Instala las dependencias                     |
| `npm run dev`         | Inicia el servidor de desarrollo             |
| `npm run build`       | Genera la versión de producción              |
| `npm run preview`     | Previsualiza el sitio generado               |

---

## 🎨 Personalización del mensaje secreto

El mensaje secreto se muestra centrado y en una caja pequeña, elegante y moderna. Puedes modificar el estilo en `frontend/src/pages/view/[id].astro`:

```astro
<script type="text/javascript">
  async function getMessage() {
    const id = window.location.pathname.split('/').pop();
    const res = await fetch(`/api/message/${id}`);
    const data = await res.json();
    const msgDiv = document.getElementById('msg');
    if (data.text) {
      msgDiv.innerHTML = `<h2 style='text-align:center;'>Mensaje secreto:</h2><div style='background:#222;padding:1em 2em;max-width:350px;margin:1.5em auto 0 auto;border-radius:10px;box-shadow:0 2px 12px #0003;text-align:center;font-size:1.1em;'>${data.text}</div>`;
    } else {
      msgDiv.innerHTML = `<b>Este mensaje ya fue leído o no existe.</b>`;
    }
  }
  window.onload = getMessage;
</script>
```

---

## 📚 Más información
- [Documentación de Astro](https://docs.astro.build)
- [Comunidad en Discord](https://astro.build/chat)

---

¡Listo para compartir secretos! 🚀
