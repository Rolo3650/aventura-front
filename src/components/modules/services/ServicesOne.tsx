'use client'
import { Box, BoxProps, styled, Typography, Divider } from '@mui/material'
import React from 'react'
import CelebrationIcon from '@mui/icons-material/Celebration'
import CabinIcon from '@mui/icons-material/Cabin'
import HikingIcon from '@mui/icons-material/Hiking'
import EventIcon from '@mui/icons-material/Event'
import TourIcon from '@mui/icons-material/Tour'
import { useRouter } from 'next/navigation'


const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  [theme.breakpoints.up('md')]: {
    paddingLeft: '60px',
    paddingRight: '60px'
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: '30px',
    paddingRight: '30px'
  },
}))

const BoxBackground = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: '6px',
  position: 'relative',
  width: '100%',
  padding: theme.spacing(4),
  backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
  transform: 'rotate(2.1deg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
  [theme.breakpoints.up('md')]: {
    position: 'relative'
  },
  
}))



const LineDecorative = () => (
  <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
    <Divider sx={{ flexGrow: 1, borderColor: '#8b5e3c', borderWidth: '2px', opacity: 1, marginRight: 2 }} />
    <Typography variant="h4" textAlign="center" style={{ color: '#8b5e3c' }}>
      Nuestros Servicios
    </Typography>
    <Divider sx={{ flexGrow: 1, borderColor: '#8b5e3c', borderWidth: '2px', opacity: 1, marginLeft: 2 }} />
  </Box>
);

const ServicesOne = () => {
  const router = useRouter();

  return (
    <Box>
      <BoxStyled maxWidth={'1200px'} marginX={'auto'}>
        <BoxBackground>
          <LineDecorative />
          <Box 
            display='grid' 
            gridTemplateColumns={{ xs: '1fr 1fr', md: 'repeat(5, 1fr)' }} 
            gap={4} 
            justifyContent='center' 
            alignItems='center' 
            paddingY={4}
          >
            <Box textAlign='center' onClick={() => router.push('/fiestas')} style={{ cursor: 'pointer', color: '#8b5e3c' }}>
              <CelebrationIcon fontSize='large' />
              <Typography variant='h6'>Fiestas</Typography>
            </Box>
            <Box textAlign='center' onClick={() => router.push('/campamentos/campamentos-externos')} style={{ cursor: 'pointer', color: '#8b5e3c' }}>
              <CabinIcon fontSize='large' />
              <Typography variant='h6'>Campamentos</Typography>
            </Box>
            <Box textAlign='center' onClick={() => router.push('/eventos-escolares/paseos')} style={{ cursor: 'pointer', color: '#8b5e3c' }}>
              <HikingIcon fontSize='large' />
              <Typography variant='h6'>Paseos</Typography>
            </Box>
            <Box textAlign='center' onClick={() => router.push('/eventos-escolares/eventos-tematicos')} style={{ cursor: 'pointer', color: '#8b5e3c' }}>
              <EventIcon fontSize='large' />
              <Typography variant='h6'>Eventos Temáticos</Typography>
            </Box>
            <Box textAlign='center' onClick={() => router.push('/campamentos/campamentos-aventura')} style={{ cursor: 'pointer', color: '#8b5e3c' }}>
              <TourIcon fontSize='large' />
              <Typography variant='h6'>Campamentos Aventura</Typography>
            </Box>
          </Box>
        </BoxBackground>
      </BoxStyled>
    </Box>
  )
}

export { ServicesOne }
