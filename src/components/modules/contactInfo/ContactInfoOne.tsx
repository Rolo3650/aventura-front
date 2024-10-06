'use client'
import { Box, BoxProps, Grid, GridProps, styled, Typography } from '@mui/material'
import React from 'react'

const GridContainer = styled(Grid)<GridProps>(({ theme }) => ({
  '&.item': {
    padding: '0 15px',
    [theme.breakpoints.up('md')]: {
      padding: '0 30px'
    }
  }
}))

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'none',
  backgroundPosition: 'bottom',
  [theme.breakpoints.up('md')]: {
    padding: '50px 0'
  }
}))

const ContactInfoOne = () => {
  return (
    <BoxStyled>
      <GridContainer container maxWidth={'1200px'} mx={'auto'}>
        <GridContainer item xs={12} md={6} className='item'>
          <Typography variant='h5'>Contacto</Typography>
          <Typography variant='body1' mt={3}> 55-89-38-52-35 / 55-89-38-52-96</Typography>
        </GridContainer>
        <GridContainer item xs={12} md={6} className='item'>
          Hola
        </GridContainer>
      </GridContainer>
    </BoxStyled>
  )
}

export { ContactInfoOne }
