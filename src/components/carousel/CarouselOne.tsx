'use client'
import { Img } from '@/core'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

interface Props {
  imgs: Img[]
}

const CarouselOne: React.FC<Props> = ({ imgs }) => {
  const [activeStep, setActiveStep] = useState(0)

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <Box width={'100%'} height={'100%'}>
      <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        {imgs.map(img => (
          <div className='w-100' key={img.alt}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  )
}

export { CarouselOne }
