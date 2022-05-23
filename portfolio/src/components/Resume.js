import React from 'react';
import './project.css'




function Resume() {
  const skills = [ "Javascript", "CSS", "HTML" ,"Node", "SQL", "Express", "Mongo", "React" ];
  const skillList = skills.map((skill) => <li>{skill}</li>)
  return (
    <div>
        <h3 className='ta-c'>Here is my <a href='https://docs.google.com/document/d/1u0dyHawwjq4EVO8eGyrZPfxg77ZUWn77Kg9iuzSNo4g/edit?usp=sharing'>Resume</a> </h3>
        <div >
          <h3 className='pl'>Skills:</h3>
          <ul>{skillList}</ul>
        </div>
    </div>
  );
}

export default Resume;