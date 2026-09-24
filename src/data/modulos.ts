import type { ImageMetadata } from 'astro';
import imgHigiene from '../assets/modulos/higiene-y-seguridad.jpg';
import imgMonitoreos from '../assets/modulos/monitoreos.jpg';
import imgCapacitaciones from '../assets/modulos/capacitaciones.jpg';
import imgGestion from '../assets/modulos/sistemas-de-gestion.png';
import imgAmbiente from '../assets/modulos/medio-ambiente.png';
import imgHabilitaciones from '../assets/modulos/habilitaciones.png';
import imgSalud from '../assets/modulos/salud-ocupacional.jpg';
import imgSeguros from '../assets/modulos/seguros.jpg';

/** Los 8 módulos de servicio, en el orden definido por el cliente. */

export type Modulo = {
  num: string;
  slug: string;
  title: string;
  image: ImageMetadata;
  /** Texto alternativo de la imagen (accesibilidad y búsqueda de imágenes). */
  alt: string;
  /**
   * 'cover' para fotos; 'contain' para ilustraciones con fondo blanco,
   * que se muestran completas sobre fondo claro.
   */
  fit?: 'cover' | 'contain';
  /** Encuadre del recorte en fotos (object-position). */
  position?: string;
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
    image: imgHigiene,
    alt: 'Técnicos con casco y arnés trabajando en altura en una obra industrial',
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
    image: imgMonitoreos,
    alt: 'Decibelímetro y analizador de ruido midiendo en un puesto de trabajo industrial',
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
    image: imgCapacitaciones,
    alt: 'Capacitación en seguridad laboral dictada en aula a personal de obra',
    position: '30% 50%',
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
    image: imgGestion,
    alt: 'Diagrama de sistemas de gestión integrados ISO 9001, ISO 14001 e ISO 45001',
    fit: 'contain',
    summary: 'Diagnóstico, implementación y mantenimiento de ISO 9001, 14001 y 45001.',
    items: [
      'ISO 9001 — Sistema de gestión de calidad.',
      'ISO 14001 — Sistemas de gestión ambiental.',
      'ISO 45001 — Sistemas de gestión de la seguridad y salud en el trabajo.',
      'Matriz de cumplimiento legal y desarrollo de indicadores de gestión.',
      'Diseño de esquema de trabajo, procedimientos y auditorías de diagnóstico, implementación y mantenimiento.',
    ],
  },
  {
    num: '05',
    slug: 'medio-ambiente',
    title: 'Medio ambiente',
    image: imgAmbiente,
    alt: 'Ilustración de planeta con ciudad y hojas, gestión ambiental',
    fit: 'contain',
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
    image: imgHabilitaciones,
    alt: 'Operador de autoelevador trasladando una carga con equipo habilitado',
    fit: 'contain',
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
  {
    num: '07',
    slug: 'salud-ocupacional',
    title: 'Salud ocupacional y medicina del trabajo',
    image: imgSalud,
    alt: 'Capacitación en RCP y uso de desfibrilador (DEA) en el ámbito laboral',
    summary: 'Exámenes médicos laborales, seguimiento de ausentismo y programas de salud y bienestar.',
    items: [
      'Exámenes médicos laborales: preocupacionales (de ingreso), periódicos, de egreso y por cambio de actividad para la determinación de aptitud laboral.',
      'Atención y prevención de riesgos: diagnóstico oportuno, control de ausentismo y seguimiento médico ocupacional.',
      'Programas de salud y bienestar: planes de ergonomía, vacunación, prevención de enfermedades profesionales y promoción de la salud adaptados al rubro de la empresa.',
      'Asesoría técnico-legal: asesoramiento continuo sobre el cumplimiento de la normativa vigente en salud y seguridad laboral.',
    ],
  },
  {
    num: '08',
    slug: 'seguros',
    title: 'Seguros y soluciones de cobertura integral',
    image: imgSeguros,
    alt: 'Operario con arnés y equipo de protección trabajando en altura en fachada',
    position: '50% 30%',
    summary: 'Coberturas empresariales e individuales con Productores Asesores de Seguros matriculados.',
    items: [
      'Coberturas empresariales e individuales: asesoramiento integral en transferencia y gestión de riesgos patrimoniales y personales.',
      'Riesgos industriales y comerciales: coberturas específicas para comercio, industria, obras de construcción y montajes.',
      'Flotas automotrices: protección integral para vehículos corporativos y flotas de transporte.',
      'Accidentes personales y responsabilidad civil: soluciones ante contingencias laborales, eventos operacionales y terceros.',
      'Seguros de caución y seguros de vida: respuestas financieras para cumplimiento de contratos, garantías y protección de vida (individual y colectiva).',
      'Gestión profesional: atención respaldada por Productores Asesores de Seguros matriculados y habilitados.',
    ],
  },
];
