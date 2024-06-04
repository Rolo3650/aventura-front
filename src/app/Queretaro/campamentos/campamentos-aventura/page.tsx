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
      <TitleOne text='Campamentos Aventura' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }} paddingY={4} fontWeight={'bold'}>
          En Aventura en tu Escuela, hemos creado un nuevo concepto de diversión que lleva la emoción de un campamento
          directamente a tu escuela. Con nuestro innovador servicio de campamentos en el plantel, los estudiantes de
          Kinder, Primaria y Secundaria pueden disfrutar de una experiencia completamente diferente sin tener que salir
          de su entorno familiar.
          <br />
          <br />
          Nuestros programas de campamento están diseñados para promover la integración, el trabajo en equipo y el
          desarrollo personal a través de una variedad de actividades formativas y dinámicas. Desde emocionantes rallies
          hasta actividades de competencia, destreza y habilidad, cada día está lleno de diversión y aprendizaje.
          {/* <br />
          <br />
        Cada campamento cuenta con la supervisión de nuestro equipo de expertos, incluyendo al menos un explorador por cada patrulla o equipo de alumnos, para garantizar la seguridad y el bienestar de todos los participantes. Además, ofrecemos servicio médico de primeros auxilios en caso de cualquier emergencia. */}
          <br />
          <br />
          Incluye:
          <br />
          <br />
          <li>Alimentos (cena y desayuno)</li>
          <li>Fogata</li>
          <li>Actividades Acuáticas</li>
          <li>Clausura con participación de papás</li>
          <li>Staff capacitado, 1 explorador por cada 15 alumnos</li>
          <li>Actividades recreativas</li>
          <li>Seguro contra accidentes (hasta $ 20,000.00)</li>
          <li>Servicio medico por botiquín</li>
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
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
