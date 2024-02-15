import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Button from '../../components/Button'


const info = () => {
  return (
    <Box bg='#182C51' py='8'>
        <Box w='80%' mx='auto'>
            <Heading color='white' fontSize={36} fontWeight={700} fontFamily='Nunito' mb='5' lineHeight='55px' textAlign='center'>
                The average HR manager spends 20% of their time on administrative tasks. Time-tracking software can help HR managers save time and improve productivity.
            </Heading>
            <VStack>
                 <Box mb='4'>
                  <Button color='white' bg='#0CA59D' text='Start Using TIMBA Today' />
                </Box>
                <Text fontSize={14} color='white' fontStyle='italic'>Sign up for FREE trial - No credit card required</Text>
            </VStack>
        </Box>
    </Box>
  )
}

export default info