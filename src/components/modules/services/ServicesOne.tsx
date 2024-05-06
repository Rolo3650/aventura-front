'use client'
import { Box, BoxProps, Card, styled, CardProps, CardHeader, CardContent } from '@mui/material'
import React from 'react'
import { TitleOne } from '../title'
import CabinIcon from '@mui/icons-material/Cabin'
import { PhotoProvider, PhotoView } from 'react-photo-view'

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

const CardStyled = styled(Card)<CardProps>(({}) => ({
  width: '300px',
  marginBottom: '30px',
  borderRadius: '20px',
  boxShadow: '0px 10px 30px 10px rgba(0,0,0,0.1)'
}))

const ServicesOne = () => {
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
        <CardStyled>
          <CardHeader title='Fiestas' />
          <CardContent>
            <PhotoProvider>
              <PhotoView src='/svgs/banners/img-7.svg'>
                <img src={'/svgs/banners/img-7.svg'} alt={'img-7'} className='w-100' />
              </PhotoView>
            </PhotoProvider>
          </CardContent>
        </CardStyled>
        <CardStyled>
          <CardHeader title='Campamentos' />
          <CardContent>
            <PhotoProvider>
              <PhotoView src='/svgs/banners/img-7.svg'>
                <img src={'/svgs/banners/img-7.svg'} alt={'img-7'} className='w-100' />
              </PhotoView>
            </PhotoProvider>
          </CardContent>
        </CardStyled>
        <CardStyled>
          <CardHeader title='Eventos Escolares' />
          <CardContent>
            <PhotoProvider>
              <PhotoView src='/svgs/banners/img-7.svg'>
                <img src={'/svgs/banners/img-7.svg'} alt={'img-7'} className='w-100' />
              </PhotoView>
            </PhotoProvider>
          </CardContent>
        </CardStyled>
        <CardStyled>
          <CardHeader title='STAFF' />
          <CardContent>
            <PhotoProvider>
              <PhotoView src='/svgs/banners/img-7.svg'>
                <img src={'/svgs/banners/img-7.svg'} alt={'img-7'} className='w-100' />
              </PhotoView>
            </PhotoProvider>
          </CardContent>
        </CardStyled>
        <CardStyled>
          <CardHeader title='Campamentos Aventura' />
          <CardContent>
            <PhotoProvider>
              <PhotoView src='/svgs/banners/img-7.svg'>
                <img src={'/svgs/banners/img-7.svg'} alt={'img-7'} className='w-100' />
              </PhotoView>
            </PhotoProvider>
          </CardContent>
        </CardStyled>
      </BoxStyled>
    </Box>
  )
}

export { ServicesOne }
