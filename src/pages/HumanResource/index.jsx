import React from 'react'
import Hero from '../../components/Hero'
import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react'
import resourceImage from '../../assets/images/resource.png'
import { FlipCard } from '../../components/Card'
import mockup1 from '../../assets/images/mockup1.png'
import mockup2 from '../../assets/images/mockup2.png'
import mockup3 from '../../assets/images/mockup3.png'
import macbookImage from '../../assets/images/macbook.png'
import Info from './info'
import Button from '../../components/Button'

const index = () => {
  return (
      <Box as='section'>
          <Hero
              heading='Revolutionize Your HR 
                Operations with TIMBA'
              text='Say goodbye to manual processes, scattered data, and time-consuming tasks. Let TIMBA revolutionize your HR operations and elevate your efficiency like never before.'
              bgColor='#0CA59D'
              btnColor='#182C51 '
              mainImg={resourceImage}
          />
          <Box w='90%' mx='auto'>
              <FlipCard 
                flip={false} 
                image={mockup1} 
                heading='Streamlined Payroll Management'
                details={[
                    {
                        title: 'Centralized Payroll Processing',
                        description: `Say goodbye to scattered emails and paperwork. TIMBA's centralized payroll management system streamlines the entire payroll process.Easily track employee hours, calculate payments, and automate payroll submission.`
                    },
                    {
                        title: 'Centralized Payroll Processing',
                        description: `Say goodbye to scattered emails and paperwork. TIMBA's centralized payroll management system streamlines the entire payroll process.Easily track employee hours, calculate payments, and automate payroll submission.`
                    },

                ]}
              />
              <FlipCard 
                flip={true} 
                image={mockup2} 
                heading='Secure Employee Data Management' 
                  details={[
                      {
                          title: 'Centralized Payroll Processing',
                          description: `Say goodbye to scattered emails and paperwork. TIMBA's centralized payroll management system streamlines the entire payroll process.Easily track employee hours, calculate payments, and automate payroll submission.`
                      },
                      {
                          title: 'Centralized Payroll Processing',
                          description: `Say goodbye to scattered emails and paperwork. TIMBA's centralized payroll management system streamlines the entire payroll process.Easily track employee hours, calculate payments, and automate payroll submission.`
                      },

                  ]}
              />
          </Box>
          <Info />
          <Box bg='#F5F6F8'>
            <Box w='90%' mx='auto'>
                  <FlipCard
                      flip={false}
                      image={mockup1}
                      heading='Boost Administrative Efficiency'
                      details={[
                          {
                              title: 'Centralized Payroll Processing',
                              description: `Say goodbye to scattered emails and paperwork. TIMBA's centralized payroll management system streamlines the entire payroll process.Easily track employee hours, calculate payments, and automate payroll submission.`
                          },
                          {
                              title: 'Centralized Payroll Processing',
                              description: `Say goodbye to scattered emails and paperwork. TIMBA's centralized payroll management system streamlines the entire payroll process.Easily track employee hours, calculate payments, and automate payroll submission.`
                          },

                      ]}
                  />
                  <FlipCard
                      flip={true}
                      image={mockup3}
                      heading='Advanced Reporting and Insights'
                      details={[
                          {
                              title: 'Centralized Payroll Processing',
                              description: `Say goodbye to scattered emails and paperwork. TIMBA's centralized payroll management system streamlines the entire payroll process.Easily track employee hours, calculate payments, and automate payroll submission.`
                          },
                          {
                              title: 'Centralized Payroll Processing',
                              description: `Say goodbye to scattered emails and paperwork. TIMBA's centralized payroll management system streamlines the entire payroll process.Easily track employee hours, calculate payments, and automate payroll submission.`
                          },

                      ]}
                  />
            </Box>
          </Box>
          <Box py='16'>
              <Box w='90%' mx='auto' borderRadius='25px' bg='#182C51' px='16' py='10'>
                  <Flex w='100%' justifyContent='space-between' alignItems='flex-end'>
                      <Box w='55%'>
                          <Heading fontWeight={800} fontSize={34} color='white' fontFamily='Nunito' mb='7' lineHeight='47px'>
                              Unlock Your Productivity: Manage
                              Teams and Plan with Ease, All at
                              Your Fingertips
                          </Heading>
                          <Box>
                              <Box mb='4'>
                                  <Button color='white' bg='#0CA59D' text='Start Using TIMBA Today' />
                              </Box>
                              <Text fontSize={14} color='white' fontStyle='italic'>Sign up for FREE trial - No credit card required</Text>
                          </Box>
                      </Box>
                      <Box w='45%'>
                          <Image src={macbookImage} />
                      </Box>
                  </Flex>
              </Box>
          </Box>
      </Box>
  )
}

export default index