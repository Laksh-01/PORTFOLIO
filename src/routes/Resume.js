import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import HeroImg2 from '../components/HeroImg2'
import Hero_Resume from '../components/Hero_Resume.js'
function Resume() {
  return (
    <div>
        <Navbar></Navbar>
        <HeroImg2 heading="Resume" text= "this is my resume"></HeroImg2>
        <Hero_Resume></Hero_Resume>
        <Footer></Footer>
    </div>
  )
}

export default Resume