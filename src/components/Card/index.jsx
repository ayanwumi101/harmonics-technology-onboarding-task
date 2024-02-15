import { Box, Heading, Text, Image, Stack, Flex } from '@chakra-ui/react'
import React from 'react'

const index = ({heading, text, icon}) => {
  return (
    <Box w='376px' h='367px' borderRadius='8px' px='7' py='10' bg='white' mb='8'>
        <Stack spacing={4}>
            <Image src={icon} w='36px' h='36px' />
            <Heading fontSize={20} color='#253053' fontFamily='Nunito'>{heading}</Heading>
            <Text color='#636B83' fontWeight={400} lineHeight={7}>{text}</Text>
        </Stack>
    </Box>
  )
}

export default index

export const FlipCard = ({flip, image, heading, details}) => {
    return (
        <Box py='12'>
            <Flex alignItems='center' justifyContent='space-between' flexDir={flip ? 'row-reverse' : 'row'}>
                <Box w='49%'>
                    <Box mb='5'>
                        <Heading color='#182C51' fontWeight={700} fontFamily='Nunito' fontSize={44}>{heading}</Heading>
                    </Box>
                    <Box>
                        {details?.map((item, index) => {
                            return <Box mb='5'>
                                <Heading color='#182C51' fontWeight={700} fontFamily='Nunito' fontSize={18} mb='2'>{item.title}</Heading>
                                <Text color='#636B83' lineHeight={8}>{item.description}</Text>
                            </Box>
                        })}
                    </Box>
                </Box>
                <Box w='49%'>
                    <Image src={image} />
                </Box>
            </Flex>
        </Box>
    )
}