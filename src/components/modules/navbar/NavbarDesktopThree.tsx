'use client'
import { MenuThree } from '@/components/inputs'
import { navigationConfig } from '@/core'
import { Box, Breakpoint, Button, ButtonProps, Typography, styled } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ButtonStyled extends ButtonProps {
  breakpoint: Breakpoint
}

const ButtonStyled = styled(Button)<ButtonStyled>(({ theme }) => ({
  display: 'inline',
  alignItems: 'left',
  color: '#935B1F',
  textTransform: 'none',
  [theme.breakpoints.up('xl')]: {
    paddingRight: '35px'
  }
}))

const NavbarDesktopThree = () => {
  const router = useRouter()

  return (
    <Box display={'flex'} alignItems={'center'} height={'100%'}>
      {navigationConfig.map((nav, index) => {
        if (!nav.items) {
          return (
            <ButtonStyled
              key={nav.route}
              breakpoint={nav.breackpoint}
              onClick={() => {
                if (nav.blank === 'blank') {
                  window.open(nav.route, '_blank')
                } else {
                  router.push(nav.route)
                }
              }}
            >
              <Typography
                color={'inherit'}
                variant='h5'
                sx={{ fontFamily: '"Jockey One", sans-serif !important' }}
                textAlign={'left'}
              >
                {nav.label}
              </Typography>
            </ButtonStyled>
          )
        } else {
          return <MenuThree key={index} nav={nav} index={index} />
        }
      })}
    </Box>
  )
}

export { NavbarDesktopThree }
