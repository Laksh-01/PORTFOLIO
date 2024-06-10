import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import HeroImg2 from '../components/HeroImg2.js'
import Work from '../components/Work.js'
function Project() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2  heading = "PROJECTS" text = "Some of my most recent works"></HeroImg2>
      <Work></Work>
      <Footer></Footer>
    </div>
    
  )
}

export default Project