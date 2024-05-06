'use client'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#FD542A'
    }
  },
  typography: {
    fontFamily: 'Raleway, Arial'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `
    }
  }
})

const ThemeOne = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export { ThemeOne }
