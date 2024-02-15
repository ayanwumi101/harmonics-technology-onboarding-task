import { Box, Heading, Image, Flex, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import softwareImg from '../../../assets/images/list.png'
import plane from '../../../assets/svgs/plane.svg'
import wallet from '../../../assets/svgs/wallet.svg'
import shifts from '../../../assets/svgs/shifts.svg'
import Button from '../../../components/Button'

const FeaturesSection2 = () => {
    const cardDetails = [
        {
            image: plane,
            heading: 'Manage Time off, holidays and Break',
            text: `Review and approve employee time 
                off requests from a single location,
                Set up paid or unpaid time off break 
                policies for better time tracking.`,
        },
        {
            image: wallet,
            heading: 'Manage Payroll',
            text: `Use integrations with PayPal, Payoneer, 
                    Wise, and Bitwage to automate payroll 
                    based on billable hours. Set automatic
                    weekly or monthly payments for 
                    international and local employees, or 
                    send payments manually.`,
        },
        {
            image: shifts,
            heading: 'Employee shift scheduling',
            text: `You can create shift schedules, assign shifts to employees, and track employee availability. You can also generate reports on shift scheduling to see how well your schedules are working.`,
        },
    ]
    return (
        <Box as='section'>
            <Box bg='#182C51' py='10' as='section'>
                <Box mb='12'>
                    <Heading fontWeight={700} textAlign='center' fontSize={44} w='60%' mx='auto' color='white' fontFamily='Nunito' lineHeight='55px'>
                        Time tracking software features for
                        managing employees
                    </Heading>
                </Box>
                <Box w='90%' mx='auto'>
                    <Flex justifyContent='space-between'>
                        {cardDetails.map((item, index) => <FeatureCards index={index} key={index} icon={item.image} heading={item.heading} text={item.text} />)}
                    </Flex>
                </Box>
                <Box>
                    <Image src={softwareImg} display='block' mx='auto' />
                </Box>
            </Box>
            <Box as='section' bg='#F5F6F8' py='8'>
                <Box mb='10'>
                    <Heading fontWeight={700} textAlign='center' fontSize={44} w='70%' mx='auto' color='#182C51' fontFamily='Nunito' lineHeight='55px'>
                        TIMBA is the right tool to help you increase your productivity and profit.
                    </Heading>
                </Box>
                <Box>
                    <VStack spacing={4}>
                        <Button color='white' bg='#0CA59D' text='Start Using TIMBA Today' />
                        <Text fontSize={14} color='#696969' fontStyle='italic'>Sign up for FREE trial - No credit card required</Text>
                    </VStack>
                </Box>
            </Box>
        </Box>
    )
}

export default FeaturesSection2


const FeatureCards = ({ icon, heading, text, index }) => {
    return (
        <Box w='400px' h='364px' px='7' py='10' mb='8' bg={index === 0 ? 'white' : 'none'} borderRight={index === 1 ? '1px solid white' : 'none'} borderRadius={index === 0 ? '10px' : '0px'}>
            <Stack spacing={4}>
                <Image src={icon} w='36px' h='36px' />
                <Heading fontSize={19} color={index === 0 ? '#253053' : 'white'} fontFamily='Nunito'>{heading}</Heading>
                <Text color={index === 0 ? '#636B83' : 'white'} fontWeight={400} lineHeight={7}>{text}</Text>
            </Stack>
        </Box>
    )
}