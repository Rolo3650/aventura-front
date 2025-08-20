import { NavigationItem } from '@/core'

const navigationConfigQueretaro: NavigationItem[] = [
  {
    label: 'Fiestas',
    breackpoint: 'md',
    route: '/Queretaro/fiestas',
    icon: '/svgs/icons/gift-brown-1.svg'
  },
  {
    label: 'Eventos Escolares',
    breackpoint: 'md',
    route: '/Queretaro/eventos-escolares',
    icon: '/svgs/icons/explorator-brown-1.svg',
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
    label: 'Eventos de Temporada',
    breackpoint: 'md',
    route: '/Queretaro/eventos-de-temporada',
    icon: '/svgs/icons/calendar-brown-1.svg',
    items: [
      {
        label: 'Curso de Verano',
        breackpoint: 'md',
        route: '/Queretaro/eventos-de-temporada/curso-de-verano'
      },
      {
        label: 'Eventos especiales',
        breackpoint: 'md',
        route: '/Queretaro/eventos-de-temporada/eventos-especiales'
      }
    ]
  },
  {
    label: 'Campamentos',
    breackpoint: 'lg',
    route: '/Queretaro/campamentos',
    icon: '/svgs/icons/camp-tent-brown-1.svg',
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
    icon: '/svgs/icons/tree-brown-1.svg',
    breackpoint: 'md',
    route: '/Queretaro/nosotros'
  },
  {
    label: 'Staff',
    breackpoint: 'md',
    route: '/Queretaro/staff'
  },
  {
    label: 'Panel',
    breackpoint: 'md',
    route: 'https://panel.aventuraentuescuela.com.mx',
    blank: 'blank'
  }
]

export { navigationConfigQueretaro }
