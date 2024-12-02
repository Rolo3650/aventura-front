'use client'
import { BannerTwo, CarouselFour, CarouselThree, ServicesOne } from '@/components'
import { Img } from '@/core'
import { Box, Typography, BoxProps, styled, Button, Grid, GridProps } from '@mui/material'

const BoxStyled = styled(Box)<BoxProps>(({}) => ({
  padding: '0 30px',
  position: 'relative'
}))

const BoxBackground = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: '4px',
  bottom: 0,
  right: '30px',
  width: '80%',
  height: '100%',
  backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
  [theme.breakpoints.up('md')]: {
    position: 'absolute'
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const GridBottom = styled(Grid)<GridProps>(({ theme }) => ({
  '&.bottom': {
    [theme.breakpoints.down('md')]: {
      padding: '50px 30px',
      backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)'
    }
  }
}))

export default function Parties() {
  const imgs: Img[] = [
    {
      alt: 'img-3',
      src: '/imgs/banners-queretaro/curso/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/banners-queretaro/curso/img_4.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners-queretaro/curso/img_2.jpg'
    }
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
      <BannerTwo img='/imgs/banners/curso/img_1.jpg' />
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'} pt={3}>
        <CarouselThree imgs={imgs} title='Paquetes' />
        <br />
        {/* <BoxStyled paddingLeft={'60px'}>
          <Typography variant='h2' fontWeight={600}>
            Últimas Noticias
          </Typography>
        </BoxStyled> */}
      </Box>
      <BoxStyled maxWidth={'1400px'} mx={'auto'}>
        <BoxBackground />
        <Grid
          container
          sx={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <Grid
            item
            md={3}
            xs={12}
            py={'60px'}
            px={'30px'}
            sx={{
              '& img': {
                width: '100%',
                boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
                borderRadius: '8px',
                transform: 'rotate(+5deg)'
              }
            }}
          >
            <img src='/imgs/recuerdos/curso/img_25.jpg' alt='img' />
          </Grid>
          <GridBottom item md={8} py={'60px'} xs={12} className='bottom'>
            <Typography variant='h5'>Curso de Verano</Typography>
            <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
              <br />
              <br />
              CURSO DE VERANO 2024 ¡VERANO DE AVENTURA! ⛱😎🌞
              <br />
              <br />
              Horario: Lunes a viernes de 8:00 a 14:00 ⏰ Edades de 3 a 13 años divididos en tres categorías 🐿
              Ardillas: 3-5 años, 🐻 Osos 6-9 años y 🦁 Leones de 10-13 años
              <br />
              <br />
              Actividades deportivas, manualidades, días temáticos, arte, ciencias, talento musical, proyectos
              ecológicos, juegos clásicos, repostería, rallys y circuitos de actividades de destreza y habilidad
              🏀🏓🛹🛼🤽‍♀🚴‍♀🏆🎭🎨🎬🎤🥁
              <br />
              <br />
              Eventos especiales: (Kermes Aventura 🥳🤩, Color Fest 🎉🎊, Aventuratlón 🤸‍♂, Día de Inflables 📢, Clausura
              y presentación de talento musical con padres de familia 🎬
              <br />
              <br />
              <Box display={'flex'} justifyContent={'center'} flex={'wrap'}>
                <Box p={3}>
                  <Button
                    variant='contained'
                    onClick={() => {
                      window.open('/docs/Info del curso 1.pdf', '_blank')
                    }}
                  >
                    <Typography fontWeight={'600'} color={'white'}>
                      Curso de Verano
                      <br />
                      GRAN RESERVA
                      <br />
                      PRESERVE JURIQUILLA
                    </Typography>
                  </Button>
                </Box>
                <Box p={3}>
                  <Button
                    variant='contained'
                    onClick={() => {
                      window.open('/docs/Info del curso 2.pdf', '_blank')
                    }}
                  >
                    <Typography fontWeight={'600'} color={'white'}>
                      Curso de Verano
                      <br />
                      PRESERVE SUR
                    </Typography>
                  </Button>
                </Box>
                <Box p={3}>
                  <Button
                    variant='contained'
                    onClick={() => {
                      window.open('/docs/camp de verano 1.pdf', '_blank')
                    }}
                  >
                    <Typography fontWeight={'600'} color={'white'}>
                      Campamento
                      <br />
                      de verano
                    </Typography>
                  </Button>
                </Box>
              </Box>
              <br />
              <br />
            </Typography>
          </GridBottom>
        </Grid>
      </BoxStyled>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        {/* <TitleOne text='Paquetes' /> */}
        <br />
        <CarouselFour imgs={imgs2} title='Recuerdos' />
        <br />
        {/* <BoxStyled paddingLeft={'60px'}>
          <Typography variant='h2' fontWeight={600}>
            Últimas Noticias
          </Typography>
        </BoxStyled> */}
      </Box>
      {/* <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <MemoriesOne title='Recuerdos' imgs={imgs3} />
      </BoxStyled> */}
      <ServicesOne />
    </main>
  )
}
