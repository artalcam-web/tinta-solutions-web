# Tinta Solutions — sitio web

Landing page estática (HTML/CSS/JS puro, sin frameworks) para **Tinta Solutions**, taller de reparación y mantenimiento de impresoras y computadoras en Playas de Tijuana, B.C.

## Estructura

```
index.html        Página única con secciones ancladas (#nosotros, #impresoras, #computadoras, #porque, #cobertura, #testimonios, #contacto)
css/style.css      Estilos (mobile-first, paleta CMYK)
js/main.js          Menú móvil, año dinámico, formulario de contacto → WhatsApp
images/              Logo e imágenes generadas
robots.txt, sitemap.xml   SEO técnico
```

## Despliegue

El sitio es 100% estático y se publica en **Cloudflare Pages** (sin build step: build command vacío, output directory `/`).

Dominio de producción: `tijuanaprinter.com`.

## Formulario de contacto

Por defecto el formulario arma el mensaje y lo abre en WhatsApp (`wa.me/526612305857`), que es el canal principal del negocio y no requiere backend ni credenciales.

Si más adelante se quiere recibir los mensajes también por correo o en un CRM, hay que:
1. Elegir un servicio (p. ej. Formspree, Web3Forms, o una Cloudflare Pages Function propia).
2. Agregar el `fetch()` correspondiente en `js/main.js` donde dice `// WEBHOOK:`.
3. Guardar cualquier API key como variable de entorno / secret en Cloudflare Pages — nunca en el código.

## SEO

- Metadatos y Open Graph optimizados para búsquedas locales en Tijuana.
- Datos estructurados `schema.org/ElectronicsStore` (LocalBusiness) con dirección, teléfono y horario.
- `sitemap.xml` y `robots.txt` incluidos.

## Licencia / contenido

Todo el contenido y las imágenes fueron creados para Tinta Solutions.
