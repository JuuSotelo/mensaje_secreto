// Carpeta para el frontend de Astro
// Aquí irán los archivos relacionados con la interfaz de usuario

// Ejemplo de cómo mostrar un mensaje secreto centrado y en una caja pequeña en Astro:
// Archivo: src/pages/view/[id].astro
//
// ---
// import Layout from '../../layouts/Layout.astro';
// ---
//
// <script type="text/javascript">
//   async function getMessage() {
//     const id = window.location.pathname.split('/').pop();
//     const res = await fetch(`/api/message/${id}`);
//     const data = await res.json();
//     const msgDiv = document.getElementById('msg');
//     if (data.text) {
//       msgDiv.innerHTML = `<h2 style='text-align:center;'>Mensaje secreto:</h2><div style='background:#222;padding:1em 2em;max-width:350px;margin:1.5em auto 0 auto;border-radius:10px;box-shadow:0 2px 12px #0003;text-align:center;font-size:1.1em;'>${data.text}</div>`;
//     } else {
//       msgDiv.innerHTML = `<b>Este mensaje ya fue leído o no existe.</b>`;
//     }
//   }
//   window.onload = getMessage;
// </script>
//
// <Layout>
//   <div id="msg">Cargando mensaje...</div>
// </Layout>
