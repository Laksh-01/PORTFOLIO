import "./WorkCard.css"
import React from 'react'
import pro1 from "../assets/pro1.jpeg";
import { NavLink } from "react-router-dom";
import "./WorkCard.css"
import WorkCardData from "../components/WorkCardData.js"
import WorkCard from "./WorkCard.js";

function Work() {
  return (
  
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {/* <div className="project-card"> */}
                    {WorkCardData.map((value,index) => {
                        return (
                            <WorkCard
                            key ={index}
                            imgsrc ={value.imgsrc}
                            title = {value.title}
                            text = {value.text}
                            view = {value.view} />
                        )
                    })}
                {/* </div> */}
            </div>
        </div>
    
)
}

export default Work