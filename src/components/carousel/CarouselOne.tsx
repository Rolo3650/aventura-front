'use client'
import { Img } from '@/core'
import { Box, BoxProps, styled } from '@mui/material'
import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { PhotoProvider, PhotoView } from 'react-photo-view'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    "& img": {
      maxHeight: '600px',
    }
  },
  [theme.breakpoints.down('sm')]: {
    "& img": {
      maxHeight: '300px',
    }
  }
}))

interface Props {
  imgs: Img[]
}

const CarouselOne: React.FC<Props> = ({ imgs }) => {
  const [activeStep, setActiveStep] = useState(0)

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <BoxStyled width={'100%'} height={'100%'}>
      <PhotoProvider>
        <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
          {imgs.map(img => (
            <div className='w-100' key={img.alt}>
              <PhotoView src={img.src}>
                <img src={img.src} alt={img.alt} />
              </PhotoView>
              {/* <img src={img.src} alt={img.alt} /> */}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </PhotoProvider>
    </BoxStyled>
  )
}

export { CarouselOne }
