import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '../../components/Hero'
import contractorImage from '../../assets/images/contractor.png'
import Reasons from './sections/Reasons'
import Features from './sections/Features'
import LastSection from './sections/LastSection'


const index = () => {
  return (
    <Box as='section'>
      <Hero 
        heading='Empower Your 
        Journey with TIMBA,
        Say Goodbye to 
        Time-consuming 
        Hassles!'
        text='Embrace Efficiency and Precision'
        bgColor='#182C51'
        btnColor='#0CA59D'
        mainImg={contractorImage}
      />
      <Reasons />
      <Features />
      <LastSection />
    </Box>
  )
}

export default index