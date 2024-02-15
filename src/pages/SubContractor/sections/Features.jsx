import React from 'react'
import { Box, Heading, Flex, Text } from '@chakra-ui/react'
import Card from '../../../components/Card'
import employeeIcon from '../../../assets/svgs/employee.svg'

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
      </Box>
  )
}

export default Features