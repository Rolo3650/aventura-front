'use client'
import { BannerOne, CarouselTwo, ServicesOne, VideoOne } from '@/components'
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

export default function Home() {
  const imgs: Img[] = [
    {
      alt: 'img-20',
      src: '/imgs/banners/fiestas/img_14.jpg'
    },
    {
      alt: 'img-21',
      src: '/imgs/banners/fiestas/img_15.jpg'
    },
    {
      alt: 'img-22',
      src: '/imgs/banners/fiestas/img_16.jpg'
    },
    {
      alt: 'img-22',
      src: '/imgs/banners/fiestas_tematicas/img_12.jpg'
    },
    {
      alt: 'img-1',
      src: '/imgs/banners/campamentos/img_1.jpg'
    },
    {
      alt: 'img-2',
      src: '/imgs/banners/fiestas_tematicas/img_1.jpg'
    },
    {
      alt: 'img-3',
      src: '/imgs/banners/paseos/img_1.jpg'
    },
    {
      alt: 'img-4',
      src: '/imgs/banners/campamentos/img_2.jpg'
    },
    {
      alt: 'img-5',
      src: '/imgs/banners/fiestas_tematicas/img_2.jpeg'
    },
    {
      alt: 'img-6',
      src: '/imgs/banners/paseos/img_2.jpg'
    },
    {
      alt: 'img-7',
      src: '/imgs/banners/campamentos/img_3.jpg'
    },
    {
      alt: 'img-8',
      src: '/imgs/banners/fiestas_tematicas/img_3.jpg'
    },
    {
      alt: 'img-9',
      src: '/imgs/banners/campamentos/img_4.jpg'
    },
    {
      alt: 'img-10',
      src: '/imgs/banners/fiestas_tematicas/img_4.jpg'
    },
    {
      alt: 'img-11',
      src: '/imgs/banners/campamentos/img_5.jpg'
    },
    {
      alt: 'img-12',
      src: '/imgs/banners/fiestas_tematicas/img_5.jpg'
    },
    {
      alt: 'img-13',
      src: '/imgs/banners/campamentos/img_6.jpg'
    },
    {
      alt: 'img-14',
      src: '/imgs/banners/fiestas_tematicas/img_6.jpg'
    },
    {
      alt: 'img-15',
      src: '/imgs/banners/fiestas_tematicas/img_7.jpg'
    },
    {
      alt: 'img-16',
      src: '/imgs/banners/fiestas_tematicas/img_8.jpeg'
    },
    {
      alt: 'img-17',
      src: '/imgs/banners/fiestas_tematicas/img_9.jpeg'
    },
    {
      alt: 'img-18',
      src: '/imgs/banners/fiestas_tematicas/img_10.jpeg'
    },
    {
      alt: 'img-19',
      src: '/imgs/banners/fiestas_tematicas/img_11.jpg'
    },
    {
      alt: 'img-19',
      src: '/imgs/banners/fiestas_tematicas/img_12.jpeg'
    }
  ]

  return (
    <main>
      <BannerOne img='/svgs/backgrounds/banner-1.svg' />
      <BoxStyled maxWidth={'1200px'} width={'100%'} marginX={'auto'}>
        <CarouselTwo imgs={imgs} title='Novedades' />
      </BoxStyled>
      <VideoOne video='/imgs/banners/campamentos/Video Camp Villa victoria.mp4' />
      <br />
      <ServicesOne />
      <br />
    </main>
  )
}
