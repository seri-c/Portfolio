
import NavBar from './components/Navbar'
import './App.css'
import InfoGradient from './components/InfoGradient'
import FooterGradient from './components/FooterGradient'
import ExperienceTimeline from './components/ExperienceTimeline'
import About from './components/About'

function App() {

  return (
    <>

      <div className=''>

        <NavBar></NavBar>

        <InfoGradient></InfoGradient>
        <About id="About"></About>

        <ExperienceTimeline id="Experience"></ExperienceTimeline>

        <FooterGradient id="Projects"></FooterGradient>

      </div>

    </>
  )
}

export default App
