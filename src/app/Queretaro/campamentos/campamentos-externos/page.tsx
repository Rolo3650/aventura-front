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
        <Typography variant='body1' sx={{ textAlign: 'justify' }} paddingY={4} fontWeight={'bold'}>
          Sumérgete en la naturaleza y vive una experiencia única en nuestros campamentos en las sedes CDI y Eco
          Alberto. En Aventura en tu Escuela, creemos en la importancia de conectar con el entorno natural y fomentar el
          amor por el medio ambiente, y nuestros campamentos son la manera perfecta de hacerlo.
          <br />
          <br />
          Ubicados en entornos naturales impresionantes, nuestras sedes CDI y Eco Alberto ofrecen el escenario perfecto
          para que los niños y jóvenes disfruten de actividades al aire libre, aprendan sobre la biodiversidad local y
          se sumerjan en la aventura en un entorno seguro y supervisado.
          <br />
          <br />
          Sedes:
          <br />
          <br />
          <li>CDI (Tepoz)</li>
          <li>Finca Villa Victoria (EDO MEX)</li>
          <li>Oaxtepec Dorados</li>
          <li>Eco Alberto</li>
          <li>Abekany Camp</li>
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
          <li>Noche disco</li>
          <li>Actividades Acuáticas</li>
          <li>Clausura con participación de papás</li>
          <li>Staff capacitado, 1 explorador por cada 15 alumnos</li>
          <li>Actividades recreativas</li>
          <li>Seguro contra accidentes (hasta $ 20,000.00)</li>
          <li>Servicio medico</li>
        </Typography>
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
