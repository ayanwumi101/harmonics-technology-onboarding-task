import { Box, Heading, Text, Image, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import Button from '../../../components/Button'
import developerImage from '../../../assets/images/developer.png'


const Reasons = () => {
    const reasons = [
       {
            heading: 'Increased Visibility',
            description: 'Get a crystal-clear overview of your time allocation, enabling you to optimize productivity and make every minute count.',
       },
        {
            heading: 'Increased Visibility',
            description: 'Get a crystal-clear overview of your time allocation, enabling you to optimize productivity and make every minute count.',
        },
        {
            heading: 'Increased Visibility',
            description: 'Get a crystal-clear overview of your time allocation, enabling you to optimize productivity and make every minute count.',
        },
        {
            heading: 'Increased Visibility',
            description: 'Get a crystal-clear overview of your time allocation, enabling you to optimize productivity and make every minute count.',
        },
        {
            heading: 'Increased Visibility',
            description: 'Get a crystal-clear overview of your time allocation, enabling you to optimize productivity and make every minute count.',
        },
    ]
  return (
    <Box py='8' w='100%'>
        <Box textAlign='center' mb='10'>
            <Heading fontSize={48} mb='3' color='#182C51' fontFamily='Nunito' fontWeight={700}>Why Subcontractor love TIMBA</Heading>
            <Text color='#636B83'>TIMBA goes beyond just tracking time; it empowers subcontractors to elevate their performance and take their businesses to new height</Text>
        </Box>
        <Box w='90%' mx='auto'>
            <Flex justifyContent='space-between' alignItems='center'>
                <Box w='48%'><Image src={developerImage} /></Box>
                <Box w='48%'>
                    <Box>
                        <Stack spacing={1}>
                            {reasons.map((item, index) => {
                                return (
                                    <Box key={index} mb='6'>
                                        <Heading fontSize={18} mb='2' color='#182C51' fontFamily='Nunito' fontWeight={700}>{item.heading}</Heading>
                                        <Text color='#636B83'>{item.description}</Text>
                                    </Box>
                                )
                            })}
                        </Stack>
                    </Box>
                    <Button text='Sign Up Today' color='white' bg='#0CA59D' />
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default Reasons