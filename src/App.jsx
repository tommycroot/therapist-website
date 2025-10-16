import { useState } from 'react'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import Areas from './components/Areas'
import Fees from './components/Fees'
import './App.css'
import './styles/navbar.css'
import './styles/intro.css'
import './styles/main.css'
import './styles/about.css'
import './styles/areas.css'
import './styles/fees.css'



function App() {


  return (
    <>
      <div className='home'>
        <NavBar />
        <p className='hero'>Abingdon Therapy</p>
      </div>
      <div className='main'>
        <Intro />
        <AboutMe />
        <Areas />
        <Fees />
      </div>
    </>
  )
}

export default App
