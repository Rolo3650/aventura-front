'use client'
import { Box, BoxProps, Button, Divider, Grid, GridProps, Link, styled, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import axios from 'axios'
import sweetAlert from 'sweetalert2'

const GridContainer = styled(Grid)<GridProps>(({ theme }) => ({
  overflow: 'hidden',
  '&.item': {
    padding: '0 15px',
    [theme.breakpoints.up('md')]: {
      padding: '0 30px',
      '&.left': {
        borderRight: '1px solid #935B1F'
      }
    },
    [theme.breakpoints.down('md')]: {
      padding: '0 15px'
    }
  },
  [theme.breakpoints.up('md')]: {
    '&.divider': {
      display: 'none'
    }
  }
}))

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
  backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'none',
  backgroundPosition: 'bottom',
  [theme.breakpoints.up('md')]: {
    padding: '50px 0'
  },
  [theme.breakpoints.down('md')]: {
    padding: '30px 0'
  }
}))

const ContactInfoOne = () => {
  const pathname = usePathname()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const onClick = async () => {
    try {
      const response = await axios.post(
        '/contact',
        {
          name,
          email,
          phone,
          message
        },
        {
          baseURL: 'http://localhost:4000/api/v1/notification/'
        }
      )
    } catch (error) {}

    sweetAlert.fire('¡Mensaje enviado!', 'Nos pondremos en contacto contigo pronto.', 'success')
  }

  return (
    <BoxStyled>
      <GridContainer container maxWidth={'1200px'} mx={'auto'}>
        {!pathname.includes('Queretaro') && (
          <GridContainer item xs={12} md={6} className='item left'>
            <Typography variant='h5'>Contacto</Typography>
            <Box display={'flex'} mt={2}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/svgs/icons/phone-brown-1.svg'}
                alt='icon'
                className='icon'
                width={24}
                height={24}
              />{' '}
              <Typography variant='body1' ml={2}>
                <Link href='tel:5589385235' underline='hover' color={'inherit'}>
                  55-89-38-52-35
                </Link>{' '}
                /
                <Link href='tel:5589385296' underline='hover' color={'inherit'}>
                  55-89-38-52-96
                </Link>
              </Typography>
            </Box>
            <Box display={'flex'} mt={2}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/svgs/icons/mail-brown-1.svg'}
                alt='icon'
                className='icon'
                width={24}
                height={24}
              />{' '}
              <Typography variant='body1' ml={2}>
                <Link href='mailto:info@aventuraentuescuela.com.mx' underline='hover' color={'inherit'}>
                  info@aventuraentuescuela.com.mx
                </Link>
              </Typography>
            </Box>
            <Box display={'flex'} mt={2}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/svgs/icons/location-brown-1.svg'}
                alt='icon'
                className='icon'
                width={24}
                height={24}
              />{' '}
              <Typography variant='body1' ml={2}>
                <Link
                  target='_blank'
                  href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1880.5191862663235!2d-99.26801000562384!3d19.496984827726003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203681fa7cfbf%3A0x85d74fdb950d05ca!2sHelechos%2036%2C%20Cumbres%20de%20San%20Mateo%2C%2053210%20Naucalpan%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1759201185213!5m2!1ses-419!2smx'
                  underline='hover'
                  color={'inherit'}
                >
                  Helechos 36, Cumbres de San Mateo, 53210 Naucalpan de Juárez, Méx.
                </Link>
              </Typography>
            </Box>
            <Box display={'flex'} mt={2}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/svgs/icons/facebook-icon-1.svg'}
                alt='icon'
                className='icon'
                width={24}
                height={24}
              />{' '}
              <Typography variant='body1' ml={2}>
                <Link
                  target='_blank'
                  href='https://www.facebook.com/AventuraentuEscuela?mibextid=LQQJ4d'
                  underline='hover'
                  color={'inherit'}
                >
                  /aventuraentuescuela
                </Link>
                <br />
                <Link
                  target='_blank'
                  href='https://www.facebook.com/profile.php?id=61565402530660&mibextid=JRoKGi'
                  underline='hover'
                  color={'inherit'}
                >
                  /fiestasdeaventuraentuescuela
                </Link>
              </Typography>
            </Box>
            <Box mt={3}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1880.5191862663235!2d-99.26801000562384!3d19.496984827726003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d203681fa7cfbf%3A0x85d74fdb950d05ca!2sHelechos%2036%2C%20Cumbres%20de%20San%20Mateo%2C%2053210%20Naucalpan%20de%20Ju%C3%A1rez%2C%20M%C3%A9x.!5e0!3m2!1ses-419!2smx!4v1759201185213!5m2!1ses-419!2smx'
                style={{ border: '0', width: '100%', height: '100%' }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </Box>
          </GridContainer>
        )}
        {pathname.includes('Queretaro') && (
          <GridContainer item xs={12} md={6} className='item left'>
            <Typography variant='h5'>Contacto</Typography>
            <Box display={'flex'} mt={2}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/svgs/icons/phone-brown-1.svg'}
                alt='icon'
                className='icon'
                width={24}
                height={24}
              />{' '}
              <Typography variant='body1' ml={2}>
                <Link href='tel:4422217952' underline='hover' color={'inherit'}>
                  442 221 7952
                </Link>{' '}
              </Typography>
            </Box>
            <Box display={'flex'} mt={2}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/svgs/icons/mail-brown-1.svg'}
                alt='icon'
                className='icon'
                width={24}
                height={24}
              />{' '}
              <Typography variant='body1' ml={2}>
                <Link href='mailto:ventas2@aventuraentuescuela.com.mx' underline='hover' color={'inherit'}>
                  ventas2@aventuraentuescuela.com.mx
                </Link>
              </Typography>
            </Box>
            <Box display={'flex'} mt={2}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/svgs/icons/location-brown-1.svg'}
                alt='icon'
                className='icon'
                width={24}
                height={24}
              />{' '}
              <Typography variant='body1' ml={2}>
                <Link
                  target='_blank'
                  href='https://www.google.com/maps/place/Bosque+de+Sauces,+76246+Fraccionamiento+del+Parque+Residencial,+Qro./@20.5850464,-100.3355562,18z/data=!3m1!4b1!4m6!3m5!1s0x85d3434e8fab3ed5:0xe84c515d06b27dfa!8m2!3d20.5847501!4d-100.3354051!16s%2Fg%2F11c2y7k60d?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D'
                  underline='hover'
                  color={'inherit'}
                >
                  Bosque de Sauces 76246 Fraccionamiento del Parque Residencial, Qro. Méx.
                </Link>
              </Typography>
            </Box>
            <Box display={'flex'} mt={2}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/svgs/icons/facebook-icon-1.svg'}
                alt='icon'
                className='icon'
                width={24}
                height={24}
              />{' '}
              <Typography variant='body1' ml={2}>
                <Link
                  target='_blank'
                  href='https://www.facebook.com/share/LuQXHnTus1sBSDYW/?mibextid=LQQJ4d'
                  underline='hover'
                  color={'inherit'}
                >
                  /aventuraentuescuelaqueretaro
                </Link>
              </Typography>
            </Box>
            <Box display={'flex'} mt={2}>
              <Image
                style={{ cursor: 'pointer' }}
                src={'/imgs/logos/insta.png'}
                alt='icon'
                className='icon'
                width={24}
                height={24}
              />{' '}
              <Typography variant='body1' ml={2}>
                <Link
                  target='_blank'
                  href='https://www.instagram.com/aventuraentuescuela_qro?igsh=b2xkdHFybDhkMGgx'
                  underline='hover'
                  color={'inherit'}
                >
                  /aventuraentuescuelaqueretaro
                </Link>
              </Typography>
            </Box>
            <Box mt={3}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.5368658377183!2d-100.33555615!3d20.585046350000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d3434e8fab3ed5%3A0xe84c515d06b27dfa!2sBosque%20de%20Sauces%2C%2076246%20Fraccionamiento%20del%20Parque%20Residencial%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1728245481483!5m2!1ses-419!2smx'
                style={{ border: '0', width: '100%', height: '100%' }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </Box>
          </GridContainer>
        )}
        <GridContainer item xs={12} paddingX={'15px'} py={3} className='divider'>
          <Divider sx={{ backgroundColor: '#935B1F', height: '2px' }} />
        </GridContainer>
        <GridContainer item xs={12} md={6} className='item right'>
          <Typography variant='h5'>¿Tienes alguna duda o comentario?</Typography>
          <Box mt={3}>
            <Typography variant='body1'>Nombre completo</Typography>
            <TextField
              fullWidth
              size='small'
              sx={{ '& .MuiInputBase-input': { backgroundColor: 'white', borderRadius: '5px' } }}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Box>
          <Box mt={1}>
            <Typography variant='body1'>Correo electrónico</Typography>
            <TextField
              fullWidth
              size='small'
              sx={{ '& .MuiInputBase-input': { backgroundColor: 'white', borderRadius: '5px' } }}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Box>
          <Box mt={1}>
            <Typography variant='body1'>Teléfono de contacto</Typography>
            <TextField
              fullWidth
              size='small'
              sx={{ '& .MuiInputBase-input': { backgroundColor: 'white', borderRadius: '5px' } }}
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </Box>
          <Box mt={1}>
            <Typography variant='body1'>Mensaje</Typography>
            <TextField
              multiline
              rows={3}
              fullWidth
              size='small'
              sx={{ backgroundColor: 'white', borderRadius: '5px' }}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </Box>
          <Box mt={2} textAlign={'end'}>
            <Button variant='contained' style={{ backgroundColor: '#9943A1', textTransform: 'none' }}>
              <Typography px={2} variant='h5' color={'white'} onClick={onClick}>
                Enviar
              </Typography>
            </Button>
          </Box>
        </GridContainer>
      </GridContainer>
    </BoxStyled>
  )
}

export { ContactInfoOne }
