'use client'
import { CarouselFour, CarouselThree,  ServicesOne, } from '@/components'
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
      alt: 'img-1',
      src: '/imgs/banners/fiestas/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners/fiestas/img_2.jpeg'
    },
    {
      alt: 'img-3',
      src: '/imgs/banners/fiestas/img_3.jpeg'
    },
    {
      alt: 'img-4',
      src: '/imgs/banners/fiestas/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/banners/fiestas/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/banners/fiestas/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/banners/fiestas/img_7.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/banners/fiestas/img_8.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/banners/fiestas/img_9.jpg'
    },
    
    // {
    //   alt: 'img-10',
    //   src: '/imgs/banners/fiestas/img_10.jpg'
    // },
    {
      alt: 'img-11',
      src: '/imgs/banners/fiestas/img_11.png'
    },
    {
      alt: 'img-11',
      src: '/imgs/banners/fiestas/img_11.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/banners/fiestas/img_12.jpg'
    },{
      alt: 'img-13',
      src: '/imgs/banners/fiestas/img_13.jpg'
    }
  ]

  const imgs2: Img[] = [
    {
      alt: 'img-1',
      src: '/imgs/recuerdos/fiestas/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/recuerdos/fiestas/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/recuerdos/fiestas/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/recuerdos/fiestas/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/recuerdos/fiestas/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/recuerdos/fiestas/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/recuerdos/fiestas/img_7.jpg'
    },
  ]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const imgs3: Img[] = [
    {
      alt: 'img-8',
      src: '/imgs/recuerdos/fiestas/img_8.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/recuerdos/fiestas/img_9.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/recuerdos/fiestas/img_10.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/recuerdos/fiestas/img_11.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/recuerdos/fiestas/img_12.jpg'
    },
    {
      alt: 'img-13',
      src: '/imgs/recuerdos/fiestas/img_13.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/recuerdos/fiestas/img_14.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/recuerdos/fiestas/img_14.jpg'
    },
    {
      alt: 'img-15',
      src: '/imgs/recuerdos/fiestas/img_15.jpg'
    },
    {
      alt: 'img-16',
      src: '/imgs/recuerdos/fiestas/img_16.jpg'
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
              transform: 'rotate(+5deg)'
            }
          }}
        >
          <img src="/imgs/recuerdos/fiestas/img_16.jpg" alt="img" />
        </Grid>
        <GridBottom item md={8} py={'60px'} xs={12} className='bottom'>
          <Typography variant='h5'>Fiestas</Typography>
          <Typography variant='body1' textAlign={'justify'} mt={2}>
          ¿Quieres una fiesta diferente y única? 🥳
          <br />
          <br />
          Te ofrecemos nuestras  FIESTAS DE AVENTURA en las que llevamos toda la diversión y la AVENTURA hasta ti.  🏡🏘
          <br />
          <br />
          Contamos con paquetes desde 5 niños y muchísimas actividades que harán que pases ¡un día lleno de diversión! 🌈🥳🤩  ¡Tenemos fiestas temáticas!
          Mándanos un inbox si quieres mas información.... 📲
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
    </main>
  )
}
