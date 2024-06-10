import "./WorkCard.css"
import React from 'react'
import pro1 from "../assets/pro1.jpeg";
import { NavLink } from "react-router-dom";
function WorkCard(props) {
  return (
          <div className="project-card">
                <img src={props.imgsrc} alt="image"></img>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to = {props.view} className="btn">View</NavLink>
                        <NavLink to = "url.com" className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
      
  )
}

export default WorkCard