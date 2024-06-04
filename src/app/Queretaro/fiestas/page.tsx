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
    {
      alt: 'img-10',
      src: '/imgs/banners/fiestas/img_10.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/banners/fiestas/img_11.png'
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
    }
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
      <TitleOne text='Fiestas' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
          <br />
          <br />
          Ya sea que estés buscando organizar una celebración especial como: ejemplos día niño, estudiante, graduación,
          Halloween, eventos de temporada
          <br />
          <br />
          ¡Prepárate para vivir una experiencia inolvidable llena de diversión, risas y momentos memorables con Aventura
          en tu Escuela!
          <br />
          {/* <br />
          Nuestros servicios de fiestas están diseñados para ofrecer una experiencia única y memorable para los
          estudiantes de tu escuela. Con una combinación perfecta de actividades recreativas, juegos emocionantes y
          desafíos divertidos, nos aseguramos de que cada evento sea una aventura inolvidable.
          <br />
          <br />
          Desde emocionantes juegos de equipo hasta actividades creativas, nuestras fiestas promueven la sana diversión
          mientras fomentan valores importantes como el trabajo en equipo, la autoestima y la independencia. Además,
          nuestro dedicado staff está comprometido con la seguridad de todos los participantes, garantizando que cada
          momento sea seguro y lleno de diversión.
          <br /> */}
          <br />
          <br />
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
