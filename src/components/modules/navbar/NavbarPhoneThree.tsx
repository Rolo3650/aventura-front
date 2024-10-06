'use client'
import { MenuFour } from '@/components/inputs'
import { navigationConfig } from '@/core'
import { Box, Breakpoint, Button, ButtonProps, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface ButtonStyled extends ButtonProps {
  breakpoint: Breakpoint
}

const ButtonStyled = styled(Button)<ButtonStyled>(({}) => ({
  paddingLeft: '15px',
  height: '50px',
  width: '100%',
  color: 'white',
  borderRadius: '0',
  textTransform: 'none',
  justifyContent: 'left'
}))

const NavbarPhoneThree = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Box width={'250px'}>
      <Typography variant='h5' p={2}>
        <Image
          style={{ cursor: 'pointer', marginRight: '15px' }}
          src={pathname.includes('Queretaro') ? '/imgs/logos/logo_2.png' : '/imgs/logos/logo_1.png'}
          alt='Aventura En tu Escuela'
          className='logo'
          onClick={() => {
            router.push('/')
          }}
          width={50}
          height={50}
        />
        Secciones
      </Typography>
      {navigationConfig.map(nav => {
        if (!nav.items) {
          return (
            <ButtonStyled
              key={nav.route}
              breakpoint={nav.breackpoint}
              onClick={() => {
                router.push(nav.route)
              }}
              startIcon={nav.icon && <Image src={nav.icon} alt='icon' className='logo' width={24} height={24} />}
            >
              <Typography variant='h6' fontWeight={'500'}>
                {nav.label}
              </Typography>
            </ButtonStyled>
          )
        } else {
          return (
            <>
              <MenuFour item={nav} />
            </>
          )
        }
      })}
    </Box>
  )
}

export { NavbarPhoneThree }
