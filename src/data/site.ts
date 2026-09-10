/**
 * Datos institucionales y de contacto.
 * Único lugar a tocar cuando el cliente confirme dominio, mail o teléfono.
 */

export const site = {
  name: 'URBANUS QHSE',
  legalName: 'URBANUS QHSE',
  tagline: 'Calidad · Higiene · Seguridad · Ambiente',
  description:
    'Consultoría integral en Calidad, Higiene, Seguridad y Medio Ambiente. Ingeniería preventiva y gestión normativo-operativa para empresas e industrias de alta complejidad.',
  // TODO(cliente): reemplazar por el dominio definitivo.
  url: import.meta.env.PUBLIC_SITE_URL ?? 'https://urbanusqhse.com.ar',
  locale: 'es_AR',
  logo: '/urbanus-logo.svg',
  ogImage: '/og-urbanus.png',
} as const;

export const contact = {
  // Formato internacional sin espacios, para wa.me y tel:
  phoneE164: '+5491157083298',
  phoneDisplay: '+54 9 11 5708-3298',
  whatsappNumber: '5491157083298',
  // TODO(cliente): migrar a un mail con dominio propio.
  email: 'contacto.urbanus@gmail.com',
  address: {
    street: 'Jean Jaurés 55',
    city: 'Ciudad Autónoma de Buenos Aires',
    region: 'CABA',
    country: 'AR',
    display: 'Jean Jaurés 55 — CABA',
  },
  lead: {
    name: 'Lic. Daniel Alejandro Aguirre',
    role: 'Dirección Técnica',
  },
  hours: 'Lunes a viernes, 9 a 18 h',
} as const;

export const whatsappHref = (
  message = 'Hola URBANUS QHSE, quisiera hacer una consulta sobre sus servicios.',
) => `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Metodología', href: '#metodologia' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
] as const;

export const stats = [
  { value: '22+', label: 'Años de trayectoria' },
  { value: '6', label: 'Módulos de servicio' },
  { value: '3', label: 'Normas ISO gestionadas' },
] as const;

export const motivosConsulta = [
  'Solicitar cotización',
  'Consulta técnica',
  'Auditoría / cumplimiento normativo',
  'Capacitaciones',
  'Mediciones y monitoreos',
  'Certificación ISO',
  'Otro',
] as const;
