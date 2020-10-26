import React from "react";
import "./style.css";
import Card from '../../components/Card';
import projects from '../../projects.json';
import {useLanguage} from '../../utils/LngContext'
import Button from '../../components/Button'

function Projects() {
  const activeLanguage = useLanguage();
  const projectsObj = projects;
  return (
    <div className="content-conteiner">
      <div >
        <span> 	&lt; </span>
          {activeLanguage.projects}
        <span> /&gt;</span>
      </div>
      {/* <ul className="projects-list"> */}
      {projectsObj.map(project => (
          // <li>
          //   {project.name}
          //   <Card
          //     key={project.id}
          //     image={project.image}
          //     name={project.name}
          //     github={project.github}
          //     deployed={project.deployed}
          //   />
          // </li>
          <div className="row flex-fill d-flex justify-content-center">
            <div className="col-sm">
              <div class="flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <div className="projects-name">
                      <span>{project.name}</span>
                    </div>
                    <div className="projects-dicription">
                      <span>{project.discription}</span>
                    </div>
                  </div>
                  <div class="flip-card-back">
                    <div className="info-for-back">
                      {/* <div className="projects-name">
                        <span>{project.name}</span>
                      </div> */}
                      <div className="img-container">
                        <img alt={project.name} src={project.image} />
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>    
            <div className="col-sm">
              <table>
                <tr>
                  <td>Technologies:</td>
                  <td>{project.tech}</td>
                </tr>
                <div className="buttons-conteiner">
                  <Button>
                    <a
                    href={project.github} 
                    rel="noopener noreferrer" 
                    target="_blank">
                      <span>Github</span>
                    </a>
                  </Button>
                  <Button>
                    <a
                      href={project.deployed} 
                      rel="noopener noreferrer" 
                      target="_blank">
                        <span>WWW</span>
                    </a>
                  </Button>  
                </div>
              </table>
              
            </div>
          </div>
      ))}
      {/* </ul> */}
    </div>
  )
}
export default Projects
