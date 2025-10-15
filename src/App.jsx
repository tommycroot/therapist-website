import { useState } from 'react'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import AboutMe from './components/AboutMe'
import './App.css'
import './styles/navbar.css'
import './styles/intro.css'
import './styles/main.css'
import './styles/about.css'



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
      </div>
    </>
  )
}

export default App
