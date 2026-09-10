/** Los 6 módulos de servicio, en el orden definido por el cliente. */

export type Modulo = {
  num: string;
  slug: string;
  title: string;
  /** Resumen visible en el listado, antes de desplegar. */
  summary: string;
  /** Texto opcional que precede a la lista. */
  intro?: string;
  items: string[];
};

export const modulos: Modulo[] = [
  {
    num: '01',
    slug: 'higiene-y-seguridad',
    title: 'Servicio de Higiene y Seguridad en el Trabajo',
    summary: 'Servicio externo, planes de seguridad y auditorías de cumplimiento normativo.',
    items: [
      'Servicio externo de Higiene y Seguridad en el Trabajo para industrias y obras — Decreto 911/96, Decreto 351/79 (reglamentario de la Ley 19.587), resoluciones SRT.',
      'Planes y programas de seguridad — Res. SRT 319/19, 51/96 y 35/97.',
      'Asesoramiento técnico legal y auditorías de cumplimiento normativo.',
      'Medidas de seguridad en altura (SRT 61/23), excavaciones y demoliciones.',
      'Evaluación e identificación de peligros, análisis de riesgos y procedimientos de trabajo seguro.',
      'Gestión integral de contratistas.',
      'In-Site Safety Management: técnicos, licenciados e ingenieros en Higiene y Seguridad habilitados.',
    ],
  },
  {
    num: '02',
    slug: 'monitoreos-y-mediciones',
    title: 'Monitoreos y mediciones ambientales e higiene industrial',
    summary: 'Mediciones con instrumental calibrado y certificado, con informe técnico y protocolo.',
    intro: 'Servicios de medición con instrumental calibrado y certificado:',
    items: [
      'Ruido laboral (SRT 85/2012) y ruidos al vecindario (IRAM 4062 y legislación local).',
      'Iluminación (SRT 84/2012).',
      'Puestas a tierra (SRT 900/2015).',
      'Carga térmica y estrés por frío.',
      'Vibraciones en piso y en puestos de trabajo fijos y móviles.',
      'Contaminantes químicos y calidad de aire.',
      'Campos eléctricos y magnéticos — normativa SRT y ENRE.',
      'Atmósferas explosivas.',
      'Protecciones atmosféricas y análisis de estado de pararrayos.',
      'Análisis físico-químico y bacteriológico del agua.',
    ],
  },
  {
    num: '03',
    slug: 'capacitaciones',
    title: 'Planes de capacitación y capacitaciones específicas',
    summary: 'Programas a medida según riesgo, normativa aplicable y disponibilidad del personal.',
    items: [
      'Emergencias y autoprotección: RCP, primeros auxilios, extintores, planes de evacuación y emergencias.',
      'Riesgos críticos operativos: trabajo en altura, espacios confinados, izajes y riesgo eléctrico.',
      'Salud ocupacional y ergonomía — Res. 886/15, pausas activas y riesgos en oficina.',
      'Seguridad industrial: uso de EPP y procedimientos de bloqueo / etiquetado (LOTO).',
      'Plan armado según necesidad, requerimientos normativos y disponibilidad del personal.',
      'Capacitaciones según SRT 905/2015.',
    ],
  },
  {
    num: '04',
    slug: 'sistemas-de-gestion',
    title: 'Certificaciones y sistemas de gestión de calidad, seguridad y ambiente',
    summary: 'Diagnóstico, implementación y mantenimiento de ISO 9001, 14001 y 45001.',
    items: [
      'ISO 9001 — Gestión de la calidad y procesos.',
      'ISO 14001 — Gestión ambiental.',
      'ISO 45001 — Seguridad y salud en el trabajo.',
      'Matriz de cumplimiento legal y desarrollo de indicadores de gestión.',
      'Diseño de esquema de trabajo, procedimientos y auditorías de diagnóstico, implementación y mantenimiento.',
    ],
  },
  {
    num: '05',
    slug: 'medio-ambiente',
    title: 'Medio ambiente',
    summary: 'Impacto ambiental, aptitud ambiental, residuos y efluentes.',
    items: [
      'Inspecciones y relevamientos de diagnóstico.',
      'Estudio de impacto ambiental y certificación de aptitud ambiental.',
      'Tratamiento de residuos peligrosos, especiales, industriales, urbanos y reciclables.',
      'Gestión de efluentes líquidos.',
    ],
  },
  {
    num: '06',
    slug: 'habilitaciones',
    title: 'Habilitaciones, certificaciones y estudios específicos',
    summary: 'Habilitaciones de equipos y trabajos, estudios ergonómicos, carga de fuego y NFPA.',
    items: [
      'Habilitación de trabajos con tensión (TCT) — Res. SRT 3068/14.',
      'Equipos de izaje y autoelevadores.',
      'Estudios ergonómicos.',
      'Cargas de fuego.',
      'Estudios de clasificación de áreas peligrosas (NFPA).',
      'Habilitaciones de Plan de Autoprotección — Gobierno de la Ciudad, Ley 5920.',
    ],
  },
];
