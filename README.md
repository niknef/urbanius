# URBANUS QHSE — Landing

Landing institucional y comercial de **URBANUS QHSE** (Consultoría Integral en Calidad, Higiene,
Seguridad y Medio Ambiente), construida con **Astro 7 + Tailwind CSS 4**. Sitio 100% estático.

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo en http://localhost:4321 |
| `npm run build` | Type-check + build de producción en `dist/` |
| `npm run preview` | Sirve el build de producción |

## Estructura

```
src/
├── data/            ← TODO EL CONTENIDO EDITABLE (empezar acá)
│   ├── site.ts          contacto, teléfono, mail, nav, stats, motivos del form
│   ├── modulos.ts       los 6 módulos de servicio y sus ítems
│   ├── sectores.ts      sectores de cobertura
│   └── metodologia.ts   los 4 pasos de "Cómo trabajamos"
├── components/
│   ├── Header.astro         nav sticky + menú hamburguesa accesible
│   ├── Hero.astro           banner con motivo de "plano técnico"
│   ├── Modulos.astro        acordeón 01–06 (exclusivo, nativo con <details name>)
│   ├── Certificaciones.astro tira ISO 9001 / 14001 / 45001
│   ├── Metodologia.astro    sección agregada al guion original (ver más abajo)
│   ├── Nosotros.astro       trayectoria + sectores de cobertura
│   ├── ContactoForm.astro   formulario de pie de página
│   ├── Footer.astro         datos de contacto
│   ├── Flotantes.astro      panel de consulta rápida + botón de WhatsApp
│   ├── LeadForm.astro       formulario reutilizable (pie y panel comparten lógica)
│   └── SectionHead.astro / Icon.astro
├── lib/icons.ts         set de íconos inline (sin librería externa)
├── layouts/Base.astro   <head>, SEO, Open Graph, JSON-LD, scroll reveal
├── styles/global.css    tokens de marca (@theme) y clases base
└── pages/
    ├── index.astro      orden de las secciones
    └── 404.astro
```

Cambiar el orden de las secciones = reordenar los componentes en `src/pages/index.astro`.

## Dónde llegan los leads (PENDIENTE de definir con el cliente)

El formulario funciona **hoy** sin backend: si `PUBLIC_FORM_ENDPOINT` está vacío, abre WhatsApp
con todos los datos del lead ya redactados en el mensaje.

Cuando el cliente defina el destino, alcanza con completar esa variable en `.env`:

```bash
cp .env.example .env
# Web3Forms, Formspree, un webhook de n8n/Make/Zapier, o una API propia:
PUBLIC_FORM_ENDPOINT="https://api.web3forms.com/submit"
```

El formulario hace `POST` con `Content-Type: application/json` y este payload:

```json
{
  "nombre": "...", "telefono": "...", "email": "...", "empresa": "...",
  "motivo": "...", "comentarios": "...",
  "origen": "formulario-pie | panel-flotante",
  "enviado": "2026-09-10T20:00:00.000Z",
  "pagina": "https://..."
}
```

Si más adelante se quiere procesar el lead en el propio sitio (mandar mail con Resend, escribir en
un CRM/Notion), se agrega un adapter (`npx astro add vercel|netlify|cloudflare`), se crea
`src/pages/api/contacto.ts` con `export const prerender = false` y se apunta
`PUBLIC_FORM_ENDPOINT="/api/contacto"`. El front no cambia.

Anti-spam ya incluido: honeypot (`website`) + validación en cliente.

## Antes de publicar

- [ ] Reemplazar `public/urbanus-logo.svg` y `public/favicon.svg` por el logo original de la marca.
- [ ] Regenerar `public/og-urbanus.png` (1200×630) con el logo real.
- [ ] Dominio definitivo en `PUBLIC_SITE_URL` (`.env`) y en `public/robots.txt`.
- [ ] Mail con dominio propio en `src/data/site.ts` (hoy `contacto.urbanus@gmail.com`).
- [ ] Definir destino de los leads (arriba).
- [ ] Confirmar textos y CTAs con el cliente.

## Deploy

Salida estática en `dist/`. Vercel / Netlify / Cloudflare Pages detectan Astro automáticamente
(`npm run build`, directorio `dist`). Recordá cargar las variables `PUBLIC_*` en el panel del host.

## Decisiones tomadas sobre el prototipo original

Se respetaron paleta, tipografías, contenido y orden de secciones del prototipo HTML. Cambios:

1. **Sección "Cómo trabajamos"** entre Certificaciones y Nosotros: ordena la propuesta comercial
   (Diagnóstico → Plan → Implementación → Auditoría). Para sacarla: borrar `<Metodologia />` de
   `src/pages/index.astro`.
2. **Menú móvil funcional** — el prototipo tenía la hamburguesa dibujada pero sin comportamiento.
3. **Acordeón exclusivo nativo** (`<details name="modulo">`) en lugar del script del prototipo, con
   resumen de una línea de cada módulo cuando está cerrado y CTA "Consultar por este módulo" que
   precarga el motivo en el formulario.
4. **Formulario con validación, estados y anti-spam**, reutilizado en el pie y en el panel flotante.
5. **Panel flotante accesible**: `role="dialog"`, cierre con Escape, foco atrapado y devuelto.
6. **SEO**: canonical, Open Graph, Twitter Card, JSON-LD `ProfessionalService` con los 6 servicios,
   `sitemap-index.xml`, `robots.txt` y página 404 propia.
7. **Performance**: fuentes self-hosted (sin request a Google Fonts), CSS crítico inlineado,
   íconos SVG inline, cero dependencias de runtime en el cliente.
8. **Accesibilidad**: link "saltar al contenido", foco visible, `prefers-reduced-motion`,
   jerarquía de headings correcta y contraste AA sobre la paleta de marca.
# urbanius
