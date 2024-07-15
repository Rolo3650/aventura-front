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
    
    // {
    //   alt: 'img-10',
    //   src: '/imgs/banners/fiestas/img_10.jpg'
    // },
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
          ¿Quieres una fiesta diferente y única? 🥳
          <br />
          <br />
          Te ofrecemos nuestras  FIESTAS DE AVENTURA en las que llevamos toda la diversión y la AVENTURA hasta ti.  🏡🏘
          <br />
          <br />
          Contamos con paquetes desde 5 niños y muchísimas actividades que harán que pases ¡un día lleno de diversión! 🌈🥳🤩  ¡Tenemos fiestas temáticas!
          Mándanos un inbox si quieres mas información.... 📲
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
        <MemoriesOne title='Recuerdos' imgs={imgs3} />
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
