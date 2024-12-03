'use client'
import { Img } from '@/core'
import { Box, BoxProps, styled, Typography, TypographyProps } from '@mui/material'
import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const TypographyStyled = styled(Typography)<TypographyProps>(({}) => ({
  display: 'inline-block',
  backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'none',
  padding: '5px 30px',
  transform: 'rotate(-5deg)',
  borderRadius: '4px'
}))

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '0 30px',
  [theme.breakpoints.up('md')]: {
    '& img': {
      height: '400px',
      cursor: 'pointer'
    }
  },
  [theme.breakpoints.down('md')]: {
    '& img': {
      height: '320px',
      cursor: 'pointer'
    }
  }
}))

const BoxStyledImage = styled(Box)<BoxProps>(({  }) => ({
  padding: '15px 15px',
  backgroundColor: 'white',
  position: 'relative',
  zIndex: '99',
  '&.pair': {
    transform: 'rotate(-4deg)'
  },
  '&.non': {
    transform: 'rotate(+4deg)'
  },
  boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',

}))

interface Props {
  imgs: Img[]
  title?: string
}

const CarouselFour: React.FC<Props> = ({ imgs, title }) => {
  return (
    <BoxStyled width={'100%'} height={'100%'}>
      {title && <TypographyStyled variant='h5'>{title}</TypographyStyled>}
      <PhotoProvider>
        <Box
          className='scroll-container'
          display={'flex'}
          sx={{
            overflowX: 'scroll',
            paddingY: '25px',
            overflowY: 'hidden'
          }}
        >
          {imgs.map((img, index) => (
            <BoxStyledImage key={img.alt} px={'10px'} className={index % 2 == 0 ? 'pair' : 'non'}>
              <PhotoView src={img.src}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    borderRadius: '8px',
                    boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)'
                  }}
                  loading='lazy'
                />
              </PhotoView>
            </BoxStyledImage>
          ))}
        </Box>
      </PhotoProvider>
    </BoxStyled>
  )
}

export { CarouselFour }
