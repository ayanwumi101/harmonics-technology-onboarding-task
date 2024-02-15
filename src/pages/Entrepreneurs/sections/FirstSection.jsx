import { Box, Heading, Text, Image, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import Button from '../../../components/Button'
import devicesImage from '../../../assets/images/devices.png'


const FirstSection = () => {
  return (
      <Box py='12' w='100%'>
          <Box textAlign='center' mb='16' w='80%' mx='auto'>
              <Heading fontSize={48} mb='3' color='#182C51' fontFamily='Nunito' fontWeight={700}>One tool for managing your flexible team</Heading>
              <Text color='#636B83'>One central dashboard for leading flexible teams, regardless of their location, time zone, or device, TIMBA provides you with the visibility and insights you need to stay on top of your team's productivity and progress.</Text>
          </Box>
          <Box w='90%' mx='auto'>
              <Flex justifyContent='space-between' alignItems='center'>
                  <Box mb='10' w='48%'>
                      <Heading fontSize={48} mb='3' color='#182C51' fontFamily='Nunito' fontWeight={700}>Manage from any device and anywhere</Heading>
                      <Text color='#636B83'>TIMBA makes it easy to track your time and productivity from any device, so you can stay on top of your work no matter where you are.</Text>
                  </Box>
                  <Box w='48%'><Image src={devicesImage} /></Box>
              </Flex>
          </Box>
      </Box>
  )
}

export default FirstSection