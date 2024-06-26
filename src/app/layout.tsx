import type { Metadata } from 'next'
import { HeaderOne } from '@/components'
import '@/styles/sass/index.scss'
import { ThemeOne } from '@/layout'
import 'react-photo-view/dist/react-photo-view.css'
import { FooterOne } from '@/components/modules/footer'
import { Box } from '@mui/material'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <ThemeOne>
          <HeaderOne />
          {children}
          <FooterOne />
        </ThemeOne>
        <Box
          sx={{
            '& img': {
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              width: '70px',
              height: '70px',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }
          }}
        >
          <a href="https://api.whatsapp.com/send/?phone=5538060138&text=Buenas tardes, estoy interesado&type=phone_number&app_absent=0" target='_blank'>
            <img src='https://img.icons8.com/?size=100&id=16713&format=png&color=000000' alt='whats-icon' />
          </a>
        </Box>
        <Box
          sx={{
            '& img': {
              position: 'fixed',
              bottom: '20px',
              left: '20px',
              width: '70px',
              height: '70px',
              color: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              cursor: 'pointer',
              transition: 'transform 0.3s ease'
            }
          }}
        >
          <a href="https://www.facebook.com/AventuraentuEscuela?mibextid=LQQJ4d" target='_blank'>
            <img src='https://img.icons8.com/?size=100&id=118497&format=png&color=000000' alt='whats-icon' />
          </a>
        </Box>
      </body>
    </html>
  )
}
