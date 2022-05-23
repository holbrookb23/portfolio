import React from 'react';
import { Link } from "react-router-dom";
import './nav.css'




function Nav() {
  return (
    <nav class="s">
        
        <div class="box">
            <Link className="links nav-sm" to="/">About Me</Link>
            <Link className="links nav-sm" to="/projects">My Work</Link>
            <Link className="links nav-sm" to="/contact">Contact Me</Link>
            <Link className='links nav-sm' to="/resume">Resume</Link>.
            
        </div>
    </nav>
  );
}

export default Nav;