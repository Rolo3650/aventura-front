import type { Metadata } from 'next'
import { HeaderOne } from '@/components'
import '@/styles/sass/index.scss'
import { ThemeOne } from '@/layout'
import 'react-photo-view/dist/react-photo-view.css';
import { FooterOne } from '@/components/modules/footer';

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
      </body>
    </html>
  )
}
