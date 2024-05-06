'use client'
import { CarouselOne, ServicesOne } from '@/components'
import { Img } from '@/core'
import {
  Box

  //  BoxProps, Typography, styled
} from '@mui/material'

// const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
//   [theme.breakpoints.up('md')]: {
//     paddingLeft: '60px',
//     paddingRight: '60px'
//   },
//   [theme.breakpoints.down('sm')]: {
//     paddingLeft: '30px',
//     paddingRight: '30px'
//   }
// }))

export default function Home() {
  const imgs: Img[] = [
    // {
    //   alt: 'img-1',
    //   src: '/svgs/banners/img-1.svg'
    // },
    // {
    //   alt: 'img-2',
    //   src: '/svgs/banners/img-2.svg'
    // },
    // {
    //   alt: 'img-3',
    //   src: '/svgs/banners/img-3.svg'
    // },
    // {
    //   alt: 'img-4',
    //   src: '/svgs/banners/img-4.svg'
    // },
    // {
    //   alt: 'img-5',
    //   src: '/svgs/banners/img-5.svg'
    // },
    {
      alt: 'img-6',
      src: '/svgs/banners/img-6.svg'
    },
    {
      alt: 'img-7',
      src: '/svgs/banners/img-7.svg'
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
      <ServicesOne />
    </main>
  )
}
