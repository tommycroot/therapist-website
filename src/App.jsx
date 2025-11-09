import { useState } from 'react'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Areas from './components/Areas'
import Fees from './components/Fees'
import Contact from './components/Contact'
import './App.css'
import './styles/navbar.css'
import './styles/intro.css'
import './styles/main.css'
import './styles/about.css'
import './styles/areas.css'
import './styles/fees.css'
import './styles/contact.css'



function App() {


  return (
  
  <>
  <NavBar />

 
  <section className='hero-section'>
    <div className='home'>
      <p className='hero'>Abingdon Therapy</p>
    </div>
    <Intro />
  </section>

  <div className='main'>
    <AboutMe />
    <Areas />
    <Fees />
    <Contact /><br></br><br></br>
    <footer className='footer'>
      <a href="https://thomascroot.com">Website by Tommy Croot</a>
    </footer>
  </div>
</>
    
  )
}

export default App
