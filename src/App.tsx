import { useState } from 'react'
import NavBar from './components/Navbar'
import './App.css'
import InfoGradient from './components/InfoGradient'
import FooterGradient from './components/FooterGradient'

function App() {

  return (
    <>

      <div className='absolute'>

        <NavBar></NavBar>
        
        <InfoGradient></InfoGradient>

        <div className="w-screen h-70">

        </div>

       <FooterGradient></FooterGradient>

      </div>

    </>
  )
}

export default App
