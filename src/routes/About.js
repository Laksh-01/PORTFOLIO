import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import HeroImg2 from '../components/HeroImg2.js'
import AboutContent from '../components/AboutContent.js'

function About() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading = "ABOUT ME" text = "I am a friendly full-stack developer"></HeroImg2>
      <AboutContent></AboutContent>
      <Footer></Footer>
    </div>
  )
}

export default About