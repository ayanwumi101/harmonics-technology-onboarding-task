import { Box, Heading, Image, Text, Flex } from '@chakra-ui/react'
import React from 'react'
import MacbookImage from '../../../assets/images/macbook.png'
import bgImage from '../../../assets/images/bg-image.png'
import Button from '../../../components/Button'

const HeroSection = () => {
  return (
      <Box as='section' w='100%' backgroundImage={bgImage} backgroundRepeat='no-repeat' backgroundSize='cover' py='16' mb='6'>
          <Flex w='90%' mx='auto' justifyContent='space-between'>
              <Box w='45%'>
                  <Box mb='3'>
                      <Heading fontWeight={800} fontSize={45} color='#182C51' fontFamily='Nunito' lineHeight='70px'>
                          The simple way to track
                          productivity, save time
                          and increase profit
                      </Heading>
                  </Box>
                  <Box mb='5'>
                      <Text fontSize={18} color='#696969' lineHeight='38px' fontWeight={600}>
                          The All-in-One Tracking Software App for Productivity
                          increase, project management, Seamless Payment
                          Partnerships for Remote Team, Employee onboarding
                          and Management
                      </Text>
                  </Box>
                  <Box mb='4'>
                      <Button text='Start Using for FREE – Sign up here' color='white' bg='#0CA59D' />
                  </Box>
                  <Box>
                      <Text color='#696969' fontSize={14}>Enjoy all features for free ( 30 days trail - No credit card required.)</Text>
                  </Box>
              </Box>
              <Box w='50%'>
                  <Image src={MacbookImage} w='100%' objectFit='contain' />
              </Box>
          </Flex>
      </Box>
  )
}

export default HeroSection