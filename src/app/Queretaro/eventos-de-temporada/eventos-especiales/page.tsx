'use client'
import { ServicesOne } from '@/components'
import { Box, Typography, BoxProps, styled, Grid, GridProps } from '@mui/material'

const BoxStyled = styled(Box)<BoxProps>(({}) => ({
  padding: '0 30px',
  position: 'relative'
}))

const BoxBackground = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: '4px',
  bottom: 0,
  width: '100%',
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
  // const imgs: Img[] = [
  //   {
  //     alt: 'img-1',
  //     src: '/imgs/banners/fiestas/img_1.jpg'
  //   },
  //   {
  //     alt: 'img-2',
  //     src: '/imgs/banners/fiestas/img_2.jpeg'
  //   },
  //   {
  //     alt: 'img-3',
  //     src: '/imgs/banners/fiestas/img_3.jpeg'
  //   },
  //   {
  //     alt: 'img-4',
  //     src: '/imgs/banners/fiestas/img_4.jpg'
  //   },
  //   {
  //     alt: 'img-5',
  //     src: '/imgs/banners/fiestas/img_5.jpg'
  //   },
  //   {
  //     alt: 'img-6',
  //     src: '/imgs/banners/fiestas/img_6.jpg'
  //   },
  //   {
  //     alt: 'img-7',
  //     src: '/imgs/banners/fiestas/img_7.jpg'
  //   },
  //   {
  //     alt: 'img-8',
  //     src: '/imgs/banners/fiestas/img_8.jpg'
  //   },
  //   {
  //     alt: 'img-9',
  //     src: '/imgs/banners/fiestas/img_9.jpg'
  //   },
  //   {
  //     alt: 'img-10',
  //     src: '/imgs/banners/fiestas/img_10.jpg'
  //   },
  //   {
  //     alt: 'img-11',
  //     src: '/imgs/banners/fiestas/img_11.png'
  //   }
  // ]

  // const imgs2: Img[] = [
  //   {
  //     alt: 'img-1',
  //     src: '/imgs/recuerdos/curso/img_1.jpg'
  //   },
  //   {
  //     alt: 'img-2',
  //     src: '/imgs/recuerdos/curso/img_2.jpg'
  //   },
  //   {
  //     alt: 'img-3',
  //     src: '/imgs/recuerdos/curso/img_3.jpg'
  //   },
  //   {
  //     alt: 'img-4',
  //     src: '/imgs/recuerdos/curso/img_4.jpg'
  //   },
  //   {
  //     alt: 'img-5',
  //     src: '/imgs/recuerdos/curso/img_5.jpg'
  //   },
  //   {
  //     alt: 'img-6',
  //     src: '/imgs/recuerdos/curso/img_6.jpg'
  //   },
  //   {
  //     alt: 'img-7',
  //     src: '/imgs/recuerdos/curso/img_7.jpg'
  //   }
  // ]

  return (
    <main>
      {/* <Box maxWidth={'1200px'} display={'flex'} justifyContent={'center'} m={'auto'} mb={3}>
        <img src='/imgs/banners/curso/img_1.jpg' alt='img-curso' className='w-100' />
      </Box>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        <CarouselOne imgs={imgs2} />
        <br />
      </Box> */}
      <BoxStyled maxWidth={'1400px'} mx={'auto'} my={3}>
        <BoxBackground />
        <Grid
          container
          sx={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <GridBottom item md={12} p={'60px'} xs={12} className='bottom'>
            <Typography variant='h5'>Eventos Especiales</Typography>
            <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
              Eventos especiales
              <br />
              <br />
              Atrévete a conocer nuestros eventos especiales de temporada donde podrás encontrar
              <br />
              <br />
              <ul>
                <li>Septiembre: Mañanita Mexicana</li>
                <li>Octubre y Noviembre: Halloween o Día de muertos</li>
                <li>Diciembre: Posadas</li>
                <li>Febrero: San Valentín</li>
                <li>Marzo: Día de la Primavera</li>
                <li>Abril: Día del Niño</li>
                <li>Mayo: Día del estudiante</li>
              </ul>
              <br />
              <br />
              {/* <Box display={'flex'} justifyContent={'center'} flex={'wrap'}>
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
          </Box> */}
              <br />
              <br />
            </Typography>
          </GridBottom>
        </Grid>
      </BoxStyled>
      {/* <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        <TitleOne text='Paquetes' />
        <br />
        <CarouselOne imgs={imgs} />
        <br />
      </Box> */}
      {/* <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <MemoriesOne title='Recuerdos' imgs={imgs2} />
      </BoxStyled> */}
      <ServicesOne />
    </main>
  )
}
