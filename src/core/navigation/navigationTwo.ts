import { NavigationItem } from '@/core'

const navigationConfig: NavigationItem[] = [
  {
    label: 'Fiestas',
    breackpoint: 'md',
    route: '/Queretaro/fiestas'
  },
  {
    label: 'Eventos Escolares',
    breackpoint: 'md',
    route: '/Queretaro/eventos-escolares',
    items: [
      {
        label: 'Paseos o visitas escolares',
        breackpoint: 'md',
        route: '/Queretaro/eventos-escolares/paseos'
      },
      {
        label: 'Renta de Autobuses',
        breackpoint: 'md',
        route: '/Queretaro/eventos-escolares/renta-de-autobuses'
      },
      {
        label: 'Eventos temáticos',
        breackpoint: 'md',
        route: '/Queretaro/eventos-escolares/eventos-tematicos'
      }
    ]
  },
  {
    label: 'Campamentos',
    breackpoint: 'lg',
    route: '/Queretaro/campamentos',
    items: [
      {
        label: 'Campamentos Aventura',
        breackpoint: 'md',
        route: '/Queretaro/campamentos/campamentos-aventura'
      },
      {
        label: 'Campamentos Externos',
        breackpoint: 'md',
        route: '/Queretaro/campamentos/campamentos-externos'
      }
    ]
  },
  {
    label: 'Nosotros',
    breackpoint: 'md',
    route: '/Queretaro/nosotros'
  },
  {
    label: 'Staff',
    breackpoint: 'md',
    route: '/Queretaro/staff'
  }
]

export { navigationConfig }
