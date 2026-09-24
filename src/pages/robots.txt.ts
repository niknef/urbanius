import type { APIRoute } from 'astro';

// Se genera con el dominio de PUBLIC_SITE_URL, así no queda desfasado del sitemap.
export const GET: APIRoute = ({ site }) =>
  new Response(
    ['User-agent: *', 'Allow: /', '', `Sitemap: ${new URL('sitemap-index.xml', site)}`, ''].join('\n'),
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
