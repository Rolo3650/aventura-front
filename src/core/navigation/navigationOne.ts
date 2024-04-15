import { NavigationItem } from '@/core'

const navigationConfig: NavigationItem[] = [
  {
    label: 'Fiestas',
    breackpoint: 'md',
    route: '/fiestas'
  },
  {
    label: 'Eventos Escolares',
    breackpoint: 'md',
    route: '/eventos-escolares',
    items: [
      {
        label: 'Paseos o visitas escolares',
        breackpoint: 'md',
        route: '/eventos-escolares/paseos'
      },
      {
        label: 'Campamentos',
        breackpoint: 'md',
        route: '/campamentos'
      },
      {
        label: 'Renta de Autobuses',
        breackpoint: 'md',
        route: '/eventos-escolares/renta-de-autobuses'
      },
      {
        label: 'Festividades temáticas',
        breackpoint: 'md',
        route: '/eventos-escolares/festividades-temáticas'
      }
    ]
  },
  {
    label: 'Campamentos',
    breackpoint: 'lg',
    route: '/campamentos',
    items: [
      {
        label: 'Campamentos aventura',
        breackpoint: 'md',
        route: '/campamentos/campamentos-aventura'
      },
      {
        label: 'Campamentos Externos',
        breackpoint: 'md',
        route: '/campamentos/campamentos-externos'
      }
    ]
  },
  {
    label: 'Nosotros',
    breackpoint: 'md',
    route: '/nosotros'
  },
  {
    label: 'Staff',
    breackpoint: 'md',
    route: '/staff'
  }
]

export { navigationConfig }
