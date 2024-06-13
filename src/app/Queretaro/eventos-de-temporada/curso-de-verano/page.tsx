'use client'
import { CarouselOne, MemoriesOne, ServicesOne, TitleOne } from '@/components'
import { Img } from '@/core'
import { Box, Typography, BoxProps, styled, Button } from '@mui/material'

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    paddingLeft: '60px',
    paddingRight: '60px'
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: '30px',
    paddingRight: '30px'
  }
}))

export default function Parties() {
  const imgs: Img[] = [
    {
      alt: 'img-2',
      src: '/imgs/banners-queretaro/curso/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/banners-queretaro/curso/img_3.jpg'
    },
  ]

  const imgs2: Img[] = [
    {
      alt: 'img-1',
      src: '/imgs/recuerdos/curso/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/recuerdos/curso/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/recuerdos/curso/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/recuerdos/curso/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/recuerdos/curso/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/recuerdos/curso/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/recuerdos/curso/img_7.jpg'
    }
  ]

  return (
    <main>
      <Box maxWidth={'1200px'} display={'flex'} justifyContent={'center'} m={'auto'} mb={3}>
        <img src='/imgs/banners-queretaro/curso/img_1.jpg' alt='img-curso' className='w-100' />
      </Box>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        <CarouselOne imgs={imgs2} />
        <br />
        {/* <BoxStyled paddingLeft={'60px'}>
          <Typography variant='h2' fontWeight={600}>
            Últimas Noticias
          </Typography>
        </BoxStyled> */}
      </Box>
      <TitleOne text='Curso de Verano' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
          <br />
          <br />
          CURSO DE VERANO 2024 ¡VERANO DE AVENTURA! ⛱😎🌞
          <br />
          <br />
          Horario: Lunes a viernes de 8:00 a 14:00 ⏰
          Edades de 3 a 13 años divididos en tres categorías 🐿 Ardillas: 3-5 años, 🐻 Osos 6-9 años y 🦁 Leones de 10-13 años
          <br />
          <br />
          Actividades deportivas, manualidades, días temáticos, arte, ciencias, talento musical, proyectos ecológicos, juegos clásicos, repostería, rallys y circuitos de actividades de destreza y habilidad 🏀🏓🛹🛼🤽‍♀🚴‍♀🏆🎭🎨🎬🎤🥁
          <br />
          <br />
          Eventos especiales: (Kermes Aventura 🥳🤩, Color Fest 🎉🎊, Aventuratlón 🤸‍♂, Día de Inflables 📢, Clausura y presentación de talento musical con padres de familia 🎬
          <br />
          <br />
          <Box display={'flex'} justifyContent={'center'} flex={'wrap'}>
            <Box p={3}>
              <Button variant='contained' onClick={() => {
                window.open('/docs/Info del curso.pdf', '_blank');
              }}>
                <Typography fontWeight={'600'}>
                  Más información
                  <br />
                  del Curso de Verano
                </Typography>
              </Button>
            </Box>
            <Box p={3}>
              <Button variant='contained' onClick={() => {
                window.open('/docs/camp de verano.pdf', '_blank');
              }}>
                <Typography fontWeight={'600'}>
                  Campamento
                  <br />
                  de verano
                </Typography>
              </Button>
            </Box>
            <Box p={3}>
              <Button variant='contained' onClick={() => {
                window.open('https://maps.app.goo.gl/k3UH7A9cyGBXJFGh6?g_st=iwb', '_blank');
              }}>
                <Typography fontWeight={'600'}>
                  Ubicación CEL
                </Typography>
              </Button>
            </Box>
          </Box>
          <br />
          <br />
        </Typography>
      </BoxStyled>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        <TitleOne text='Información' />
        <br />
        <CarouselOne imgs={imgs} />
        <br />
      </Box>
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <MemoriesOne title='Recuerdos' imgs={imgs2} />
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
