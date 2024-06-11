'use client'
import { CarouselOne, MemoriesOne, ServicesOne, TitleOne } from '@/components'
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
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        <CarouselOne imgs={imgs2} />
        <br />
        {/* <BoxStyled paddingLeft={'60px'}>
          <Typography variant='h2' fontWeight={600}>
            Últimas Noticias
          </Typography>
        </BoxStyled> */}
      </Box>
      <TitleOne text='Paseos o Visitas Escolares' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'} paddingY={4}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
          En Aventura en tu Escuela, nos enorgullece ofrecer los mejores viajes culturales para escuelas en todo México.
          ¡Atrévete a organizar una experiencia educativa inolvidable para tus alumnos en algunos de los destinos más
          fascinantes del país!
          <br />
          <br />
          Para garantizar la seguridad de todos los participantes, cada grupo contará con la supervisión de al menos un
          explorador por cada 10-12 alumnos. Además, ofrecemos un seguro contra accidentes con una cobertura de hasta
          $20,000.00 y servicio médico por botiquín disponible en todo momento.
          <br />
          <br />
          ¡Embárcate en una emocionante aventura cultural con Aventura en tu Escuela y crea recuerdos duraderos para tus
          estudiantes!
          <br />
          <br />
          Incluye:
          <br />
          <br />
          <li> Transporte en autobús de turismo</li>
          <li>Alimentos por lounch (opcional)</li>
          <li>Accesos a los lugares de visita</li>
          <li>Recorridos guiados</li>
          <li>Información cultural detallada</li>
          <li>1 explorador por cada 15 alumnos</li>
          <li>Actividades recreativas</li>
          <li>Seguro contra accidentes (hasta $ 20,000.00)</li>
          <li>Servicio medico por botiquín</li>
        </Typography>
      </BoxStyled>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        <TitleOne text='Paquetes' />
        <br />
        <CarouselOne imgs={imgs} />
        <br />
        {/* <BoxStyled paddingLeft={'60px'}>
          <Typography variant='h2' fontWeight={600}>
            Últimas Noticias
          </Typography>
        </BoxStyled> */}
      </Box>
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <MemoriesOne title='Recuerdos' imgs={imgs2} />
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
