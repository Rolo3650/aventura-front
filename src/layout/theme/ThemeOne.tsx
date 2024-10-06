'use client'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    secondary: {
      main: '#FD542A'
    }
  },
  typography: {
    fontFamily: 'Arial',
    h1: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400,
    },
    h2: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400,
    },
    h4: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400,
    },
    h5: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400,
    },
    h6: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400,
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        },
        @font-face {
          font-family: 'Jockey One';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');
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
