import React from "react";
import "./index.css"
import Home from "./routes/Home.js"
import Project from "./routes/Project.js"
import Contact from "./routes/Contact.js"
import About from "./routes/About.js"
import Resume from "./routes/Resume.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
       <Route path='/myResume'  element = {<Resume></Resume>}/> 
        <Route path='/'  element = {<Home></Home>}/> 
        <Route path='/about'  element = {<About></About>}/> 
        <Route path='/contact'  element = {<Contact></Contact>}/> 
        <Route path='/project'  element = {<Project></Project>}/> 
    </Routes>
    </>
  );
}

export default App;
