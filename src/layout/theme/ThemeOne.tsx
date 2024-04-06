'use client'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {}
})

const ThemeOne = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export { ThemeOne }
