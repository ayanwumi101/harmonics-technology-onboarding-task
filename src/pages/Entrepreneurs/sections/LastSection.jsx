import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import projectImage from '../../../assets/images/project.png'
import Button from '../../../components/Button'

const LastSection = () => {
    return (
        <Box w='90%' mx='auto' borderRadius='25px' bg='white' py='20'>
            <Flex w='100%' justifyContent='space-between' alignItems='center'>
                <Box w='50%'>
                    <Text color='#636B83' mb='3' lineHeight={9} fontSize={22} fontWeight={400}>TIMBA is the ultimate ally that transforms how companies operate, elevates team performance, and fuels the journey to success. Experience the love for yourself and see why TIMBA is the go-to choice for businesses</Text>    
                    <Button color='white' bg='#0CA59D' text='Have a Large Team - Book a product Demo' />
                </Box>
                <Box w='50%'>
                    <Image src={projectImage} />
                </Box>
            </Flex>
        </Box>
    )
}

export default LastSection