'use client'
import { ServicesOne, TitleOne } from '@/components'
import { Box, Typography, BoxProps, styled } from '@mui/material'

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    paddingLeft: '60px',
    paddingRight: '60px',
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: '30px',
    paddingRight: '30px',
  },
}))

const BoxBackground = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: '4px',
  width: '100%',
  backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
  padding: '20px', // Espacio interno para el contenido
  marginBottom: '20px', // Espaciado entre secciones
  [theme.breakpoints.up('md')]: {
    position: 'relative',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}))

const BoxBackgroundStaff = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: '4px',
  width: '100%',
  backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
  padding: '20px',
  marginBottom: '20px',
  marginTop: '10px', // Ajustar espacio con la navbar
  height: 'auto', // Para controlar la altura según el contenido
  [theme.breakpoints.up('md')]: {
    position: 'relative',
  },
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}))

export default function Parties() {
  return (
    <main>
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
      <BoxBackgroundStaff>
          <TitleOne text='Staff' />
          <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
            Nuestro Staff
            <br />
            <br />
            Director General: Lic. Antonio Román Bravo
            <br />
            Subdirector: Giovanni Mejia Zamora
            <br />
            Coordinadora de Operaciones: Lic. Esmeralda Organista Hernández
            <br />
            Coordinadores : Gerardo R. Pantoja e Ingrid Luna Castillo
            <br />
            Coordinadora After School: Daniela Flores Sosa
            <br />
            Coordinador de Logística: César del Bosque Gutiérrez
            <br />
            Jefe de Logística: Gerardo del Bosque Gutiérrez
            <br />
            Auxiliar de Logistica: Alejandro Urrutia Gamboa
            <br />
            Formación académica y sistemas: Rodrigo Morales Campuzano
          </Typography>
        </BoxBackgroundStaff>

        <BoxBackground>
          <TitleOne text='Exploradores' />
          <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
            Son Jovenes de 18 a 25 años con gran amor por su trabajo altamente capacitados en la áreas de pedagogía,
            psicología, recreación, campismo y primeros auxilios desempeñando todas estas con una alta calidad profesional
            para trasmitirles a los niños y jóvenes experiencias con una alto contenido formativo y recreativo.
          </Typography>
        </BoxBackground>

        <BoxBackground>
          <TitleOne text='Programa Asistentes y Exploradores Jr.' />
          <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
            Nuestra empresa cuenta con un programa único, en el cual participa un grupo de iniciación, que está conformado
            por jóvenes de entre 12 y 17 años que se encuentran en capacitación y formación constante participando
            activamente en los eventos en los cuales poco a poco van aprendiendo para posteriormente participar como
            exploradores.
            <br />
            <br />
            El principal objetivo que mantiene este programa es fomentar las actividades sanas para prevenir conductas de
            riesgo como son el alcoholismo y la drogadicción y con esto contribuir a formar jóvenes sanos que más adelante
            puedan transmitir esta experiencia vivencial a su generación y a nuevas generaciones y con esto generar un
            cambio en nuestra sociedad creando un México mejor.
          </Typography>
        </BoxBackground>
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
