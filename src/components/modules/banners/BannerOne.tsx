'use client'
import { Box, BoxProps, styled } from '@mui/material'
import React from 'react'

interface BannerProps extends BoxProps {
  img: string
}

const BoxStyled = styled(Box)<BannerProps>(({ theme, img }) => ({
  width: '100%',
  backgroundImage: `url(${img})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'none',
  backgroundPosition: 'center',
  [theme.breakpoints.up('md')]: {
    height: '497px'
  },
  [theme.breakpoints.down('md')]: {
    height: '390px'
  }
}))

const BannerOne = ({ img }: { img: string }) => {
  return <BoxStyled img={img} mb={5}></BoxStyled>
}

export { BannerOne }