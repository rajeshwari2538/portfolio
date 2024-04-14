import React from 'react'
import About from './About'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'

const Body = () => {
  return (
        <div className="content-wrapper">
            <Home />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </div>
  )
}

export default Body