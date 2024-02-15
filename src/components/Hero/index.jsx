import React from 'react'
import { Box, Heading, Image, Text, Flex } from '@chakra-ui/react'
import bgImage from '../../assets/images/bg-image.png'
import Button from '../Button'

const index = ({mainImg, heading, text, btnColor, bgColor}) => {
  return (
      <Box as='section' w='100%' backgroundImage={bgImage} backgroundRepeat='no-repeat' backgroundSize='cover' py='16' mb='6' backgroundColor={bgColor}>
          <Flex w='90%' mx='auto' justifyContent='space-between' alignItems='center'>
              <Box w='45%'>
                  <Box mb='3'>
                      <Heading fontWeight={800} fontSize={45} color='white' fontFamily='Nunito' lineHeight='70px'>
                          {heading}
                      </Heading>
                  </Box>
                  <Box mb='5'>
                      <Text fontSize={18} color='white' lineHeight='38px' fontWeight={600}>
                         {text}
                      </Text>
                  </Box>
                  <Box mb='4'>
                      <Button text='Start Using for FREE – Sign up here' color='white' bg={btnColor} />
                  </Box>
                  <Box>
                      <Text color='white' fontSize={14}>Enjoy all features for free ( 30 days trail - No credit card required.)</Text>
                  </Box>
              </Box>
              <Box w='50%'>
                  <Image src={mainImg} w='100%' objectFit='contain' />
              </Box>
          </Flex>
      </Box>
  )
}

export default index