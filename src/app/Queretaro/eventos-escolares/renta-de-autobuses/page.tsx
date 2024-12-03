'use client'
import {  CarouselThree,  ServicesOne, } from '@/components'
import { Img } from '@/core'
import { Box, Typography, BoxProps, styled, Grid,  GridProps } from '@mui/material'

const BoxStyled = styled(Box)<BoxProps>(({}) => ({
  padding: '0 30px',
  position: 'relative'
}))

const BoxBackground = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: '4px',
  bottom: 0,
  right: '30px',
  width: '80%',
  height: '92%',
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
      alt: 'img-1',
      src: '/imgs/banners/paseos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners/paseos/img_2.jpg'
    }
  ]

  

  return (
    <main>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'} pt={3}>
        <CarouselThree imgs={imgs} title='Paquetes'/>
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
                transform: 'rotate(-5deg)'
              }
            }}
          >
            <img src="/imgs/recuerdos/campamentos_aventura/bus.png" alt="img" />
          </Grid>
          <GridBottom item md={8} py={'60px'} xs={12} className='bottom'>
            <Typography variant='h5'>Renta de Autobuses</Typography>
            <Typography variant='body1' textAlign={'justify'} mt={2}>
            Ofrecemos servicios de mobilidad grupal a traves de nuestros autobuses y camionetas con conductores certificados, hacia cualquier destino dentro de México. Estos autobuses están equipados con asientos reclinables, aire acondicionado, y sistemas de entretenimiento para asegurar que todos los pasajeros disfruten de un viaje placentero y relajante.
            <br />
            <br />
            <br />
            <ul>
            <li>Autobuses de Turismo: 47 - 53 plazas</li>
            <li>Autobuses Escolar: 40 pasajeros</li>
            <li>Camioneta Sprinter: 13 o 20 pasajeros</li>
          </ul>
            </Typography>
            {/* <Box mt={3} textAlign={'center'}>
              <Button
                variant='contained'
                sx={{
                  background: '#9943A1',
                  textTransform: 'none',
                  color: 'white'
                }}
              >
                <Typography variant='h5' color={'inherit'} px={3}>
                  Ver más...
                </Typography>
              </Button>
            </Box> */}
          </GridBottom>
        </Grid>
      </BoxStyled>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        {/* <TitleOne text='Paquetes' /> */}
        <br />
        {/* <CarouselFour imgs={imgs2} title='Recuerdos'/> */}
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
      <br /><br />
    </main>
  )
}