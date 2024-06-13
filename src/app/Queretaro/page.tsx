'use client'
import { CarouselOne, ServicesOne } from '@/components'
import { Img } from '@/core'
import { Box, BoxProps, styled } from '@mui/material'

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    maxHeight: '600px'
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: '100vh'
  }
}))

const BoxVideo = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    '& iframe': {
      width: '900px',
      height: '500px'
    }
  },
  [theme.breakpoints.down('sm')]: {
    maxHeight: '100vh',
    '& iframe': {
      width: '320px',
      height: '200px'
    }
  }
}))

export default function Home() {
  const imgs: Img[] = [
    {
      alt: 'img-1',
      src: '/imgs/banners-queretaro/campamentos/img_7.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners-queretaro/campamentos_aventura/img_9.jpg'
    },
    {
      alt: 'img-15',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_15.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_14.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/banners-queretaro/curso/img_3.jpg'
    },
    {
      alt: 'img-1',
      src: '/imgs/banners-queretaro/fiestas/img_1.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/banners-queretaro/campamentos_aventura/img_11.jpg'
    },
    {
      alt: 'img-6',
      src: '/imgs/banners-queretaro/curso/img_4.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/banners-queretaro/fiestas/img_12.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/banners-queretaro/campamentos_aventura/img_12.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/banners-queretaro/fiestas/img_11.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/banners-queretaro/fiestas/img_4.jpg'
    },
  ]

  return (
    <main>
      <Box maxWidth={'1200px'} display={'flex'} justifyContent={'center'} m={'auto'} mb={3}>
        <img src='/imgs/banners-queretaro/curso/img_1.jpg' alt='img-curso' className='w-100' />
      </Box>
      <BoxStyled maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        <CarouselOne imgs={imgs} />
        <br />
        {/* <BoxStyled paddingLeft={'60px'}>
          <Typography variant='h2' fontWeight={600}>
            Últimas Noticias
          </Typography>
        </BoxStyled> */}
      </BoxStyled>
      <br />
      <BoxVideo textAlign={'center'}>
        <iframe src='/imgs/banners-queretaro/campamentos/Video Camp Villa victoria.mp4' />
      </BoxVideo>
      <br />
      <ServicesOne />
    </main>
  )
}
