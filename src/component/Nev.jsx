import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './nav.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="container-x">
                <Link to="home" className="navbar-brand" spy={true} smooth={true} offset={-70} duration={100}>
                    <span className="brand-name">🌟Priyanka Diwakar🌟</span>
                </Link>
                <button className="navbar-toggler" id="navbar-toggler" onClick={handleToggle}>
                    <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
                <div className={`navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={100} onClick={handleLinkClick}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={100} onClick={handleLinkClick}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={100} onClick={handleLinkClick}>Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="project" spy={true} smooth={true} offset={-70} duration={100} onClick={handleLinkClick}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={100} onClick={handleLinkClick}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;