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
      src: '/imgs/banners/fiestas_tematicas/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners/fiestas_tematicas/img_2.jpeg'
    },
    
    // {
    //   alt: 'img-3',
    //   src: '/imgs/banners/fiestas_tematicas/img_3.jpg'
    // },
    {
      alt: 'img-4',
      src: '/imgs/banners/fiestas_tematicas/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/banners/fiestas_tematicas/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/banners/fiestas_tematicas/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/banners/fiestas_tematicas/img_7.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/banners/fiestas_tematicas/img_8.jpeg'
    },
    {
      alt: 'img-9',
      src: '/imgs/banners/fiestas_tematicas/img_9.jpeg'
    },
    {
      alt: 'img-10',
      src: '/imgs/banners/fiestas_tematicas/img_10.jpeg'
    },
    {
      alt: 'img-11',
      src: '/imgs/banners/fiestas_tematicas/img_11.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/banners/fiestas_tematicas/img_12.jpeg'
    }
  ]

  const imgs2: Img[] = [
    {
      alt: 'img-1',
      src: '/imgs/recuerdos/fiestas_tematicas/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/recuerdos/fiestas_tematicas/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/recuerdos/fiestas_tematicas/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/recuerdos/fiestas_tematicas/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/recuerdos/fiestas_tematicas/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/recuerdos/fiestas_tematicas/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/recuerdos/fiestas_tematicas/img_7.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/recuerdos/fiestas_tematicas/img_8.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/recuerdos/fiestas_tematicas/img_9.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/recuerdos/fiestas_tematicas/img_10.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/recuerdos/fiestas_tematicas/img_11.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/recuerdos/fiestas_tematicas/img_12.jpg'
    },
    {
      alt: 'img-13',
      src: '/imgs/recuerdos/fiestas_tematicas/img_13.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/recuerdos/fiestas_tematicas/img_14.jpg'
    },
    {
      alt: 'img-15',
      src: '/imgs/recuerdos/fiestas_tematicas/img_15.jpg'
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
      <TitleOne text='Eventos escolares' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'} paddingY={4}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
          ¿Estás listo para llevar la diversión al siguiente nivel en tu escuela? En Aventura en tu Escuela, ofrecemos
          emocionantes eventos temáticos que transformarán tu escuela en un mundo de aventuras y diversión.
          {/* <br />
                    <br />
                    Nuestras eventos temáticos están diseñadas para brindar una experiencia única y emocionante para los estudiantes, llenando el ambiente escolar con alegría, creatividad y emoción. Desde fiestas de disfraces hasta eventos inspirados en tus películas o libros favoritos, ofrecemos una amplia variedad de temas para que elijas el que mejor se adapte a los intereses de tu escuela.
                    <br />
                    <br />
                    Cada evento temático incluye una increíble decoración, actividades divertidas y emocionantes juegos diseñados para involucrar a todos los estudiantes y fomentar el trabajo en equipo y la creatividad. Nuestro dedicado equipo de profesionales se encarga de cada detalle, desde la planificación hasta la ejecución, garantizando que tu fiesta sea un éxito rotundo. */}
          <br />
          <br />
          Con Aventura en tu Escuela, puedes estar seguro de que tu evento escolar será todo un éxito. ¡Déjanos llevar
          la emoción y la aventura a tu escuela y crea recuerdos inolvidables para tus estudiantes!
          <br />
          <br />
          Contamos con eventos para el Día del Niño, Día del Estudiante, San Valentín, Mañanita Mexicana, Posadas, Halloween, Día del Padre, Día de la Madre y/o eventos de integración.
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
