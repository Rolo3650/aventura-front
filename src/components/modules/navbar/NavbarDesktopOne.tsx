'use client'
import { MenuOne } from '@/components/inputs'
import { navigationConfig } from '@/core'
import { Box, Breakpoint, Button, ButtonProps, Typography, styled } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ButtonStyled extends ButtonProps {
  breakpoint: Breakpoint
}

const ButtonStyled = styled(Button)<ButtonStyled>(({ breakpoint, theme }) => ({
  display: 'none',
  [theme.breakpoints.up(breakpoint)]: {
    display: 'flex',
    alignItems: 'center'
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
  const router = useRouter()

  return (
    <Box display={'flex'} alignItems={'center'} height={'100%'}>
      {navigationConfig.map((nav, index) => {
        if (!nav.items) {
          return (
            <ButtonStyled
              key={nav.route}
              sx={{ borderRight: index + 1 == navigationConfig.length ? '2px solid white' : '' }}
              breakpoint={nav.breackpoint}
              onClick={() => {
                router.push(nav.route)
              }}
            >
              <Typography color={'inherit'} fontWeight={'600'}>
                {nav.label}
              </Typography>
            </ButtonStyled>
          )
        } else {
          return (
            <MenuOne key={index} nav={nav} index={index} />
          )
        }
      })}
    </Box>
  )
}

export { NavbarDesktopOne }
