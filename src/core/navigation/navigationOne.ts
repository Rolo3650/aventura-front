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
        label: 'Renta de Autobuses',
        breackpoint: 'md',
        route: '/eventos-escolares/renta-de-autobuses'
      },
      {
        label: 'Eventos temáticos',
        breackpoint: 'md',
        route: '/eventos-escolares/eventos-tematicos'
      }
    ]
  },
  {
    label: 'Eventos de Temporada',
    breackpoint: 'md',
    route: '/eventos-de-temporada',
    items: [
      {
        label: 'Curso de Verano',
        breackpoint: 'md',
        route: '/eventos-de-temporada/curso-de-verano',
      },
      {
        label: 'Eventos especiales',
        breackpoint: 'md',
        route: '/eventos-de-temporada/eventos-especiales'
      }
    ]
  },
  {
    label: 'Campamentos',
    breackpoint: 'lg',
    route: '/campamentos',
    items: [
      {
        label: 'Campamentos Aventura',
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
