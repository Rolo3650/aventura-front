'use client'
import { Img } from '@/core'
import { Box, Button, Card, CardContent, CardProps, Grid, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { TitleOne } from '../title'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const CardStyled = styled(Card)<CardProps>(({}) => ({
  height: 'min-content',
  alignItems: 'center',
  marginBottom: '30px',
  borderRadius: '20px',
  boxShadow: '0px 10px 30px 10px rgba(0,0,0,0.1)',
  cursor: 'pointer'
}))

const MemoriesOne = ({ title, imgs }: { title: string; imgs: Img[] }) => {
  const [more, setMore] = useState(false)

  return (
    <Box>
      <TitleOne text={title} />
      <PhotoProvider>
        <Grid container>
          {!more &&
            imgs?.slice(0, 3).map(img => (
              <Grid key={img.alt} sm={4} md={3} display={'flex'} justifyContent={'center'} p={2} alignItems={'center'}>
                <Box>
                  <CardStyled>
                    <CardContent>
                      <PhotoView src={img.src}>
                        <img src={img.src} alt={img.alt} className='mw-100 mh-100' />
                      </PhotoView>
                    </CardContent>
                  </CardStyled>
                </Box>
              </Grid>
            ))}
          {more &&
            imgs?.map(img => (
              <Grid key={img.alt} sm={3} display={'flex'} justifyContent={'center'} p={2} alignItems={'center'}>
                <Box>
                  <CardStyled>
                    <CardContent>
                      <PhotoView src={img.src}>
                        <img src={img.src} alt={img.alt} className='mw-100 mh-100' />
                      </PhotoView>
                    </CardContent>
                  </CardStyled>
                </Box>
              </Grid>
            ))}
          <Grid sm={12} md={3} display={'flex'} justifyContent={'center'} p={2} alignItems={'center'}>
            <Button
              onClick={() => {
                setMore(!more)
              }}
              variant='contained'
            >
              <Typography variant='body1' fontWeight={'bold'}>
                {more ? '...Ver menos' : 'Ver más...'}
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </PhotoProvider>
    </Box>
  )
}

export { MemoriesOne }
