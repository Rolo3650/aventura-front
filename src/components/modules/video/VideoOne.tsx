'use client'
import { Box, BoxProps,  Grid, GridProps, styled, Typography } from '@mui/material'
import React from 'react'

const BoxStyled = styled(Box)<BoxProps>(({}) => ({
  padding: '0 30px',
  position: 'relative'
}))

const BoxBackground = styled(Box)<BoxProps>(({ theme }) => ({
  borderRadius: '4px',
  bottom: 0,
  right: '30px',
  width: '66%',
  height: '100%',
  backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
  [theme.breakpoints.up('md')]: {
    position: 'absolute'
  },
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const GridBottom = styled(Grid)<GridProps>(({ theme }) => ({
  '&.bottom': {
    [theme.breakpoints.down('md')]: {
      padding: '50px 30px',
      backgroundImage: 'url(/imgs/backgrounds/table_2.jpg)',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)'
    }
  }
}))

const VideoOne = ({ video }: { video: string }) => {
  return (
    <BoxStyled maxWidth={'1400px'} mx={'auto'}>
      <BoxBackground />
      <Grid
        container
        sx={{
          position: 'relative',
          zIndex: 1
        }}
      >
        <Grid
          item
          md={6}
          xs={12}
          py={'60px'}
          px={'30px'}
          sx={{
            '& video': {
              width: '100%',
              boxShadow: '4px 4px 8px 0 rgba(0,0,0,0.25)',
              borderRadius: '8px'
            }
          }}
        >
          <video src={video} autoPlay={true} controls={true}/>
        </Grid>
        <GridBottom item md={5} py={'60px'} xs={12} className='bottom'>
          <Typography variant='h5'>Sobre nosotros</Typography>
          <Typography variant='body1' textAlign={'justify'} mt={2}>
            ¿Quiénes Somos?
            <br />
            <br />
            Somos una empresa dedicada a la formación integral de niños y jóvenes a través de un programa formativo
            recreativo en donde se realizan diferentes actividades orientadas hacia el trabajo en equipo, aumento de la
            autoestima, fortalecimiento de la independencia, concientización de valores y sobre la importancia que
            realizan los padres de familia en su proceso formativo.
            <br />
            <br />
            Misión de Aventura en tu Escuela: Promover actividades donde se fomente la sana diversión como una
            herramienta para promover valores, incrementar la autoestima, incrementar la independencia y favorecer la
            superación de retos a través de la sana competencia.
            <br />
            <br />
            Compromiso En Aventura en tu Escuela desarrollamos visitas culturales, recreativas y campamentos con un gran
            profesionalismo y con esto garantizamos la completa seguridad de los alumnos de tu escuela, los cuales se
            llevaran una gran experiencia con nuestras Aventuras en las cuales se promueve la sana diversión, todo esto
            con el objetivo de mantener a niños y jóvenes alejados de conductas de riesgo, combinando la diversión y el
            aprendizaje en todo momento.
          </Typography>
          {/* <Box mt={3} textAlign={'center'}>
            <Button
              variant='contained'
              sx={{
                background: '#9943A1',
                textTransform: 'none',
                color: 'white'
              }}
            >
              <Typography variant='h5' color={'inherit'} px={3}>
                Ver más...
              </Typography>
            </Button>
          </Box> */}
        </GridBottom>
      </Grid>
    </BoxStyled>
  )
}

export { VideoOne }
