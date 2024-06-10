import React from 'react';
import MyResume from '../assets/Laksh_resume.pdf'; // Import your resume file
import './Hero_Resumestyles.css'

function Hero_Resume() {
    function downloadResume() {
        const link = document.createElement("a");
        link.href = MyResume; // Use the imported resume file
        link.download = "Laksh_resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className='resume'>
            <h1>Download my resume from here</h1>
            <button className='btn' onClick={downloadResume}>My resume</button>
        </div>
    );
}

export default Hero_Resume;
