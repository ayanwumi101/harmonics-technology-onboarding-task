import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import projectImage from '../../../assets/images/project.png'
import Button from '../../../components/Button'

const LastSection = () => {
  return (
      <Box w='90%' mx='auto' borderRadius='25px' bg='white' px='16' py='14'>
          <Flex w='100%' justifyContent='space-between' alignItems='flex-end'>
              <Box w='50%'>
                  <Heading fontWeight={800} fontSize={34} color='#182C51' fontFamily='Nunito' mb='2' lineHeight='47px'>
                      Embrace a New Era of Efficiency, Precision, and Productivity
                  </Heading>
                  <Text color='#636B83' mb='3' lineHeight={8}>Empower your journey and elevate your operations to unprecedented heights with TIMBA.</Text>
                  <Box>
                      <Box mb='4'>
                          <Button color='white' bg='#0CA59D' text='Start Using TIMBA Today' />
                      </Box>
                      <Text fontSize={14} color='#636B83' fontStyle='italic'>Sign up for FREE trial - No credit card required</Text>
                  </Box>
              </Box>
              <Box w='50%'>
                  <Image src={projectImage} />
              </Box>
          </Flex>
      </Box>
  )
}

export default LastSection