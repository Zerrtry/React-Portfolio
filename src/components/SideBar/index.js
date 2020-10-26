import React from 'react';
import './style.css';
import Card from '../Card';
import projects from '../../projects.json';
import {useLanguage} from '../../utils/LngContext'


function SideBar(props) {
  const activeLanguage = useLanguage()
  const visable = props.toggleState ? 'opened' : 'closed';
  const projectsObj = projects
  return (
    <div className="wrapper">
      <nav id="sidebar" className={visable}>
        <div className="sidebar-header">
          {/* <div >
            <span> 	&lt; </span>
              {activeLanguage.projects}
            <span> /&gt;</span>
          </div> */}
          <ul className="projects-list">
            <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" >            <span> 	&lt; </span>
              {activeLanguage.projects}
            <span> /&gt;</span></a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                {projectsObj.map(project => (
                  <li>
                    {project.name}
                    {/* <Card
                      key={project.id}
                      image={project.image}
                      name={project.name}
                      github={project.github}
                      deployed={project.deployed}
                    /> */}
                  </li>
                ))}
              </ul> 
            </li>
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
