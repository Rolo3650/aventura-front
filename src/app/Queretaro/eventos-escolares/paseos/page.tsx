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
      alt: 'img-3',
      src: '/imgs/banners-queretaro/paseos/img_3.jpg'
    },
    {
      alt: 'img-1',
      src: '/imgs/banners-queretaro/paseos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners-queretaro/paseos/img_2.jpg'
    }
  ]

  const imgs2: Img[] = [
    {
      alt: 'img-1',
      src: '/imgs/recuerdos/paseos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/recuerdos/paseos/img_2.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/recuerdos/paseos/img_3.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/recuerdos/paseos/img_4.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/recuerdos/paseos/img_5.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/recuerdos/paseos/img_6.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/recuerdos/paseos/img_7.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/recuerdos/paseos/img_8.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/recuerdos/paseos/img_9.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/recuerdos/paseos/img_10.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/recuerdos/paseos/img_11.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/recuerdos/paseos/img_12.jpg'
    },
    {
      alt: 'img-13',
      src: '/imgs/recuerdos/paseos/img_13.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/recuerdos/paseos/img_14.jpg'
    },
    {
      alt: 'img-15',
      src: '/imgs/recuerdos/paseos/img_15.jpg'
    },
    {
      alt: 'img-16',
      src: '/imgs/recuerdos/paseos/img_16.jpg'
    },
    {
      alt: 'img-17',
      src: '/imgs/recuerdos/paseos/img_17.jpg'
    },
    {
      alt: 'img-18',
      src: '/imgs/recuerdos/paseos/img_18.jpg'
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
      <TitleOne text='Paseos o Visitas Escolares' />
      <BoxStyled maxWidth={'1200px'} marginX={'auto'} paddingY={4}>
        <Typography variant='body1' sx={{ textAlign: 'justify' }} fontWeight={'bold'}>
          En AVENTURA EN TU ESCUELA entendemos la importancia de brindar a los estudiantes experiencias educativas y divertidas. Es por eso que hemos diseñado un servicio de excursiones escolares, pensado para divertirse, aprender y conocer lugares y regiones de México.
          <br />
          <br />
          Con nuestras salidas educativas
          Podrán descubrir:
          <ul>
            <li>
              MUSEOS
            </li>
            <li>
              FABRICAS
            </li>
            <li>
              PARQUES
            </li>
            <li>
              ZONAS ARQUEOLOGICAS
            </li>
          </ul>
          <br />
          <br />
          Prismas Basálticos, disfrutar de la emoción sin límites en Six Flags México, sumergirse en la historia de Guanajuato y explorar las enigmáticas Pirámides de Teotihuacán. Nuestro equipo especializado se encarga de todos los detalles logísticos y de seguridad, para que los alumnos puedan disfrutar al máximo de estas aventuras inolvidables. ¡Únete a un viaje de aprendizaje y diversión,con memorias perdurables en México!
          <br />
          <br />
          TE INCLUIMOS:
          <br />
          <br />
          <ul>
            <li>
              Transporte en autobús de turismo
            </li>
            <li>
              Alimentos (Opcional)
            </li>
            <li>
              Entradas a los lugares de visita
            </li>
            <li>
              Recorridos guiados
            </li>
            <li>
              Información cultural detallada
            </li>
            <li>
              1 explorador por cada 15 alumnos
            </li>
            <li>
              Botiquin de primeros auxilios
            </li>
          </ul>
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
