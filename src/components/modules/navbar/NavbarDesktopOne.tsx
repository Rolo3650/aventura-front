'use client'
import { navigationConfig } from '@/core'
import { Box, Breakpoint, Button, ButtonProps, Typography, styled } from '@mui/material'
import React from 'react'

interface ButtonStyled extends ButtonProps {
  breakpoint: Breakpoint
}

const ButtonStyled = styled(Button)<ButtonStyled>(({ breakpoint, theme }) => ({
  display: 'none',
  [theme.breakpoints.up(breakpoint)]: {
    display: 'flex',
    alignItems: 'center',
  },
  [theme.breakpoints.down(1410)]: {
    height: '40px'
  },
  width: '100%',
  color: 'white',
  borderLeft: '2px solid white',
  borderRadius: '0'
}))

const NavbarDesktopOne = () => {
  return (
    <Box display={'flex'} alignItems={'center'} height={'100%'}>
      {navigationConfig.map((nav, index) => (
        <ButtonStyled
          key={nav.route}
          sx={{ borderRight: index + 1 == navigationConfig.length ? '2px solid white' : '' }}
          breakpoint={nav.breackpoint}
        >
          <Typography color={'inherit'} fontWeight={'600'}>
            {nav.label}
          </Typography>
        </ButtonStyled>
      ))}
    </Box>
  )
}

export { NavbarDesktopOne }
