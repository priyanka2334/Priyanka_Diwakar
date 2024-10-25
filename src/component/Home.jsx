import React from 'react';
import './home.css';
import profileImage from '../images/priyanka (1).jpg';

function Home() {
  return (
    <div className="home-container" id="home">
      <div className="profile-section">
        {/* <img className="profile-img" src="../images/priyanka (1).jpg" alt="Profile" /> */}
        <img className="profile-img" src={profileImage} alt="Profile" />
        <div className="social-icons">
          <a href="https://github.com/priyanka2334" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/priyanka-diwakar-748a60314/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="priyankadiwakar2024@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="header-section">
        <h1 className="header-title">
          Hello <br />
          I'm <span className="highlight">Priyanka Diwakar</span>
        </h1>
        <p className="header-description">
        I'm a front-end web developer
        </p>
        <h2 className="header-subtitle">
        Welcome to my portfolio! This site, built with React, showcases my work as a web developer. I specialize in creating visually appealing and user-friendly
        </h2>
        <button className='Resumebtn'><a href="https://drive.google.com/file/d/1VvZvWAEZXzc8vO8VqOY5KJIjuzgTZv68/view?usp=drive_link">Resume Uplode</a></button>
      </div>
    </div>
    
    
  );
}

export default Home;