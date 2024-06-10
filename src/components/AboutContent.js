import "./AboutContent.css"
import React from 'react'
import {Link} from "react-router-dom"
import p1 from "../assets/my main pic.jpg"

function AboutContent() {
  return (
    <div className="headingtop">
        <h1>SOMETHING ABOUT ME</h1>
    <div className="about">
        <div className="left">
            <p>As a dedicated Bachelor of Technology student at Netaji Subhas University of Technology, set to graduate in 2026, I am deeply passionate about a multifaceted array of technical pursuits. </p>
            <br></br>
            <p>Competitive coding serves as both a mental challenge and a creative outlet, allowing me to sharpen my problem-solving skills while exploring innovative algorithms and data structures. </p>
            <p>Hero are some of my coding profiles</p>
            <br></br>
            <Link to = "/codingProfiles">
            <button className="btn">Coding profiles</button>
            </Link>
            <br></br>
            <br></br>
        </div>

        <div className="middle">
            <p></p>
            <div className="img-container">
                <div className="img-stack top"> 
                    <img src={p1} alt="true" /> 
                </div>
                
            </div>
        </div>

        <div className="right">
            <p>My fascination with full-stack development drives me to create dynamic and impactful projects that integrate cutting-edge technologies across the stack, from frontend frameworks like React.js to backend technologies like Node.js and databases like MongoDB. This hands-on experience not only hones my technical proficiency but also instills in me a profound understanding of software engineering principles</p>
            <br></br>
            <p>Some of my recent projects</p>
            <Link to = "/project">
            <button className="btn button"> PROJECTS</button>
            </Link>
        </div>
    </div>
    <div className="Hobbies">
           
        </div>
        <div className="education">
            <p></p>
        </div>
    </div>
  )
}

export default AboutContent