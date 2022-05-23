import React from 'react';
import './project.css';
import tots from './../img/projects/scottTots.png';
import weather from './../img/projects/weatherWeek2.png';
import quiz from './../img/projects/quizGame.png';
import shot from './../img/projects/bestShot.png';
import talk from './../img/projects/techTalk.png'




function Project(props) {

  function showProject() {
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
      {
          name: "Best Shot",
          deployed: "https://thundercats-4ever.github.io/project/",
          repo: "https://github.com/thundercats-4ever/project",
          img: shot,
          alt: "card for Best Shot",
  
      },
      {
        name: "Tech Talk",
        deployed: "https://techtalkist.herokuapp.com/",
        repo: "https://github.com/holbrookb23/techTalk",
        img: talk,
        alt: "card for Tech Talk",
  
      },
      {
        name: "Letter Scramble",
        deployed: "",
        repo: "https://github.com/thundercats-4ever/project",
        img: null,
        alt: "img coming soon",
  
      },
  ]; 
     return <div className='card w-sm' >
      <img src={projects[props.array].img} alt={projects[props.array].alt} className="img"/>
      <div class="card-banner">
          <h4 class="t">{projects[props.array].name}</h4>
          <div class="cbc">
              <button class="card-btn left"><a href={projects[props.array].deployed} target="_blank" rel="noreferrer" class="l">Link</a></button>  
              <button class="card-btn right"><a href={projects[props.array].repo} target="_blank" rel="noreferrer" class="l">Repo</a></button>
          </div>
      </div>
      </div>
    
  }

  return (  
    <>
      {showProject()}
    </>
    
  );
}

export default Project;