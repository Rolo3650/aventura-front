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
      src: '/imgs/banners/campamentos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners/campamentos/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/banners/campamentos/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/banners/campamentos/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/banners/campamentos/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/banners/campamentos/img_6.jpg'
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
      <TitleOne text='Campamentos Externos' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }} paddingY={4}>
          Sumérgete en la naturaleza y vive una experiencia única en nuestros campamentos en las sedes CDI y Eco Alberto. En Aventura en tu Escuela, creemos en la importancia de conectar con el entorno natural y fomentar el amor por el medio ambiente, y nuestros campamentos son la manera perfecta de hacerlo.
          <br />
          <br />
          Ubicados en entornos naturales impresionantes, nuestras sedes CDI y Eco Alberto ofrecen el escenario perfecto para que los niños y jóvenes disfruten de actividades al aire libre, aprendan sobre la biodiversidad local y se sumerjan en la aventura en un entorno seguro y supervisado.
          <br />
          <br />
          Nuestros campamentos incluyen una amplia gama de actividades emocionantes, desde senderismo y observación de aves hasta talleres de arte y actividades de aventura. Con la guía de nuestro equipo de expertos en educación ambiental, los participantes tendrán la oportunidad de explorar, descubrir y aprender de una manera divertida e interactiva.
          <br />
          <br />
          Además, nuestras sedes están equipadas con todas las comodidades necesarias para garantizar una estadía cómoda y segura, incluyendo alojamiento, alimentación balanceada y atención médica disponible en todo momento.
          <br />
          <br />
          En Aventura en tu Escuela, estamos comprometidos a proporcionar experiencias transformadoras que inspiren a los participantes a apreciar y cuidar nuestro precioso entorno natural. Únete a nosotros en nuestros campamentos en las sedes CDI y Eco Alberto y descubre el poder de la naturaleza para educar, inspirar y conectar.
          <br />
          <br />
        </Typography>
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
