'use client'
import { CarouselFour, CarouselThree, ServicesOne } from '@/components'
import { Img } from '@/core'
import { Box, Typography, BoxProps, styled, Grid, GridProps } from '@mui/material'

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
      src: '/imgs/banners/fiestas_tematicas/img_11.jpg'
    }
  ]

  const imgs2: Img[] = [
    {
      alt: 'img-2',
      src: '/imgs/recuerdos/campamentos_aventura/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/recuerdos/campamentos_aventura/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/recuerdos/campamentos_aventura/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/recuerdos/campamentos_aventura/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/recuerdos/campamentos_aventura/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/recuerdos/campamentos_aventura/img_7.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/recuerdos/campamentos_aventura/img_8.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/recuerdos/campamentos_aventura/img_9.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/recuerdos/campamentos_aventura/img_10.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/recuerdos/campamentos_aventura/img_11.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/recuerdos/campamentos_aventura/img_12.jpg'
    },
    {
      alt: 'img-13',
      src: '/imgs/recuerdos/campamentos_aventura/img_13.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/recuerdos/campamentos_aventura/img_14.jpg'
    },
    {
      alt: 'img-15',
      src: '/imgs/recuerdos/campamentos_aventura/img_15.jpg'
    },
    {
      alt: 'img-16',
      src: '/imgs/recuerdos/campamentos_aventura/img_16.jpg'
    },
    {
      alt: 'img-17',
      src: '/imgs/recuerdos/campamentos_aventura/img_17.jpg'
    },
    {
      alt: 'img-18',
      src: '/imgs/recuerdos/campamentos_aventura/img_18.jpg'
    },
    {
      alt: 'img-19',
      src: '/imgs/recuerdos/campamentos_aventura/img_19.jpg'
    },
    {
      alt: 'img-20',
      src: '/imgs/recuerdos/campamentos_aventura/img_20.jpg'
    },
    {
      alt: 'img-21',
      src: '/imgs/recuerdos/campamentos_aventura/img_21.jpg'
    },
    {
      alt: 'img-22',
      src: '/imgs/recuerdos/campamentos_aventura/img_22.jpg'
    },
    {
      alt: 'img-23',
      src: '/imgs/recuerdos/campamentos_aventura/img_23.jpg'
    },
    {
      alt: 'img-24',
      src: '/imgs/recuerdos/campamentos_aventura/img_24.jpg'
    },
    {
      alt: 'img-25',
      src: '/imgs/recuerdos/campamentos_aventura/img_25.jpg'
    }
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
            <Typography variant='h5'>Campamentos Aventura</Typography>
            <Typography variant='body1' sx={{ textAlign: 'justify' }} paddingY={4} fontWeight={'bold'}>
              CONTRATA PARA TU ESCUELA, NUESTROS CAMPAMENTOS DE AVENTURA EN LOS QUE TE LLEVAREMOS INCREÍBLES SORPRESAS.
              🥳🎁
              <br />
              <br />
              Contrata para tu escuela y conoce a los diferentes campamentos que tenemos para ti como: Aventuras,
              Espacial 🪐, Medieval 🤴, Magos y hechiceras 🧙‍♂, superhéroes 🦸‍♂, mexicano, halloween 👻 y ¡más!
              <br />
              <br />
              ¡Será una experiencia completamente DIFERENTE Y DIVERTIDA! Solicita tu presupuesto de acuerdo al número de
              niños 💵 contamos con paquetes desde 15 niños
              {/* <br />
              <br />
            Cada campamento cuenta con la supervisión de nuestro equipo de expertos, incluyendo al menos un explorador por cada patrulla o equipo de alumnos, para garantizar la seguridad y el bienestar de todos los participantes. Además, ofrecemos servicio médico de primeros auxilios en caso de cualquier emergencia. */}
              <br />
              <br />
              Incluye:
              <br />
              <br />
              <ul>
              <li>Alimentos (cena y desayuno)</li>
              <li>Fogata</li>
              <li>Actividades Acuáticas</li>
              <li>Clausura con participación de papás</li>
              <li>Staff capacitado, 1 explorador por cada 10 alumnos</li>
              <li>Actividades recreativas</li>
              <li>Seguro contra accidentes (hasta $ 100,000.00)</li>
              <li>Servicio médico de primeros auxilios</li>
              </ul>
              {/* Nuestros campamentos en el plantel ofrecen todo lo necesario para vivir una verdadera aventura al aire libre,
              con el equipo completo y los elementos esenciales para una experiencia auténtica. Desde tiendas de campaña
              adaptables a cualquier superficie hasta alimentos deliciosos y nutritivos servidos en horarios regulares, nos
              aseguramos de que cada detalle esté cuidadosamente planificado para brindar una experiencia inolvidable.
              <br />
              <br />
              Además, nuestros campamentos incluyen una fogata nocturna, donde los estudiantes pueden compartir historias,
              cantar canciones y disfrutar del compañerismo bajo las estrellas. También ofrecemos actividades recreativas y
              juegos organizados para mantener a los participantes entretenidos durante toda la jornada.
              <br />
              <br />
              Al final del campamento, celebramos una clausura especial con la participación de los padres de familia, donde
              los estudiantes pueden compartir sus experiencias y logros. Además, cada participante recibe una playera con
              el nombre de la escuela como recuerdo de su emocionante aventura.
              <br />
              <br />
              Con nuestro servicio de campamentos en el plantel, ofrecemos una experiencia única y enriquecedora que dejará
              recuerdos duraderos en los corazones de todos los participantes. ¡Únete a nosotros y vive la emoción de un
              campamento sin salir de tu escuela con Aventura en tu Escuela!
              <br />
              <br /> */}
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
            <video src='/imgs/banners/campamentos_aventura/video_1.mp4' autoPlay={true} controls={true}/>
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
