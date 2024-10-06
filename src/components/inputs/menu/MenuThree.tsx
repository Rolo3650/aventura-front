'use client'
import { NavigationItem, navigationConfig } from '@/core'
import { Breakpoint, Button, ButtonProps, Menu, MenuItem, Typography, styled } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

interface ButtonStyled extends ButtonProps {
  breakpoint: Breakpoint
}

const ButtonStyled = styled(Button)<ButtonStyled>(({ theme }) => ({
  display: 'inline-block',
  alignItems: 'left',
  color: '#935B1F',
  textTransform: 'none',
  [theme.breakpoints.up('xl')]: {
    paddingRight: '35px'
  }
}))

const MenuThree = ({ nav, index }: { nav: NavigationItem; index: number }) => {
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
        <Typography color={'inherit'} variant='h5'>
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
        sx={{
          backgroundColor: 'rgba(0,0,0,0.1)',
          '& .MuiPaper-root': {
            backgroundColor: '#935B1F'
          }
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
            <Typography color={'white'} variant='h5'>
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export { MenuThree }
