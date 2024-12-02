'use client'
import { Box, BoxProps, Grid, Link, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { ContactInfoOne } from '../contactInfo'

// import { useRouter } from 'next/navigation'

const FooterBox = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    padding: '0 30px 100px'
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 30px 100px'
  }
}))

const FooterTwo = () => {
  // const router = useRouter()

  return (
    <FooterBox maxWidth={'1490px'} mx={'auto'}>
      <ContactInfoOne />
      <Grid container mt={5} maxWidth={'1490px'}>
        <Grid item xs={12} md={12} textAlign={'center'}>
          <Link target='_blank' href={'/docs/Aviso.pdf'} sx={{ textDecorationColor: 'white' }}>
            <Typography variant='body2' color={'white'} fontSize={'25px'}>
              Aviso de privacidad
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </FooterBox>
  )
}

export { FooterTwo }
