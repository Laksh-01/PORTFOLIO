import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import HeroImg2 from '../components/HeroImg2.js'
import Form from'../components/Form.js'
const Contact = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading = "CONTACT" text = "Lets connect!!"></HeroImg2>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}

export default Contact