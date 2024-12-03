'use client'
import {CarouselFour,CarouselThree,  ServicesOne, } from '@/components'
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
  height: '95%',
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

  const imgs2: Img[] = [
    {
      alt: 'img-1',
      src: '/imgs/recuerdos/paseos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/recuerdos/paseos/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/recuerdos/paseos/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/recuerdos/paseos/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/recuerdos/paseos/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/recuerdos/paseos/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/recuerdos/paseos/img_7.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/recuerdos/paseos/img_8.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/recuerdos/paseos/img_9.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/recuerdos/paseos/img_10.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/recuerdos/paseos/img_11.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/recuerdos/paseos/img_12.jpg'
    },
    {
      alt: 'img-13',
      src: '/imgs/recuerdos/paseos/img_13.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/recuerdos/paseos/img_14.jpg'
    },
    {
      alt: 'img-15',
      src: '/imgs/recuerdos/paseos/img_15.jpg'
    },
    {
      alt: 'img-16',
      src: '/imgs/recuerdos/paseos/img_16.jpg'
    },
    {
      alt: 'img-17',
      src: '/imgs/recuerdos/paseos/img_17.jpg'
    },
    {
      alt: 'img-18',
      src: '/imgs/recuerdos/paseos/img_18.jpg'
    },
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
            <img src="/imgs/recuerdos/paseos/img_5.jpg" alt="img" />
            <br />
            <br />
            <br />
            <img src="/imgs/recuerdos/paseos/img_7.jpg" alt="img" />


          </Grid>
          <GridBottom item md={8} py={'60px'} xs={12} className='bottom'>
            <Typography variant='h5'>Paseos o Visitas Escolares</Typography>
            <Typography variant='body1' textAlign={'justify'} mt={2}>
            En AVENTURA EN TU ESCUELA entendemos la importancia de brindar a los estudiantes experiencias educativas y divertidas. Es por eso que hemos diseñado un servicio de excursiones escolares, pensado para divertirse, aprender y conocer lugares y regiones de México.            <br />
            <br />
            Con nuestras salidas educativas Podrán descubrir:
            <br />
            <ul>
            <li>MUSEOS</li>
            <li>FABRICAS</li>
            <li>PARQUES</li>
            <li>ZONAS ARQUEOLOGICAS</li>
            </ul>
            <br />
            
            Prismas Basálticos, disfrutar de la emoción sin límites en Six Flags México, sumergirse en la historia de Guanajuato y explorar las enigmáticas Pirámides de Teotihuacán. Nuestro equipo especializado se encarga de todos los detalles logísticos y de seguridad, para que los alumnos puedan disfrutar al máximo de estas aventuras inolvidables. ¡Únete a un viaje de aprendizaje y diversión,con memorias perdurables en México!
            <br />
            <br />
            TE INCLUIMOS:
            <br />
            <br />
            <ul>
              <li>Transporte en autobús de turismo</li>
              <li>Alimentos (Opcional)</li>
              <li>Entradas a los lugares de visita</li>
              <li>Recorridos Guiados</li>
              <li>Información cultural detallada</li>
              <li>1 explorador por cada 15 alumnos</li>
              <li>Botiquin de primeros auxilios</li>
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
        <CarouselFour imgs={imgs2} title='Recuerdos'/>
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