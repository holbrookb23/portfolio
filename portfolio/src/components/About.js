import React from 'react';
import './about.css';
import me from './../img/portfolio.jpg';



function About() {
  return (
    <section className="container" id="aboutme">
        <div className="title">
            <div className="ws-nw pt-6@lrg">
                <h1 className="fz-1 fz-1@lrg">Hi, I'm Brian</h1>
            </div>
            <div className="ws-nw pt-2@lrg">
                <img src={me} className="pic" alt="me in a blue dress shirt"/>
            </div>
            <div className="ws-nw pl-2@lrg pt-1@lrg">
                <h2 className="fz-2@lrg">Full Stack Web Developer</h2>
            </div>
        </div>
        <p className="par">New to web development, I am excited to branch into a new career path. I first started learning app
                development less than a year ago, but realized I should go to school to get more in-depth fundamentals of learning a coding language.
                So, I'm currently a student at Northwestern's web development bootcamp where I am learning the skills of html, css, and javascript.
                this journey has been nothing but incredible through out and I would love to keep building my skils at your company next.
                
                
        </p>
        
    </section>
  );
}

export default About;