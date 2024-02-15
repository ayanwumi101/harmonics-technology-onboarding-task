import { useState, useEffect } from 'react'
import './App.css'
import { Box, Heading } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import SubContractor from './pages/SubContractor'
import HumanResource from './pages/HumanResource'
import Entrepreneurs from './pages/Entrepreneurs'
import Recruiters from './pages/Recruiters'

function App() {
  
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }

    )()

  }, [])

  return (
    <Box as='section'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route path='/sub-contractor' element={<SubContractor />} />
          <Route path='/human-resource' element={<HumanResource />} />
          <Route path='/entrepreneurs' element={<Entrepreneurs />} />
          <Route path='/recruiters' element={<Recruiters />} />
        </Routes>
      </Router>
      <Footer />
    </Box>
  )
}

export default App
