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
      src: '/imgs/banners/paseos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners/paseos/img_2.jpg'
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
      <TitleOne text='Renta de Autobuses' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'} paddingY={4}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
          Ofrecemos servicios de mobilidad grupal a travez de nuestros autobuses y camionetas con conductores certificados, hacia cualquier destino dentro de México.
          Estos autobuses están equipados con asientos reclinables, aire
          acondicionado, y sistemas de entretenimiento para asegurar que todos los pasajeros disfruten de un viaje
          placentero y relajante.
          <br />
          <br />
          <ul>
            <li>Autobuses de Turismo: 47 - 53 plazas</li>
            <li>Autobuses Escolar: 40 pasajeros</li>
            <li>Camioneta Sprinter: 13 o 20 pasajeros</li>
          </ul>
        </Typography>
      </BoxStyled>
      <ServicesOne />
    </main>
  )
}
