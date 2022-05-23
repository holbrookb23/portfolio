import React from 'react';
import Project from './../components/Project'
import './project.css';


function Work(array) {
  return (
    <div className="card-container" id="projects">
        <h3 className="ta-c">Projects</h3>
        <div className='d d-sm'>
          <Project array={0}/>
          <Project array={1}/>
          <Project array={2}/>
          <Project array={3}/>
          <Project array={4}/>
          <Project array={5}/>
        </div>
    </div>
  );
}

export default Work;