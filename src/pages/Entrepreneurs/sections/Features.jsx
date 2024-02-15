import React from 'react'
import { Box, Heading, Flex, Text, VStack } from '@chakra-ui/react'
import Card from '../../../components/Card'
import employeeIcon from '../../../assets/svgs/employee.svg'
import Button from '../../../components/Button'

const Features = () => {
    const features = [
        {
            image: employeeIcon,
            heading: 'Employee Onboarding',
            text: `TIMBA makes it easy to onboard newemployees by providing them with a 
                    pre- configured account and access to
                    all the features they need to get started`
        },
        {
            image: employeeIcon,
            heading: 'Employee Onboarding',
            text: `TIMBA makes it easy to onboard newemployees by providing them with a 
                    pre- configured account and access to
                    all the features they need to get started`
        },
        {
            image: employeeIcon,
            heading: 'Employee Onboarding',
            text: `TIMBA makes it easy to onboard newemployees by providing them with a 
                    pre- configured account and access to
                    all the features they need to get started`
        },
        {
            image: employeeIcon,
            heading: 'Employee Onboarding',
            text: `TIMBA makes it easy to onboard newemployees by providing them with a 
                    pre- configured account and access to
                    all the features they need to get started`
        },
        {
            image: employeeIcon,
            heading: 'Employee Onboarding',
            text: `TIMBA makes it easy to onboard newemployees by providing them with a 
                    pre- configured account and access to
                    all the features they need to get started`
        },
        {
            image: employeeIcon,
            heading: 'Employee Onboarding',
            text: `TIMBA makes it easy to onboard newemployees by providing them with a 
                    pre- configured account and access to
                    all the features they need to get started`
        },
    ]
  return (
      <Box as='section' bg='#182C51' py='12'>
          <Box mb='10'>
              <Heading fontWeight={700} mb='5' textAlign='center' fontSize={44} w='75%' mx='auto' color='white' fontFamily='Nunito' lineHeight='55px'>
                  Track every minute of your billable time. We know this means a lot you
              </Heading>
              <Text color='white' textAlign='center'>Discover the features that make TIMBA the ultimate solution for your needs.</Text>
          </Box>
          <Box w='88%' mx='auto'>
              <Flex flexWrap='wrap' justifyContent='space-between'>
                  {features.map((feature, index) => <Card key={index} icon={feature.image} heading={feature.heading} text={feature.text} />)}
              </Flex>
          </Box>
          <VStack>
              <Heading fontWeight={700} mb='5' textAlign='center' fontSize={36} w='75%' mx='auto' color='white' fontFamily='Nunito' lineHeight='55px'>
                  Start Using TIMBA today
              </Heading>
              <Box mb='4'>
                  <Button color='white' bg='#0CA59D' text='Start Using TIMBA Today' />
              </Box>
              <Text fontSize={14} color='white' fontStyle='italic'>Sign up for FREE trial - No credit card required</Text>
          </VStack>
      </Box>
  )
}

export default Features