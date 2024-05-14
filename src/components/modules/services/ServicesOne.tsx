'use client'
import { Box, BoxProps, Card, styled, CardProps, CardHeader, CardContent } from '@mui/material'
import React from 'react'
import { TitleOne } from '../title'
import CabinIcon from '@mui/icons-material/Cabin'
import { useRouter } from 'next/navigation'

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

const CardStyled = styled(Card)<CardProps>(({ }) => ({
  width: '300px',
  marginBottom: '30px',
  borderRadius: '20px',
  boxShadow: '0px 10px 30px 10px rgba(0,0,0,0.1)',
  cursor: 'pointer'
}))

const ServicesOne = () => {
  const router = useRouter();

  return (
    <Box>
      <TitleOne text='Nuestros Servicios' icon={<CabinIcon fontSize='inherit' fontWeight={'inherit'} />} />
      <br />
      <BoxStyled
        maxWidth={'1200px'}
        marginX={'auto'}
        display={'flex'}
        style={{ flexWrap: 'wrap' }}
        justifyContent={'space-around'}
      >
        <CardStyled onClick={() => {
          router.push('/fiestas')
        }}>
          <CardHeader title='Fiestas' />
          <CardContent>
            <img src={'/imgs/banners/fiestas/img_1.jpg'} alt={'img-1'} className='w-100' />
          </CardContent>
        </CardStyled>
        <CardStyled onClick={() => {
          router.push('/campamentos/campamentos-externos')
        }}>
          <CardHeader title='Campamentos' />
          <CardContent>
            <img src={'/imgs/banners/campamentos/img_1.jpg'} alt={'img-1'} className='w-100' />
          </CardContent>
        </CardStyled>
        <CardStyled onClick={() => {
          router.push('/eventos-escolares/paseos')
        }}>
          <CardHeader title='Paseos' />
          <CardContent>
            <img src={'/imgs/banners/paseos/img_1.jpg'} alt={'img-1'} className='w-100' />
          </CardContent>
        </CardStyled>
        <CardStyled onClick={() => {
          router.push('/eventos-escolares/fiestas-tematicas')
        }}>
          <CardHeader title='Fiestas Temáticas' />
          <CardContent>
            <img src={'/imgs/banners/fiestas_tematicas/img_1.jpg'} alt={'img-1'} className='w-100' />
          </CardContent>
        </CardStyled>
        <CardStyled onClick={() => {
          router.push('/campamentos/campamentos-aventura')
        }}>
          <CardHeader title='Campamentos Aventura' />
          <CardContent>
            <img src={'/imgs/banners/campamentos_aventura/img_9.jpg'} alt={'img-1'} className='w-100' />
          </CardContent>
        </CardStyled>
      </BoxStyled>
    </Box>
  )
}

export { ServicesOne }
