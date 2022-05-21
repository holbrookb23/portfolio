import React from 'react';
import linked from './../img/icons/linkedin-48.png'
import github from './../img/icons/github-48.png'
import './footer.css'



function Footer() {
  return (
    <footer class="footer"><p>Thanks for visiting. Check out my other pages!</p><a href="https://www.linkedin.com/in/brian-holbrook-550225226" target="_blank" rel="noopener noreferrer"><span data-text="Linkedin" class="tooltip"><img src={linked} alt="Linkedin logo"/></span></a>
    <a href="https://github.com/holbrookb23" target="_blank" rel="noopener noreferrer"><span data-text="Github" class="tooltip"><img src={github} alt="Github Logo"/></span></a></footer>
  );
}

export default Footer;