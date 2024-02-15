import React from 'react'
import Hero from '../../components/Hero'
import { Box } from '@chakra-ui/react'
import femalesImage from '../../assets/images/females.png'
import { FlipCard } from '../../components/Card'
import mockup6 from '../../assets/images/mockup6.png'
import mockup4 from '../../assets/images/mockup4.png'
import mockup5 from '../../assets/images/mockup5.png'
import LastSection from './sections/LastSection'


const index = () => {
  return (
    <Box>
        <Hero
            heading='Simplifying Client 
                Management and 
                Employee Onboarding'
            text="With TIMBA's powerful functionalities, recruiters can unlock the true potential of efficient candidate sourcing, seamless onboarding, contract management and client satisfaction"
            bgColor='#182C51'
            btnColor='#0CA59D'
            mainImg={femalesImage}
        />
        <Box w='90%' mx='auto'>
              <FlipCard 
                flip={false} 
                image={mockup4} 
                  heading='Streamlined Client Management'
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
                image={mockup5} 
                  heading='Effortless Employee Onboarding' 
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
        <Box bg='#F5F6F8' py='14'>
            <Box w='90%' mx='auto'>
                <FlipCard
                      flip={false}
                      image={mockup6}
                      heading='Powerful Reporting and Analytics'
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
        <LastSection />
    </Box>
  )
}

export default index