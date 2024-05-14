'use client'
import { NavigationItem } from '@/core'
import { Box, Breakpoint, Button, ButtonProps, Typography, styled } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

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

const MenuTwo = ({ item }: { item: NavigationItem }) => {
  const router = useRouter()
  const [open, setOpen] = useState(false);

  return (
    <Box width={'250px'}>
      <ButtonStyled
        key={item.route}
        breakpoint={item.breackpoint}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Typography color={'inherit'} fontWeight={'500'}>
          {item.label}
        </Typography>
      </ButtonStyled>
      {open && item?.items?.map(nav => {
        return <ButtonStyled
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
      })}
    </Box>
  )
}

export { MenuTwo }
