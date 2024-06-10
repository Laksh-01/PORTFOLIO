import React from 'react'
import Navbar from '../components/Navbar.js'
import HeroImg from '../components/HeroImg.js'
import Footer from '../components/Footer.js'
import Project from '../components/Work.js'
import Handles from '../components/Handles.js'
function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <HeroImg></HeroImg>
        <Project></Project>
        <Handles></Handles>
        <Footer></Footer>
    </div>
  )
}

export default Home