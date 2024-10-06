'use client'
import { NavigationItem } from '@/core'
import { Box, Breakpoint, Button, ButtonProps, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

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

const MenuFour = ({ item }: { item: NavigationItem }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <Box width={'250px'}>
      <ButtonStyled
        key={item.route}
        breakpoint={item.breackpoint}
        onClick={() => {
          setOpen(!open)
        }}
        startIcon={item.icon && <Image src={item.icon} alt='icon' className='logo' width={24} height={24} />}
      >
        <Typography variant='h6' fontWeight={'500'}>
          {item.label}
        </Typography>
      </ButtonStyled>
      {open &&
        item?.items?.map(nav => {
          return (
            <ButtonStyled
              key={nav.route}
              breakpoint={nav.breackpoint}
              onClick={() => {
                router.push(nav.route)
              }}
            >
              <Typography variant='h6' fontWeight={'500'}>
                <li>{nav.label}</li>
              </Typography>
            </ButtonStyled>
          )
        })}
    </Box>
  )
}

export { MenuFour }
