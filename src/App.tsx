import { useState } from 'react'
import NavBar from './components/Navbar'
import './App.css'
import InfoGradient from './components/InfoGradient'
import FooterGradient from './components/FooterGradient'
import Box from './components/Box'

function App() {

  return (
    <>

      <div className='h-screen'>

        <NavBar></NavBar>

        <InfoGradient></InfoGradient>

        <Box></Box>

        <FooterGradient></FooterGradient>

      </div>

    </>
  )
}

export default App
