'use client'
import { Box, BoxProps, Typography, styled } from '@mui/material'
import React from 'react'

const BoxHeader = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    height: '100px'
  },
  [theme.breakpoints.down('md')]: {
    height: '100px'
  },
  width: '100%',

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  position: 'relative',
  borderBottom: '2px solid #444'

  //   backgroundImage: 'url(/svgs/backgrounds/header_1.svg)',
  //   '&::before': {
  //     content: `''`,
  //     position: 'absolute',
  //     top: 0,
  //     left: 0,
  //     height: '100%',
  //     width: '100%',
  //     backgroundColor: `#fff`,
  //     opacity: '0.10'
  //   }
}))

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

const TitleOne = ({ text, icon }: { text: string; icon?: React.ReactNode }) => {
  return (
    <BoxHeader maxWidth={'1200px'} display={'flex'} alignItems={'center'} marginX={'auto'}>
      <BoxStyled>
        <Typography variant='h3' fontWeight={600}>
          {icon} {text}
        </Typography>
      </BoxStyled>
    </BoxHeader>
  )
}

export { TitleOne }
