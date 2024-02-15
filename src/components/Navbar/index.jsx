import React from 'react'
import {
    Box, Stack, Text, Button, useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList, Icon,
} from '@chakra-ui/react'
import Logo from '../Logo'
import { Link } from 'react-router-dom'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const index = () => {
    const links = ['Pricing', 'Blogs', 'Book a demo', 'Contact Us'];
    const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box as='nav' py='4' boxShadow='md' w='100%'>
        <Box w='90%' mx='auto'>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
                <Link to='/'><Logo /></Link>
                <Box>
                    <Stack direction='row' spacing={7} alignItems='center'>
                        <Menu isOpen={isOpen}>
                              <MenuButton
                                  variant="ghost"
                                  mx={1}
                                  py={[1, 2, 2]}
                                  px={4}
                                  borderRadius={5}
                                //   _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
                                  aria-label="links"
                                  fontWeight={600}
                                  onMouseEnter={onOpen}
                                  onMouseLeave={onClose}
                              >
                                  Use cases {isOpen ? <Icon as={FiChevronUp} /> : <Icon as={FiChevronDown} />}
                              </MenuButton>
                              <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} fontSize={15}>
                                  <Link to='/sub-contractor'><MenuItem>Sub-contractors</MenuItem></Link>
                                  <Link to='/human-resource'><MenuItem>Human Resource Managers</MenuItem></Link>
                                  <Link to='/entrepreneurs'><MenuItem>Entrepreneurs</MenuItem></Link>
                                  <Link to='/recruiters'><MenuItem>Recruiters</MenuItem></Link>
                              </MenuList>
                        </Menu>
                        {links.map((link, index) => <Text key={index} color='#182C51' fontWeight={600}>{link}</Text>)}
                        <Button color='#0CA59D' border='1px solid #0CA59D' bg='none' borderRadius='8px' w='115px' _hover={{ bg: '#0CA59D', color: 'white'}}>Login</Button>
                        <Button bg='#0CA59D' border='1px solid #0CA59D' borderRadius='8px' w='115px' color='white' _hover={{ bg: '#0CA59D' }}>Sign Up</Button>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    </Box>
  )
}

export default index