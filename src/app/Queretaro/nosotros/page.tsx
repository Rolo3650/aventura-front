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
  left: '250px',
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
      src: '/imgs/recuerdos/staff/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/recuerdos/staff/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/recuerdos/staff/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/recuerdos/staff/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/recuerdos/staff/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/recuerdos/staff/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/recuerdos/staff/img_7.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/recuerdos/staff/img_8.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/recuerdos/staff/img_9.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/recuerdos/staff/img_10.jpg'
    }
  ]


    

  return (
    <main>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'} pt={3}>
        <CarouselThree imgs={imgs} title='Nosotros'/>
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
          </Grid>
          <GridBottom item md={8} py={'60px'} xs={12} className='bottom'>
            <Typography variant='h5'>Nosotros</Typography>
            <Typography variant='body1' textAlign={'justify'} mt={2}>
            ¿Quiénes Somos?            
            <br />
            <br />
            Somos una empresa dedicada a la formación integral de niños y jóvenes a través de un programa formativo recreativo en donde se realizan diferentes actividades orientadas hacia el trabajo en equipo, aumento de la autoestima, fortalecimiento de la independencia, concientización de valores y sobre la importancia que realizan los padres de familia en su proceso formativo.            <br />
            <br />
            <br />
            Misión de Aventura en tu Escuela: Promover actividades donde se fomente la sana diversión como una herramienta para promover valores, incrementar la autoestima, incrementar la independencia y favorecer la superación de retos a través de la sana competencia.            
            <br />
            <br />
            Compromiso En Aventura en tu Escuela desarrollamos visitas culturales, recreativas y campamentos con un gran profesionalismo y con esto garantizamos la completa seguridad de los alumnos de tu escuela, los cuales se llevaran una gran experiencia con nuestras Aventuras en las cuales se promueve la sana diversión, todo esto con el objetivo de mantener a niños y jóvenes alejados de conductas de riesgo, combinando la diversión y el aprendizaje en todo momento.
            <br />
            </Typography>
          </GridBottom>
        </Grid>
      </BoxStyled>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        {/* <TitleOne text='Paquetes' /> */}
        <br />
        
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