import "./HandlesStyles.css";
import pro1 from '../assets/pro1.jpeg';
import React, { useEffect, useRef } from 'react';
import { FaGithub , FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Handles() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    // Cleanup function to disconnect the observer when component unmounts
    return () => {
      hiddenElements.forEach(el => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <section className="hidden">
      <h2 >Lets Connect !!</h2>
      <div className="logos">
        <div className="logo hidden">
        <a href="https://www.linkedin.com/in/lakshsachdeva/"><FaLinkedin size={90} style = {{color:"#0077B5" , margin:"1rem"}}></FaLinkedin></a>
        </div>
        <div className="logo hidden">
        <a href="https://github.com/Laksh-01"><FaGithub size={90} style = {{color:"#171515" , margin:"1rem" }}></FaGithub></a>
        </div>
        <div className="logo hidden">
        <a href="https://x.com/LakshSachdeva01"><FaXTwitter size={90} style = {{color:"$ff" , margin:"1rem"}}></FaXTwitter></a>
        </div>
        
      </div>
    </section>
  );
}

export default Handles;
