import React from 'react';
import './project.css';
import tots from './../img/projects/scottTots.png';
import weather from './../img/projects/weatherWeek2.png';
import quiz from './../img/projects/quizGame.png';
import shot from './../img/projects/bestShot.png';




function Project() {

  const projects = [
    {
        name: "Scott's Tots",
        deployed: "https://project-two-threeandalady.herokuapp.com/login",
        repo: "https://github.com/threemenandalady/project-two",
        img: tots,
        alt: "card for Scott's Tots",

    },
    {
        name: "Weather Week",
        deployed: "https://holbrookb23.github.io/weatherWeek/",
        repo: "https://github.com/holbrookb23/weatherWeek",
        img: weather,
        alt: "card for Weather Week",


    },
    {
        name: "Quiz Game",
        deployed: "https://holbrookb23.github.io/quizGame/",
        repo: "https://github.com/holbrookb23/quizGame",
        img: quiz,
        alt: "card for Quiz Game",

    },
  ]
  const projectstwo = [
    {
        name: "Best Shot",
        deployed: "https://thundercats-4ever.github.io/project/",
        repo: "https://github.com/thundercats-4ever/project",
        img: shot,
        alt: "card for Best Shot",

    },
    {
      name: "Best Shot",
      deployed: "https://thundercats-4ever.github.io/project/",
      repo: "https://github.com/thundercats-4ever/project",
      img: shot,
      alt: "card for Best Shot",

    },
    {
      name: "Best Shot",
      deployed: "https://thundercats-4ever.github.io/project/",
      repo: "https://github.com/thundercats-4ever/project",
      img: shot,
      alt: "card for Best Shot",

    },
]; 

  return (  
    <div class="card-container" id="projects">
      {projects.map((project) => (
        <div className='card'>
          <img src={project.img} alt={project.alt} className='img'/>
          <div className='card-banner'>
            <h4 className='t'>{project.name}</h4>
            <div className="cbc jc-se b-0">
              <button className="card-btn left"><a href={project.deployed} target="_blank" rel="noopener noreferrer" class="c-black td-n w-100">Link</a></button>  
              <button className="card-btn right"><a href={project.repo} target="_blank" rel="noopener noreferrer" class="c-black td-n w-100">Repo</a></button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
  );
}

export default Project;