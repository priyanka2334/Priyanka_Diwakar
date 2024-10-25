import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import { FaSomeIcon } from 'react-icons/fa';

import "./about.css";


const About = () => {
    return (
        <div>
            <h1 className="about">About</h1>
            {/* <FaSomeIcon/> */}
            <h3>🌟 Passionate Web Developer Creating Engaging Experiences🌟</h3>
            <div className="box2" id="box2">
                <h1 className="h-about">About</h1>
                <div className="coding-img">
                    <div className="men-mig">
                        <img className="coding" src="https://static.vecteezy.com/system/resources/thumbnails/010/794/166/small_2x/3d-deadline-and-multitask-concept-productive-master-productivity-and-project-management-skill-multitasking-work-and-time-management-concept-skillful-businessman-3d-rendering-png.png" alt="Programmer" />
                    </div>
                    <div className="men">
                        <p>
                        Hi, I'm Priyanka Diwakar, a front-end web developer from Kanpur, specializing in React.js, JavaScript, Python, C programming,
                         HTML, and CSS, with a strong foundation in web development. I hold a Software Engineering diploma from Navgurukul and have hands-on
                          experience in building responsive, user-friendly web applications. My passion lies in solving complex problems, continuously learning 
                          new technologies, and working on innovative projects that make a difference. Outside of work, I find joy in cooking and traveling, 
                          activities that fuel my creativity and inspiration. I am eager to join a dynamic team where I can continue to grow, contribute, 
                          and make a positive impact.
                            </p>
                    </div>
                </div>
                {/* Skills Section */}
                <div className="skills-section">
                    {/* <h3>Skills</h3> */}
                    <div className="skills-icons">
                        <FaReact className="skill-icon" title="React.js" />
                        <FaNodeJs className="skill-icon" title="Node.js" />
                        <FaHtml5 className="skill-icon" title="HTML5" />
                        <FaCss3Alt className="skill-icon" title="CSS3" />
                        <FaJs className="skill-icon" title="JavaScript" />
                    </div>
                </div>
                {/* CTA Button */}
                <button className="cta-button">View</button>
                
            </div>
        </div>
    );
};

export default About;