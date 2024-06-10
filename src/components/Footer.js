import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'


function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff" ,marginRight:"2rem"}} ></FaHome>
                    <div><p>Vikas Puri </p><p>New Delhi</p></div>        
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff" ,marginRight:"2rem"}}></FaPhone> +91-9540543761 </h4>
                </div>
                <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff" ,marginRight:"2rem"}}></FaMailBulk>dev01laksh@gmail.com </h4>
                </div>
           </div>

           <div className="right">
            <h4>About Me</h4>
            <p>Hi! Welcome to my portfolio </p>
            <div className="social">
                <a href="https://github.com/Laksh-01"><FaGithub size={30} style = {{color:"$ff" , marginRight:"1rem" }}></FaGithub></a>
                <a href="https://www.linkedin.com/in/lakshsachdeva/"><FaLinkedin size={30} style = {{color:"$ff" , marginRight:"1rem"}}></FaLinkedin></a>
                <a href="https://x.com/LakshSachdeva01"><FaTwitter size={30} style = {{color:"$ff" , marginRight:"1rem"}}></FaTwitter></a>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Footer