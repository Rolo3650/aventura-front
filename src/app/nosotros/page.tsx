'use client'
import { CarouselOne, ServicesOne, TitleOne } from '@/components'
import { Img } from '@/core'
import { Box, Typography, BoxProps, styled } from '@mui/material'

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    paddingLeft: '60px',
    paddingRight: '60px'
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: '30px',
    paddingRight: '30px'
  },
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
  ]

  return (
    <main>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        <CarouselOne imgs={imgs} />
        <br />
        {/* <BoxStyled paddingLeft={'60px'}>
          <Typography variant='h2' fontWeight={600}>
            Últimas Noticias
          </Typography>
        </BoxStyled> */}
      </Box>
      <TitleOne text='Nosotros' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
          <br />
          ¿Quiénes Somos?
          <br />
          <br />
          Somos una empresa dedicada a la formación integral de niños y jóvenes a través de un programa formativo recreativo en donde se realizan diferentes actividades orientadas hacia el trabajo en equipo, aumento de la autoestima, fortalecimiento de la independencia, concientización de valores y sobre la importancia que realizan los padres de familia en su proceso formativo.
          <br />
          <br />
          Misión de Aventura en tu Escuela:
          Promover actividades donde se fomente la sana diversión como una herramienta para promover valores, incrementar la autoestima, incrementar la independencia y favorecer la superación de retos a través de la sana competencia.
          <br />
          <br />
          Compromiso
          En Aventura en tu Escuela desarrollamos visitas culturales, recreativas y campamentos con un gran profesionalismo y con esto garantizamos la completa seguridad de los alumnos de tu escuela, los cuales se llevaran una gran experiencia con nuestras Aventuras en las cuales se promueve la sana diversión, todo esto con el objetivo de mantener a niños y jóvenes alejados de conductas de riesgo, combinando la diversión y el aprendizaje en todo momento.
          <br />
          <br />
        </Typography>
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
