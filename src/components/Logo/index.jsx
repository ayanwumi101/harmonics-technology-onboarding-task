import React from 'react'
import { Box, Image, Text, Stack, Heading } from '@chakra-ui/react'
import Logo from '../../assets/svgs/logo.svg'


const index = () => {
  return (
    <Box as='section'>
        <Stack direction='row' alignItems='center' gap='2px'>
          <Image src={Logo} alt='admin-sheet logo' w='auto' />
          <Heading fontSize={18} color='#182C51' fontWeight={900}>ADMIN-TIMESHEET</Heading>
        </Stack>
    </Box>
  )
}

export default index