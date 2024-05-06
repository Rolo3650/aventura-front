'use client'
import { Box, BoxProps, Link, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const FooterBox = styled(Box)<BoxProps>(({}) => ({
  backgroundColor: '#ddd'
}))

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    paddingLeft: '60px',
    paddingRight: '60px'
  },
  [theme.breakpoints.down('md')]: {
    paddingLeft: '30px',
    paddingRight: '30px'
  },
}))

const FooterOne = () => {
  return (
    <FooterBox paddingTop={'25px'} paddingBottom={'75px'}>
      <BoxStyled maxWidth={'1200px'} marginX={'auto'} display={'flex'}>
        <Box marginRight={'20px'} display={'flex'} alignItems={'center'}>
          <img src='/imgs/logos/logo_1.png' alt='logo-1' style={{ width: '100px' }} />
        </Box>
        <Box>
          <Typography variant='h5' fontWeight={600} mb={2}>
            Agencia de Paseos y Campamentos
          </Typography>
          <Typography variant='body1' fontWeight={400}>
            Teléfono: <strong>55-89-38-52-35 Y 55-89-38-52-96</strong>
          </Typography>
          <Typography variant='body1' fontWeight={400}>
            Correo: <strong>info@aventuraentuescuela-com-mx</strong>
          </Typography>
          <Typography variant='body1' fontWeight={400}>
            Dirección:{' '}
            <strong>C. Pierre Lyonnet 70a, Jardines de Satelite, 53129 Naucalpan de Juárez, 53129 mexico, Méx.</strong>
          </Typography>
          <Link
            sx={{
              cursor: 'pointer'
            }}
            underline='hover'
            color={'secondary'}
            fontSize={'16px'}
            fontWeight={600}
            href='/docs/Aviso.pdf'
            target='_blank'
          >
            Aviso de Privaciada
          </Link>
          {/* <iframe
          width='600'
          height='450'
          src='https://www.google.com/maps/place/Aventura+en+tu+Escuela/@19.5112218,-99.2630286,17z/data=!4m6!3m5!1s0x85d203dd8b4663ef:0x2151111fcf1c3acd!8m2!3d19.5112333!4d-99.2581504!16s%2Fg%2F11l5jp5dx0?entry=ttu'
        /> */}
        </Box>
      </BoxStyled>
    </FooterBox>
  )
}

export { FooterOne }
