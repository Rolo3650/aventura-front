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
      color: '#935B1F'
    },
    h2: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400
    },
    h3: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400
    },
    h4: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400
    },
    h5: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400,
      color: '#935B1F'
    },
    h6: {
      fontFamily: 'Jockey One, sans-serif',
      fontWeight: 400
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontWeight: 400,
      color: '#B47443'
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
        },
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
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
