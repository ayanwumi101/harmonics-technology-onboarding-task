import { Box, Heading, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import HeroSection from './sections/HeroSection'
import Features from './sections/Features'
import FeaturesSection2 from './sections/FeaturesSection2'
import Faqs from './sections/Faqs'



const index = () => {
  return (
    <Box>
      <HeroSection />
      <Features />
      <FeaturesSection2 />
      <Faqs />
    </Box>
  )
}

export default index