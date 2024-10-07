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
  boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
  borderRadius: '4px'
}))

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  padding: '0 30px',
  [theme.breakpoints.up('md')]: {
    '& img': {
      height: '400px'
    }
  },
  [theme.breakpoints.down('md')]: {
    '& img': {
      height: '320px'
    }
  }
}))

interface Props {
  imgs: Img[]
  title?: string
}

const CarouselTwo: React.FC<Props> = ({ imgs, title }) => {
  return (
    <BoxStyled width={'100%'} height={'100%'}>
      {title && <TypographyStyled variant='h5'>{title}</TypographyStyled>}
      <PhotoProvider>
        <Box
          className='scroll-container'
          display={'flex'}
          sx={{
            overflowX: 'scroll',
            paddingBottom: '10px',
            overflowY: 'hidden'
          }}
        >
          {imgs.map(img => (
            <Box key={img.alt} px={'10px'}>
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
            </Box>
          ))}
        </Box>
      </PhotoProvider>
    </BoxStyled>
  )
}

export { CarouselTwo }
