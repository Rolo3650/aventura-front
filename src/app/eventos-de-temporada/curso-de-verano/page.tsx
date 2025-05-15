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
      alt: 'img-2',
      src: '/imgs/banners/curso/img_4.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/banners/curso/img_5.jpg'
    }
  ]

  const imgs2: Img[] = [
    {
      alt: 'img-11',
      src: '/imgs/recuerdos/curso/img_11.jpg'
    },
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
    },
    {
      alt: 'img-8',
      src: '/imgs/recuerdos/curso/img_8.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/recuerdos/curso/img_9.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/recuerdos/curso/img_10.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/recuerdos/curso/img_12.jpg'
    },
    {
      alt: 'img-13',
      src: '/imgs/recuerdos/curso/img_13.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/recuerdos/curso/img_14.jpg'
    },
    {
      alt: 'img-15',
      src: '/imgs/recuerdos/curso/img_15.jpg'
    },
    {
      alt: 'img-16',
      src: '/imgs/recuerdos/curso/img_16.jpg'
    },
    {
      alt: 'img-17',
      src: '/imgs/recuerdos/curso/img_17.jpg'
    },
    {
      alt: 'img-18',
      src: '/imgs/recuerdos/curso/img_18.jpg'
    },
    {
      alt: 'img-19',
      src: '/imgs/recuerdos/curso/img_19.jpg'
    },
    {
      alt: 'img-20',
      src: '/imgs/recuerdos/curso/img_20.jpg'
    },
    {
      alt: 'img-21',
      src: '/imgs/recuerdos/curso/img_21.jpg'
    },
    {
      alt: 'img-22',
      src: '/imgs/recuerdos/curso/img_22.jpg'
    },
    {
      alt: 'img-23',
      src: '/imgs/recuerdos/curso/img_23.jpg'
    },
    {
      alt: 'img-24',
      src: '/imgs/recuerdos/curso/img_24.jpg'
    },
    {
      alt: 'img-25',
      src: '/imgs/recuerdos/curso/img_25.jpg'
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
              CURSO DE VERANO 2025 ¡VERANO DE AVENTURA! ⛱😎🌞
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
                    sx={{
                      color: 'white'
                    }}
                    variant='contained'
                    onClick={() => {
                      window.open('/docs/INFORMACION VERANO DE AVENTURA CEL 2025.pdf', '_blank')
                    }}
                  >
                    <Typography fontWeight={'600'} color={'white'}>
                      Más información
                      <br />
                      del Curso de Verano
                    </Typography>
                  </Button>
                </Box>
                <Box p={3}>
                  <Button
                    sx={{
                      color: 'white'
                    }}
                    variant='contained'
                    onClick={() => {
                      window.open('/docs/PLAN DE CAMPAMENTO VERANO CDI-TPOZ 2025.pdf', '_blank')
                    }}
                  >
                    <Typography fontWeight={'600'} color={'white'}>
                      Campamento
                      <br />
                      de verano
                    </Typography>
                  </Button>
                </Box>
                <Box p={3}>
                  <Button
                    sx={{
                      color: 'white'
                    }}
                    variant='contained'
                    onClick={() => {
                      window.open('https://maps.app.goo.gl/k3UH7A9cyGBXJFGh6?g_st=iwb', '_blank')
                    }}
                  >
                    <Typography fontWeight={'600'} color={'white'}>
                      Ubicación CEL
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
