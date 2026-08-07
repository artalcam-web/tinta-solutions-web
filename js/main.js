// Tinta Solutions — script principal (vanilla JS, sin dependencias)
document.addEventListener('DOMContentLoaded', function () {
  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Año dinámico en el footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Formulario de contacto: arma el mensaje y lo envía por WhatsApp (canal principal del negocio).
  // NOTA: si en el futuro se conecta un backend/webhook de email, reemplazar este handler
  // por un fetch() a ese endpoint (ver comentario "WEBHOOK" abajo).
  var form = document.getElementById('contact-form');
  var successMsg = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements['name'].value.trim();
      var phone = form.elements['phone'].value.trim();
      var message = form.elements['message'].value.trim();

      if (!name || !phone || !message) return;

      // WEBHOOK: para enviar también (o en vez de) a un correo/CRM, hacer aquí un
      // fetch('https://TU-WEBHOOK', { method:'POST', body: JSON.stringify({name,phone,message}) })
      // antes o después de abrir WhatsApp.

      var text = 'Hola Tinta Solutions, soy ' + name + ' (tel. ' + phone + '). ' + message;
      var url = 'https://wa.me/526612305857?text=' + encodeURIComponent(text);

      if (successMsg) successMsg.style.display = 'block';
      form.reset();
      window.open(url, '_blank', 'noopener');
    });
  }
});
