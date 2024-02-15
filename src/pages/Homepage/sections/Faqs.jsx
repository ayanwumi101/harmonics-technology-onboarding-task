import {
    Box, Heading, Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, VStack, Image, Flex, Stack} from '@chakra-ui/react'
import React from 'react'
import {FaChevronDown, FaChevronRight} from 'react-icons/fa'
import Button from '../../../components/Button'
import macbookImage from '../../../assets/images/macbook.png'


const Faqs = () => {
    const questions = [
        {
            question: 'What is TIMBA?',
            answer: `TIMBA is a powerful and user-friendly software designed to streamline time management and project tracking for individuals, teams, and businesses of all sizes. It offers a range of features, including contract management, time tracking, payment monitoring, and more.`,
        },
        {
            question: 'What are the Key features TIMBA?',
            answer: `TIMBA is a powerful and user-friendly software designed to streamline time management and project tracking for individuals, teams, and businesses of all sizes. It offers a range of features, including contract management, time tracking, payment monitoring, and more.`,
        },
        {
            question: 'Who can benefit from TIMBA?',
            answer: `TIMBA is a powerful and user-friendly software designed to streamline time management and project tracking for individuals, teams, and businesses of all sizes. It offers a range of features, including contract management, time tracking, payment monitoring, and more.`,
        },
        {
            question: 'How user-friendly is TIMBA? Is it suitable for non-tech-savvy users?',
            answer: `TIMBA is a powerful and user-friendly software designed to streamline time management and project tracking for individuals, teams, and businesses of all sizes. It offers a range of features, including contract management, time tracking, payment monitoring, and more.`,
        },
        {
            question: 'How does TIMBA optimize productivity?',
            answer: `TIMBA is a powerful and user-friendly software designed to streamline time management and project tracking for individuals, teams, and businesses of all sizes. It offers a range of features, including contract management, time tracking, payment monitoring, and more.`,
        },
        {
            question: 'Is TIMBA suitable for small businesses and large enterprises alike?',
            answer: `TIMBA is a powerful and user-friendly software designed to streamline time management and project tracking for individuals, teams, and businesses of all sizes. It offers a range of features, including contract management, time tracking, payment monitoring, and more.`,
        },
    ]
  return (
    <Box bg='white' w='100%' py='14'>
          <Box mb='10'>
              <Heading fontWeight={700} textAlign='center' fontSize={44} w='80%' mx='auto' color='#182C51' fontFamily='Nunito' lineHeight='55px'>
                  FAQs
              </Heading>
              <Text textAlign='center' color='#2EAFA3' fontSize={14} fontWeight={700}>FREQUENTLY ASKED QUESTIONS</Text>
          </Box>
          <Box w='65%' mx='auto'>
              <Accordion allowToggle>
                {questions.map((item, index) => {
                    return (
                        <AccordionItem border='none' boxShadow='lg' borderRadius='18px' py='7' px='6' mb='7'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton _hover={{ bg: 'none' }}>
                                            <Box as="span" flex='1' fontWeight={700} fontSize={20} color='#073367' textAlign='left'>
                                                {item.question}
                                            </Box>
                                            <Box w='40px' h='40px' borderRadius='50%' bg={isExpanded ? '#2EAFA3' : 'white'} boxShadow='md' display='flex' alignItems='center' justifyContent='center'>
                                                {isExpanded ? <FaChevronDown color='white' /> : <FaChevronRight color='#2EAFA3' />}
                                            </Box>
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4} color='#6F6C90' lineHeight={7}>
                                       {item.answer}
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    )})}
              </Accordion>
          </Box>
          <Box as='section' py='8' mb='16'>
              <Box mb='5'>
                  <Heading fontWeight={600} textAlign='center' fontSize={34} w='70%' mx='auto' color='#182C51' fontFamily='Nunito' lineHeight='55px'>
                      Have a Large Team - Book a product Demo
                  </Heading>
              </Box>
              <Box>
                  <VStack spacing={4}>
                      <Button color='white' bg='#0CA59D' text='Book A Product Demo' />
                  </VStack>
              </Box>
          </Box>
          <Box w='90%' mx='auto' borderRadius='25px' bg='#182C51' px='16' py='10'> 
            <Flex w='100%' justifyContent='space-between' alignItems='flex-end'>
                <Box w='60%'>
                    <Heading fontWeight={800} fontSize={34} color='white' fontFamily='Nunito' mb='7' lineHeight='47px'>
                        Explore the world of efficient time
                        tracking and with TIMBA – Your partner
                        in optimizing productivity.
                    </Heading>
                    <Box>
                        <Box mb='4'>
                            <Button color='white' bg='#0CA59D' text='Start Using TIMBA Today' />
                        </Box>
                        <Text fontSize={14} color='white' fontStyle='italic'>Sign up for FREE trial - No credit card required</Text>
                    </Box>
                </Box>
                <Box w='40%'>
                    <Image src={macbookImage} />
                </Box>
            </Flex>
          </Box>
    </Box>
  )
}

export default Faqs