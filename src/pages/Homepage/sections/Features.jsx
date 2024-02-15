import { Box, Heading, Flex } from '@chakra-ui/react'
import React from 'react'
import employeeIcon from '../../../assets/svgs/employee.svg'
import Card from '../../../components/Card'


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
    <Box as='section' bg='#F5F6F8' py='12'>
        <Box mb='6'>
              <Heading fontWeight={700} textAlign='center' fontSize={44} w='80%' mx='auto' color='#182C51' fontFamily='Nunito' lineHeight='55px'>
                  Features of TIMBA Your seamless time tracking solution
              </Heading>
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