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
          Sumérgete en la naturaleza y vive una experiencia única en nuestros campamentos en nuestras diferentes sedes. En Aventura en tu Escuela, creemos en la importancia de conectar con el entorno natural y fomentar el
          amor por el medio ambiente, y nuestros campamentos son la manera perfecta de hacerlo.
          <br />
          <br />
          Ubicados en entornos naturales impresionantes, nuestras sedes ofrecen el escenario perfecto
          para que los niños y jóvenes disfruten de actividades al aire libre, aprendan sobre la sana covivencia y
          se sumerjan en la aventura en un entorno seguro y fascinante.
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
          <br />
          <br />
          Incluye:
          <br />
          <br />
          <li>Alimentos (desayuno, comida y cena) 4 o 7 alimentos abundantes</li>
          <li>Tranporte</li>
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
        <MemoriesOne title='Recuerdos' imgs={imgs2} />
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
