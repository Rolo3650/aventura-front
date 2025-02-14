'use client'
import {  CarouselTwo, ServicesOne, VideoOne } from '@/components'
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
      alt: 'img-16',
      src: '/imgs/banners-queretaro/fiestas/img_16.jpg'
    },
    {
      alt: 'img-17',
      src: '/imgs/banners-queretaro/fiestas/img_17.jpg'
    },
    {
      alt: 'img-18',
      src: '/imgs/banners-queretaro/fiestas/img_18.jpg'
    },
    {
      alt: 'img-16',
      src: '/imgs/banners-queretaro/fiestas_tematicas/img_16.jpg'
    },
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
      <BoxStyled maxWidth={'1200px'} width={'100%'} marginX={'auto'} py={3}>
        <CarouselTwo imgs={imgs} title='Nuestros cursos' />
      </BoxStyled>
      <VideoOne video='/imgs/banners/campamentos/Video Camp Villa victoria.mp4' />
      <br />
      <ServicesOne />
    </main>
  )
}
