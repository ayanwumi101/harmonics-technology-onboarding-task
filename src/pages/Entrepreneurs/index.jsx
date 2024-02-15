import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '../../components/Hero'
import entrepreneurImage from '../../assets/images/entrepreneur.png'
import FirstSection from './sections/FirstSection'
import Features from './sections/Features'
import LastSection from './sections/LastSection'

const index = () => {
  return (
    <Box as='section'>
          <Hero
              heading='Improve your teams 
                productivity and 
                efficiency'
              text='Optimize Employee Productivity, Manage Time Budgets, and Streamline Administration Effortlessly with TIMBA.'
              bgColor='#0CA59D'
              btnColor='#182C51 '
              mainImg={entrepreneurImage}
          />
          <FirstSection />
          <Features />
          <LastSection />
    </Box>
  )
}

export default index