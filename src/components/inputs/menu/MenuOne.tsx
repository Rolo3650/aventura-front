'use client'
import { NavigationItem, navigationConfig } from '@/core'
import { Breakpoint, Button, ButtonProps, Menu, MenuItem, Typography, styled } from '@mui/material'
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

const MenuOne = ({ nav, index }: { nav: NavigationItem; index: number; }) => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <ButtonStyled
        breakpoint={nav.breackpoint}
        id='basic-ButtonStyled'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ borderRight: index + 1 == navigationConfig.length ? '2px solid white' : '' }}
      >
        <Typography color={'inherit'} fontWeight={'600'}>
          {nav.label}
        </Typography>
      </ButtonStyled>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        {nav.items?.map(item => (
          <MenuItem
            key={item.route}
            onClick={() => {
              router.push(item.route)
              setAnchorEl(null)
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export { MenuOne }
