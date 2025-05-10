import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Projects from './component/Projects'
import Contact from './component/Contact'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App
