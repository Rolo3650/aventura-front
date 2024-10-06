import { NavigationItem } from '@/core'

const navigationConfig: NavigationItem[] = [
  {
    label: 'Fiestas',
    breackpoint: 'md',
    route: '/fiestas',
    icon: '/svgs/icons/gift-brown-1.svg',
  },
  {
    label: 'Eventos Escolares',
    breackpoint: 'md',
    route: '/eventos-escolares',
    icon: '/svgs/icons/explorator-brown-1.svg',
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
    icon: '/svgs/icons/calendar-brown-1.svg',
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
    icon: '/svgs/icons/camp-tent-brown-1.svg',
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
    icon: '/svgs/icons/tree-brown-1.svg',
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
