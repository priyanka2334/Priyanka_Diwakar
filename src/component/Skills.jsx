import React from 'react';
import './skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <h3>🌟 Skills in web development, design, and problem-solving 🌟</h3>
      <div className="img-box">
        <div className="image9" data-tooltip="HTML: The standard language for creating web pages">
          <img src="https://i.ibb.co/QNtK3FW/asset-0.png" className="short-img" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="image9" data-tooltip=" JavaScript: Programming language for web development">
          <img src="https://i.ibb.co/y4RZ6SB/asset-3.png" className="short-img" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="image9" data-tooltip="CSS: Style sheet language for designing web pages">
          <img src="https://i.ibb.co/9s7t5W6/asset-4.png" className="short-img" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="image9" data-tooltip="React.js: Library for building user interfaces">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="short-img" alt="React.js" />
          <p>React.js</p>
        </div>
        <div className="image9" data-tooltip="C: General-purpose programming language">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25oYJlp2wL_GAT2FOKBaOlCt1fbn56-hXDg&s" className="short-img" alt="C" />
          <p>C</p>
        </div>
        <div className="image9" data-tooltip="Python: High-level programming language for general-purpose programming">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJBwDlNrMq5Wj_l-vGaNPgVONr-Zvoh_kZQ&s" className="short-img" alt="Python" />
          <p>Python</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;