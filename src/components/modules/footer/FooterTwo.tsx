'use client'
import { Box, BoxProps } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { ContactInfoOne } from '../contactInfo'

const FooterBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    padding: '0 30px 100px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 15px 100px'
  }
}))

const FooterTwo = () => {
  return (
    <FooterBox maxWidth={'1490px'} mx={'auto'} >
      <ContactInfoOne />
    </FooterBox>
  )
}

export { FooterTwo }
