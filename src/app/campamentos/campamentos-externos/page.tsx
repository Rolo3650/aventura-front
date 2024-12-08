'use client'
import { CarouselFour, CarouselThree, ServicesOne } from '@/components'
import { Img } from '@/core'
import { Box, Typography, BoxProps, styled, Grid, GridProps, TypographyProps } from '@mui/material'

const TypographyStyled = styled(Typography)<TypographyProps>(({}) => ({
  display: 'inline-block',
  backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'none',
  padding: '5px 30px',
  transform: 'rotate(-5deg)',
  borderRadius: '4px',
  boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
}))

const BoxStyled = styled(Box)<BoxProps>(({}) => ({
  padding: '0 30px',
  position: 'relative'
}))

const BoxBackground = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: '4px',
  bottom: 0,
  left: '30px',
  width: '66%',
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
    [theme.breakpoints.up('md')]: {
      paddingLeft: '60px',
    },
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
    {
      alt: 'img-7',
      src: '/imgs/banners/campamentos/img_7.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/banners/campamentos/img_8.jpg'
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
    },
    {
      alt: 'img-32',
      src: '/imgs/recuerdos/campamentos/img_32.jpg'
    },
    {
      alt: 'img-33',
      src: '/imgs/recuerdos/campamentos/img_33.jpg'
    },
    {
      alt: 'img-34',
      src: '/imgs/recuerdos/campamentos/img_34.jpg'
    },
    {
      alt: 'img-35',
      src: '/imgs/recuerdos/campamentos/img_35.jpg'
    },
    {
      alt: 'img-36',
      src: '/imgs/recuerdos/campamentos/img_36.jpg'
    },
    {
      alt: 'img-37',
      src: '/imgs/recuerdos/campamentos/img_37.jpg'
    },
    {
      alt: 'img-38',
      src: '/imgs/recuerdos/campamentos/img_38.jpg'
    },
    {
      alt: 'img-39',
      src: '/imgs/recuerdos/campamentos/img_39.jpg'
    },
    {
      alt: 'img-40',
      src: '/imgs/recuerdos/campamentos/img_40.jpg'
    },
    {
      alt: 'img-41',
      src: '/imgs/recuerdos/campamentos/img_41.jpg'
    },
    {
      alt: 'img-42',
      src: '/imgs/recuerdos/campamentos/img_42.jpg'
    },
    {
      alt: 'img-43',
      src: '/imgs/recuerdos/campamentos/img_43.jpg'
    },
    {
      alt: 'img-44',
      src: '/imgs/recuerdos/campamentos/img_44.jpg'
    },
    {
      alt: 'img-45',
      src: '/imgs/recuerdos/campamentos/img_45.jpg'
    },
    {
      alt: 'img-46',
      src: '/imgs/recuerdos/campamentos/img_46.jpg'
    },
    {
      alt: 'img-47',
      src: '/imgs/recuerdos/campamentos/img_47.jpg'
    },
    {
      alt: 'img-48',
      src: '/imgs/recuerdos/campamentos/img_48.jpg'
    },
    {
      alt: 'img-50',
      src: '/imgs/recuerdos/campamentos/img_50.jpg'
    },
    {
      alt: 'img-51',
      src: '/imgs/recuerdos/campamentos/img_51.jpg'
    },
    {
      alt: 'img-52',
      src: '/imgs/recuerdos/campamentos/img_52.jpg'
    },
    {
      alt: 'img-53',
      src: '/imgs/recuerdos/campamentos/img_53.jpg'
    },
    {
      alt: 'img-54',
      src: '/imgs/recuerdos/campamentos/img_54.jpg'
    },
    {
      alt: 'img-55',
      src: '/imgs/recuerdos/campamentos/img_55.jpg'
    },
    {
      alt: 'img-56',
      src: '/imgs/recuerdos/campamentos/img_56.jpg'
    },
    {
      alt: 'img-57',
      src: '/imgs/recuerdos/campamentos/img_57.jpg'
    },
    {
      alt: 'img-58',
      src: '/imgs/recuerdos/campamentos/img_58.jpg'
    },
    {
      alt: 'img-59',
      src: '/imgs/recuerdos/campamentos/img_59.jpg'
    },
    {
      alt: 'img-60',
      src: '/imgs/recuerdos/campamentos/img_60.jpg'
    },
    {
      alt: 'img-61',
      src: '/imgs/recuerdos/campamentos/img_61.jpg'
    },
    {
      alt: 'img-62',
      src: '/imgs/recuerdos/campamentos/img_62.jpg'
    },
    {
      alt: 'img-63',
      src: '/imgs/recuerdos/campamentos/img_63.jpg'
    },
    {
      alt: 'img-64',
      src: '/imgs/recuerdos/campamentos/img_64.jpg'
    },
    {
      alt: 'img-65',
      src: '/imgs/recuerdos/campamentos/img_65.jpg'
    },
    {
      alt: 'img-66',
      src: '/imgs/recuerdos/campamentos/img_66.jpg'
    },
    {
      alt: 'img-67',
      src: '/imgs/recuerdos/campamentos/img_67.jpg'
    },
    {
      alt: 'img-68',
      src: '/imgs/recuerdos/campamentos/img_68.jpg'
    },
    {
      alt: 'img-69',
      src: '/imgs/recuerdos/campamentos/img_69.jpg'
    },
    {
      alt: 'img-70',
      src: '/imgs/recuerdos/campamentos/img_70.jpg'
    },
    {
      alt: 'img-71',
      src: '/imgs/recuerdos/campamentos/img_71.jpg'
    },
  ]

  return (
    <main>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'} pt={3}>
        <CarouselThree imgs={imgs} title='Campamentos' />
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
          <GridBottom item md={6} py={'60px'} xs={12} className='bottom'>
            <Typography variant='h5'>Campamentos Externos</Typography>
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
              <br />
              <br />
              Incluye:
              <br />
              <br />
              <ul>
                <li>Alimentos (desayuno, comida y cena) 4 o 7 alimentos abundantes</li>
                <li>Trasnporte</li>
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
              </ul>
            </Typography>

            {/* <Box mt={3} textAlign={'center'}>
              <Button
                variant='contained'
                sx={{
                  background: '#9943A1',
                  textTransform: 'none',
                  color: 'white'
                }}
              >
                <Typography variant='h5' color={'inherit'} px={3}>
                  Ver más...
                </Typography>
              </Button>
            </Box> */}
          </GridBottom>
          <Grid
            item
            md={6}
            xs={12}
            py={'60px'}
            px={'30px'}
            sx={{
              '& video': {
                width: '100%',
                boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
                borderRadius: '8px',

                // transform: 'rotate(+5deg)'
              }
            }}
          >
            <TypographyStyled variant='h5'>Finca Villa Victoria (EDO MEX)</TypographyStyled>
            <video src='/imgs/banners/campamentos/Video Camp Villa victoria.mp4' autoPlay={true} controls={true}/>
            <TypographyStyled variant='h5'>Rancho Abekany (Tepotzotlan)</TypographyStyled>
            <video src='/imgs/banners/campamentos/video_1.mp4' autoPlay={false} controls={true}/>
            <TypographyStyled variant='h5'>CDI (Tepotzotlan)</TypographyStyled>
            <video src='/imgs/banners/campamentos/video_2.mp4' autoPlay={false} controls={true}/>
          </Grid>
        </Grid>
      </BoxStyled>
      <Box maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        <br />
        <CarouselFour imgs={imgs2} title='Recuerdos' />
        <br />
        {/* <BoxStyled paddingLeft={'60px'}>
          <Typography variant='h2' fontWeight={600}>
            Últimas Noticias
          </Typography>
        </BoxStyled> */}
      </Box>
      <ServicesOne />
    </main>
  )
}
