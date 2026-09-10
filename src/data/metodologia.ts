/**
 * Sección agregada al guion original: ordena la propuesta comercial
 * mostrando cómo se entra a trabajar. Si el cliente no la quiere,
 * se elimina <Metodologia /> de src/pages/index.astro.
 */
export const pasos = [
  {
    num: '01',
    title: 'Diagnóstico',
    text: 'Relevamiento en planta u obra, revisión documental y matriz de cumplimiento legal aplicable a la actividad.',
  },
  {
    num: '02',
    title: 'Plan de trabajo',
    text: 'Priorización de riesgos críticos, cronograma, responsables e indicadores medibles acordados con la dirección.',
  },
  {
    num: '03',
    title: 'Implementación',
    text: 'Ejecución en terreno: procedimientos, capacitación del personal, mediciones y gestión de contratistas.',
  },
  {
    num: '04',
    title: 'Auditoría y mejora',
    text: 'Auditorías de seguimiento, tablero de indicadores y ajuste continuo del sistema de gestión.',
  },
] as const;
