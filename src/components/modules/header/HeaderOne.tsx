'use client'
import { Box, BoxProps, Drawer, Grid, GridProps, IconButton, IconButtonProps, styled } from '@mui/material'
import React from 'react'
import { NavbarDesktopOne, NavbarDesktopTwo, NavbarPhoneOne, NavbarPhoneTwo } from '@/components'
import MenuIcon from '@mui/icons-material/Menu'
import { usePathname, useRouter } from 'next/navigation'

const BoxHeader = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    height: '130px'
  },
  [theme.breakpoints.down('md')]: {
    height: '100px'
  },
  width: '100%',
  backgroundImage: 'url(/svgs/backgrounds/header_1.svg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  position: 'relative',
  '&::before': {
    content: `''`,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: `#000`,
    opacity: '0.25'
  },
  color: '#fff'
}))

const GridDesktop = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const GridMobile = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}))

const BoxItem = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    height: '130px'
  },
  [theme.breakpoints.down('md')]: {
    height: '100px'
  }
}))

const BoxItem2 = styled(Box)<BoxProps>(({ }) => ({
  "& img": {
    height: '100px !important',
    width: '100px !important',
    backgroundColor: '#fff',
    borderRadius: "50px"
  }
}))

const MenuButton = styled(IconButton)<IconButtonProps>(({ }) => ({
  ':hover': {
    transform: 'rotate(90deg)'
  },
  transition: '.25s ease-in-out',
  color: '#ededed'
}))

const HeaderOne = () => {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <BoxHeader className='header-one header'>
      <Box position={'relative'} display={'flex'}>
        <Grid container>
          <GridMobile item xs={2}>
            <BoxItem display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <MenuButton size='large' onClick={toggleDrawer(true)}>
                <MenuIcon fontSize='large' />
              </MenuButton>
            </BoxItem>
          </GridMobile>
          <Grid item xs={8} md={2}>
            <BoxItem display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <img
                style={{ cursor: 'pointer' }}
                src={pathname.includes('Queretaro') ? '/imgs/logos/logo_2.png' : '/imgs/logos/logo_1.png'}
                alt='logo-aventura'
                className='logo'
                onClick={() => {
                  router.push('/')
                }}
              />
            </BoxItem>
          </Grid>
          <GridDesktop item md={8}>
            <BoxItem>
              {!pathname.includes('Queretaro') && <NavbarDesktopOne />}
              {pathname.includes('Queretaro') && <NavbarDesktopTwo />}
            </BoxItem>
          </GridDesktop>
          <Grid item xs={2}>
            <BoxItem2 display={'flex'} justifyContent={'center'} alignItems={'center'}>
              <img
                style={{ cursor: 'pointer' }}
                src={'/imgs/logos/logo_3.png'}
                alt='logo-aventura'
                className='logo'
                onClick={() => {
                  router.push('/')
                }}
              />
            </BoxItem2>
          </Grid>
        </Grid>
      </Box>
      <Drawer
        sx={{
          '& .MuiPaper-root': {
            backgroundImage: 'url(/svgs/backgrounds/header_1.svg)',
            backgroundPosition: 'bottom'
          }
        }}
        open={open}
        onClose={toggleDrawer(false)}
      >
        {!pathname.includes('Queretaro') && <NavbarPhoneOne />}
        {pathname.includes('Queretaro') && <NavbarPhoneTwo />}
      </Drawer>
    </BoxHeader>
  )
}

export { HeaderOne }
