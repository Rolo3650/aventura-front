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
  }
}))

export default function Parties() {
  return (
    <main>
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <TitleOne text='Staff' />
        <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
          <br />
          Nuestro Staff
          <br />
          <br />
          Director General: Lic. Antonio Román Bravo
          <br />
          Subdirector: Giovanni Mejia Zamora
          <br />
          Coordinador de Operaciones Jorge M. Moreno Hernández 
          <br />
          Coordinadores: Máximo García y Daniela López
          <br />
          Sistemas: Rodrigo Morales Campuzano
          <br />
          <br />
          <TitleOne text='Exploradores' />
          <br />
          <br />
          Son Jovenes de 18 a 25 años con gran amor por su trabajo altamente capacitados en la áreas de
          pedagogía, psicología, recreación, campismo y primeros auxilios desempeñando todas estas con una alta calidad
          profesional para trasmitirles a los niñosy jovenes experiencias con una alto contenido formativo y recreativo.
          <br />
          <br />
          <TitleOne text='Programa de Asistentes y Exploradores Jr.' />
          <br />
          <br />
          Nuestra empresa cuenta con un programa único, en el cual participa un grupo de
          iniciación, que está conformado por jóvenes de entre 12 y 17 años que se encuentran en capacitación y
          formación constante participando activamente en los eventos en los cuales poco a poco van aprendiendo para
          posteriormente participar como exploradores.
          <br />
          <br />
          El principal objetivo que mantiene este programa es fomentar las actividades sanas para prevenir conductas de
          riesgo como son el alcoholismo y la drogadicción y con esto contribuir a formar jóvenes sanos que más adelante
          puedan transmitir esta experiencia vivencial a su generación y a nuevas generaciones y con esto generar un
          cambio en nuestra sociedad creando un México mejor.
          <br />
          <br />
        </Typography>
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
