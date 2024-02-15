import { Box, Heading, Icon, Text, Flex, UnorderedList, ListItem, Stack } from '@chakra-ui/react'
import React from 'react'
import Logo from '../Logo'
import {CiTwitter} from 'react-icons/ci'
import {FaFacebook, FaInstagram} from 'react-icons/fa'


const index = () => {
  return (
    <Box as='footer' bg='#F5F5F5' py='12' w='100%'>
      <Box as='section' w='90%' mx='auto'>
        <Flex justifyContent='space-between'>
          <Box w='370px'>
            <Logo />
            <Box py='2'>
              <Text color='#636B83' fontSize={14} lineHeight={8}>
                The TIMBA is a powerful and user-friendly software designed to streamline time management and project tracking for individuals, teams, and businesses of all sizes. With its intuitive interface and robust features, TIMBA empowers users to efficiently monitor their time, optimize productivity, and gain valuable insights into workforce performance.
              </Text>
            </Box>
          </Box>
          <FooterList headingText='Sections' items={['Home', 'Pricing', 'Book a Demo', 'FAQs']} />
          <FooterList headingText='Quick Links' items={['Legal', 'Terms Of Use']} />
          <Box w='300px'>
            <Heading mb='2' fontSize={24} fontWeight={700} fontFamily='Nunito' color='#182C51'>Contact Us</Heading>
            <Box py='2' mb='2'>
              <Text color='#636B83' fontSize={14} lineHeight={6}>
                Our Support team is available 24 /7 to
                answer your queries
              </Text>
            </Box>
            <Box>
              <Stack direction='row' spacing={5} alignItems='center'>
                <Icon as={FaFacebook} color='#2EAFA3' fontSize={20} />
                <Icon as={CiTwitter} color='#2EAFA3' fontSize={25} />
                <Icon as={FaInstagram} color='#2EAFA3' fontSize={20} />
              </Stack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default index

const ListItems = ({ items }) => {
  return (
    <Box>
      {items.map((item, index) => <ListItem color='#182C51' mb='3' key={index} fontWeight={500} fontSize={15}>{item}</ListItem>)}
    </Box>
  )
}

const FooterList = ({headingText, items}) => {
  return (
    <Box>
      <UnorderedList listStyleType='none'>
        <Heading mb='3' fontSize={24} fontWeight={700} fontFamily='Nunito' color='#182C51'>{headingText}</Heading>
        <ListItems items={['Legal', 'Terms Of Use']} />
      </UnorderedList>
    </Box>
  )
}