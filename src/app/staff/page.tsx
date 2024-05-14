'use client'
import { ServicesOne, TitleOne } from '@/components'
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


  return (
    <main>
      <TitleOne text='STAFF' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }}>
          <br />
          Nuestro Staff
          <br />
          Aventura en tu escuela trabaja con un personal altamente capacitado y profesional que a continuación les presentamos.
          <br />
          <br />
          Director General:
          Lic. Antonio Roman Bravo (Licenciado en Psicologia con mas de 12 años de experiencia )
          <br />
          Subdirector:
          Jesús Adrian Reyes Jiménez (Licenciatura en Psicología Social)
          <br />
          Coordinadores:
          Diego Calderon Herrera ( Licenciatura en administración)
          Omar Osuna Segovia ( Licenciatura en administración)
          <br />
          <br />
          Exploradores
          Son Jovenes de 18 a 25 años con gran amor por su trabajo altamente capacitados en la áreas de pedagogía, psicología, recreación, campismo y primeros auxilios desempeñando todas estas con una alta calidad profesional para trasmitirles a los niñosy jovenes experiencias con una alto contenido formativo y recreativo.
          <br />
          <br />
          Programa de Asistentes
          Nuestra empresa cuenta con un programa único, en el cual participa un grupo de iniciación, que está conformado por jóvenes de entre 12 y 16 años que se encuentran en capacitación y formación constante participando activamente en los eventos en los cuales poco a poco van aprendiendo para posteriormente participar como exploradores.
          <br />
          <br />
          El principal objetivo que mantiene este programa es fomentar las actividades sanas para prevenir conductas de riesgo como son el alcoholismo y la drogadicción y con esto contribuir a formar jóvenes sanos que más adelante puedan transmitir esta experiencia vivencial a su generación y a nuevas generaciones y con esto generar un cambio en nuestra sociedad creando un México mejor.
          <br />
          <br />
        </Typography>
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
