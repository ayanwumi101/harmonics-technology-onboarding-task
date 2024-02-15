import React from 'react'
import macbookImage from '../../../assets/images/macbook.png'
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'
import Button from '../../../components/Button'

const LastSection = () => {
  return (
      <Box py='16'>
          <Box w='90%' mx='auto' borderRadius='25px' bg='#182C51' px='16' py='10'>
              <Flex w='100%' justifyContent='space-between' alignItems='flex-end'>
                  <Box w='55%'>
                      <Heading fontWeight={800} fontSize={34} color='white' fontFamily='Nunito' mb='7' lineHeight='47px'>
                          Unlock Your Productivity: Manage
                          Teams and Plan with Ease, All at
                          Your Fingertips
                      </Heading>
                      <Box>
                          <Box mb='4'>
                              <Button color='white' bg='#0CA59D' text='Start Using TIMBA Today' />
                          </Box>
                          <Text fontSize={14} color='white' fontStyle='italic'>Sign up for FREE trial - No credit card required</Text>
                      </Box>
                  </Box>
                  <Box w='45%'>
                      <Image src={macbookImage} />
                  </Box>
              </Flex>
          </Box>
      </Box>
  )
}

export default LastSection