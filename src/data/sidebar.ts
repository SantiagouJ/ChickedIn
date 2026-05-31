import type { NearbyHen, TrendItem } from '../types/feed'

export const TRENDS: TrendItem[] = [
  {
    num: '01',
    title: '#HuevosSinJaula',
    description:
      'Compromisos públicos versus calendarios internos revisados desde el comedero digital.',
  },
  {
    num: '02',
    title: 'Indicadores de sufrir-hours',
    description:
      'Marcos cuantitativos de bienestar: leer antes de KPIs sólo económicos.',
  },
  {
    num: '03',
    title: 'Brunch transparente',
    description:
      '¿De qué granja llegó este carton? Threads abiertos, respuestas a medias.',
  },
]

export const NEARBY_HENS: NearbyHen[] = [
  {
    name: 'Paloma Rustic',
    subtitle:
      'Experta relaciones inter-jaulas · 120 contactos mutuos en el mismo pasillo.',
    initials: 'PR',
    tone: 'muted',
  },
  {
    name: 'Ana Fénix',
    subtitle:
      'Coach de perchas mindfulness · Abierta colaboraciones en segunda fila.',
    initials: 'AF',
    tone: 'warm',
  },
]
