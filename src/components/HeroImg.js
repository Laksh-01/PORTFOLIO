import "./HeroImgStyles.css"
import React from 'react'
import aa from  '../assets/aa.jpg'
import { Link } from "react-router-dom"
function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={aa} alt="IntoImage"></img>
        </div>
        <div className="content">
            <p>Hi!! I am a developer</p>
            <h1>React Developer</h1>
            <div>
                <Link to ="/project" className="btn"> Projects</Link>
                <Link to ="/contact" className="btn btn-light"> Contact</Link>
                
            </div>
        </div>
    </div>
  )
}

export default HeroImg