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

const BoxVideo = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    '& video': {
      width: '900px',
      height: '500px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: '100vh',
    '& video': {
      width: '320px',
      height: '200px'
    }
  }
}))

export default function Parties() {
  const imgs: Img[] = [
    {
      alt: 'img-7',
      src: '/imgs/banners-queretaro/campamentos/img_7.jpg'
    },
    {
      alt: 'img-1',
      src: '/imgs/banners-queretaro/campamentos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners-queretaro/campamentos/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/banners-queretaro/campamentos/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/banners-queretaro/campamentos/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/banners-queretaro/campamentos/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/banners-queretaro/campamentos/img_6.jpg'
    }
  ]

  const imgs2: Img[] = [
    {
      alt: 'img-1',
      src: '/imgs/recuerdos/campamentos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/recuerdos/campamentos/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/recuerdos/campamentos/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/recuerdos/campamentos/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/recuerdos/campamentos/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/recuerdos/campamentos/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/recuerdos/campamentos/img_7.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/recuerdos/campamentos/img_8.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/recuerdos/campamentos/img_9.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/recuerdos/campamentos/img_10.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/recuerdos/campamentos/img_11.jpg'
    }
  ]

  const imgs3: Img[] = [
    {
      alt: 'img-1',
      src: '/imgs/recuerdos/campamentos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/recuerdos/campamentos/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/recuerdos/campamentos/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/recuerdos/campamentos/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/recuerdos/campamentos/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/recuerdos/campamentos/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/recuerdos/campamentos/img_7.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/recuerdos/campamentos/img_8.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/recuerdos/campamentos/img_9.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/recuerdos/campamentos/img_10.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/recuerdos/campamentos/img_11.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/recuerdos/campamentos/img_12.jpg'
    },
    {
      alt: 'img-13',
      src: '/imgs/recuerdos/campamentos/img_13.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/recuerdos/campamentos/img_14.jpg'
    },
    {
      alt: 'img-15',
      src: '/imgs/recuerdos/campamentos/img_15.jpg'
    },
    {
      alt: 'img-16',
      src: '/imgs/recuerdos/campamentos/img_16.jpg'
    },
    {
      alt: 'img-17',
      src: '/imgs/recuerdos/campamentos/img_17.jpg'
    },
    {
      alt: 'img-18',
      src: '/imgs/recuerdos/campamentos/img_18.jpg'
    },
    {
      alt: 'img-19',
      src: '/imgs/recuerdos/campamentos/img_19.jpg'
    },
    {
      alt: 'img-20',
      src: '/imgs/recuerdos/campamentos/img_20.jpg'
    },
    {
      alt: 'img-21',
      src: '/imgs/recuerdos/campamentos/img_21.jpg'
    },
    {
      alt: 'img-22',
      src: '/imgs/recuerdos/campamentos/img_22.jpg'
    },
    {
      alt: 'img-23',
      src: '/imgs/recuerdos/campamentos/img_23.jpg'
    },
    {
      alt: 'img-24',
      src: '/imgs/recuerdos/campamentos/img_24.jpg'
    },
    {
      alt: 'img-25',
      src: '/imgs/recuerdos/campamentos/img_25.jpg'
    },
    {
      alt: 'img-26',
      src: '/imgs/recuerdos/campamentos/img_26.jpg'
    },
    {
      alt: 'img-27',
      src: '/imgs/recuerdos/campamentos/img_27.jpg'
    },
    {
      alt: 'img-28',
      src: '/imgs/recuerdos/campamentos/img_28.jpg'
    },
    {
      alt: 'img-29',
      src: '/imgs/recuerdos/campamentos/img_29.jpg'
    },
    {
      alt: 'img-20',
      src: '/imgs/recuerdos/campamentos/img_20.jpg'
    },
    {
      alt: 'img-31',
      src: '/imgs/recuerdos/campamentos/img_31.jpg'
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
      <TitleOne text='Campamentos Externos' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }} paddingY={4} fontWeight={'bold'}>
          Sumérgete en la naturaleza y vive una experiencia única en nuestros campamentos en nuestras diferentes sedes.
          En Aventura en tu Escuela, creemos en la importancia de conectar con el entorno natural y fomentar el amor por
          el medio ambiente, y nuestros campamentos son la manera perfecta de hacerlo.
          <br />
          <br />
          Ubicados en entornos naturales impresionantes, nuestras sedes ofrecen el escenario perfecto para que los niños
          y jóvenes disfruten de actividades al aire libre, aprendan sobre la sana covivencia y se sumerjan en la
          aventura en un entorno seguro y fascinante.
          <br />
          <br />
          Sedes:
          <br />
          <br />
          <li>Rancho CDI - TPOZ (Tepotzotlan)</li>
          <li>Finca Villa Victoria (EDO MEX)</li>
          <li>Club Dorados (Oaxtepec)</li>
          <li>Eco Alberto (Hidalgo)</li>
          <li>Rancho Abekany (Tepotzotlan)</li>
          <li>Rancho Diego (Morelos)</li>
          <li>Malinalco Camper Club (EDO MEX)</li>
          <li>Rancho Aventura (EDO MEX)</li>
          <li>Cotocamp (San Juan del Río)</li>
          <br />
          <br />
          Incluye:
          <br />
          <br />
          <li>Alimentos (desayuno, comida y cena) 4 o 7 alimentos abundantes</li>
          <li>Transporte</li>
          <li>Hospedaje</li>
          <li>Fogata</li>
          <li>Playera</li>
          <li>Alberca</li>
          <li>Noche disco</li>
          <li>Lluvia de Estrellas</li>
          <li>Staff capacitado, 1 explorador por cada 10 alumnos</li>
          <li>Actividades recreativas</li>
          <li>Seguro contra accidentes (hasta $ 100,000.00)</li>
          <li>Servicio médico</li>
          <li>Galería de fotos mediante el grupo WhatsApp</li>
          <li>Programa de actividades, recreativas y campismo</li>
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
      <br />
      <TitleOne text='Finca Villa Victoria (EDO MEX)' />
      <br />
      <BoxVideo textAlign={'center'}>
        <video src='/imgs/banners-queretaro/campamentos/Video Camp Villa victoria.mp4' autoPlay={false} controls />
      </BoxVideo>
      <br />
      <br />
      <TitleOne text='Finca Villa Victoria (EDO MEX)' />
      <br />
      <BoxVideo textAlign={'center'}>
        <video src='/imgs/banners-queretaro/campamentos/video_1.mp4' autoPlay={false} controls />
      </BoxVideo>
      <br />
      <TitleOne text='Finca Villa Victoria (EDO MEX)' />
      <br />
      <BoxVideo textAlign={'center'}>
        <video src='/imgs/banners-queretaro/campamentos/video_2.mp4' autoPlay={false} controls />
      </BoxVideo>
      <ServicesOne />
    </main>
  )
}
