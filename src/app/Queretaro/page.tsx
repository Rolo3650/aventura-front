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
      src: '/imgs/banners-queretaro/campamentos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_1.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/banners-queretaro/paseos/img_1.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/banners-queretaro/campamentos/img_2.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_2.jpeg'
    },
    {
      alt: 'img-6',
      src: '/imgs/banners-queretaro/paseos/img_2.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/banners-queretaro/campamentos/img_3.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_3.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/banners-queretaro/campamentos/img_4.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_4.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/banners-queretaro/campamentos/img_5.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_5.jpg'
    },
    {
      alt: 'img-13',
      src: '/imgs/banners-queretaro/campamentos/img_6.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_6.jpg'
    },
    {
      alt: 'img-15',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_7.jpg'
    },
    {
      alt: 'img-16',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_8.jpeg'
    },
    {
      alt: 'img-17',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_9.jpeg'
    },
    {
      alt: 'img-18',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_10.jpeg'
    },
    {
      alt: 'img-19',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_11.jpg'
    },
    {
      alt: 'img-19',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_12.jpeg'
    }
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
