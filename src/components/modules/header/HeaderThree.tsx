'use client'
import { Box, BoxProps, Drawer, IconButton, IconButtonProps, styled } from '@mui/material'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { NavbarDesktopThree, NavbarDesktopFour } from '../navbar'

const BoxHeader = styled(Box)<BoxProps>(({}) => ({
  height: '80px',
  width: '100%',
  backgroundImage: 'url(/svgs/backgrounds/header_2.svg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'none',
  backgroundPosition: 'bottom',
  position: 'relative',
  color: '#fff'
}))

const BoxDesktop = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none'
  }
}))

const BoxCellphone = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'none'
  }
}))

const BoxIcon = styled(Box)<BoxProps>(({ theme }) => ({
  '&.queretaro-logo': {
    '& img': {
      height: '130px !important',
      width: '130px !important'
    }
  },
  '& img': {
    height: '96px !important',
    width: '96px !important',
    [theme.breakpoints.up('md')]: {
      marginLeft: '55px',
      marginRight: '55px'
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '19px',
      marginRight: '19px'
    }
  }
}))

const MenuButton = styled(IconButton)<IconButtonProps>(({}) => ({
  ':hover': {
    transform: 'rotate(90deg)'
  },
  transition: '.25s ease-in-out',
  color: '#ededed'
}))

const HeaderThree = () => {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <BoxHeader className='header-one header'>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Box display={'flex'}>
          <BoxIcon className={pathname.includes('Queretaro') ? 'queretaro-logo' : ''}>
            <Image
              style={{ cursor: 'pointer' }}
              src={pathname.includes('Queretaro') ? '/imgs/logos/logo_2.png' : '/imgs/logos/logo_1.png'}
              alt='Aventura En tu Escuela'
              className='logo'
              onClick={() => {
                router.push('/')
              }}
              width={96}
              height={96}
            />
          </BoxIcon>
          <BoxDesktop>
            {!pathname.includes('Queretaro') && <NavbarDesktopThree />}
            {pathname.includes('Queretaro') && <NavbarDesktopFour />}
          </BoxDesktop>
        </Box>
        <BoxCellphone py={1}>
          {!pathname.includes('Queretaro') && (
            <MenuButton size='large' onClick={toggleDrawer(true)}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/svgs/icons/menu-grey-1.svg'}
                alt='Menu Icon'
                className='icon'
                width={40}
                height={40}
              />
            </MenuButton>
          )}
          {pathname.includes('Queretaro') && (
            <MenuButton size='large' onClick={toggleDrawer(true)}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/svgs/icons/menu-grey-1.svg'}
                alt='Menu Icon'
                className='icon'
                width={40}
                height={40}
              />
            </MenuButton>
          )}
        </BoxCellphone>
        <BoxIcon>
          <Image
            style={{ cursor: 'pointer', borderRadius: '50px' }}
            src={pathname.includes('Queretaro') ? '/imgs/logos/img_1.jpg' : '/imgs/logos/img_1.jpg'}
            alt='Aventura En tu Escuela'
            className='logo'
            width={96}
            height={96}
          />
        </BoxIcon>
      </Box>
      <Drawer
        sx={{
          '& .MuiPaper-root': {
            backgroundImage: 'url(/svgs/backgrounds/header_2.svg)',
            backgroundPosition: 'bottom'
          }
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        Hola
      </Drawer>
    </BoxHeader>
  )
}

export { HeaderThree }
