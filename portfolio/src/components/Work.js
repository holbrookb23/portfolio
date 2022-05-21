import React from 'react';
import Project from './../components/Project'
import './project.css';


function Work(stuff) {
  return (
    <div>
        <h3 class="ta-c">Projects</h3>
        <Project stuff={stuff}/>
        <Project stuff={stuff}/>
    </div>
  );
}

export default Work;