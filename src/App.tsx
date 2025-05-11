import { useState } from 'react'
import NavBar from './components/Navbar'
import './App.css'
import InfoGradient from './components/InfoGradient'
import FooterGradient from './components/FooterGradient'
import ExperienceTimeline from './components/ExperienceTimeline'

function App() {

  return (
    <>

      <div className='h-screen'>

        <NavBar></NavBar>

        <InfoGradient></InfoGradient>

        <ExperienceTimeline></ExperienceTimeline>

        <FooterGradient></FooterGradient>

      </div>

    </>
  )
}

export default App
