import React from 'react'
import { Box, Button} from '@chakra-ui/react'

const index = ({bg, color, text}) => {
  return (
    <Button p='6' bg={bg} color={color}>{text}</Button>
  )
}

export default index