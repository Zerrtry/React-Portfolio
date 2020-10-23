import React from 'react';
import './style.css';
import Card from '../Card';
import projects from '../../projects.json';

function SideBar(props) {
  const visable = props.toggleState ? 'opened' : 'closed';
  const projectsObj = projects
  return (
    <div className="wrapper">
      <nav id="sidebar" className={visable}>
        <div className="sidebar-header">
          <div >
            <span> 	&lt; </span>
              Projects
            <span> /&gt;</span>
          </div>
          <ul className="projects-list">
            {projectsObj.map(project => (
              <Card
                key={project.id}
                image={project.image}
                name={project.name}
                github={project.github}
                deployed={project.deployed}
              />
            ))}
          </ul>  
        </div>
      </nav>
      <div id="content">
        <div className="container-fluid d-flex h-100 flex-column">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
