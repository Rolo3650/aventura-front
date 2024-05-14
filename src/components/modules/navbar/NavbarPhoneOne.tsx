'use client'
import { MenuTwo } from '@/components/inputs'
import { navigationConfig } from '@/core'
import { Box, Breakpoint, Button, ButtonProps, Typography, styled } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ButtonStyled extends ButtonProps {
  breakpoint: Breakpoint
}

const ButtonStyled = styled(Button)<ButtonStyled>(({ }) => ({
  height: '50px',
  width: '100%',
  color: 'white',
  borderBottom: '1px solid white',
  borderRadius: '0'
}))

const NavbarPhoneOne = () => {
  const router = useRouter()

  return (
    <Box width={'250px'}>
      {navigationConfig.map(nav => {
        if (!nav.items) {
          return (
            <ButtonStyled
              key={nav.route}
              breakpoint={nav.breackpoint}
              onClick={() => {
                router.push(nav.route)
              }}
            >
              <Typography color={'inherit'} fontWeight={'500'}>
                {nav.label}
              </Typography>
            </ButtonStyled>
          )
        } else {
          return (
            <>
              <MenuTwo item={nav} />
            </>
          )
        }
      })}
    </Box>
  )
}

export { NavbarPhoneOne }
