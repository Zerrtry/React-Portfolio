import React from "react";
import "./style.css";
import {useLanguage} from '../../utils/LngContext'
import Button from '../../components/Button'

function Projects() {
  const activeLanguage = useLanguage();
  const projectsObj = activeLanguage.projectsArr;
  return (
    <div className="content-conteiner">
      {projectsObj.map(project => (
        <div className="row d-flex align-items-center project">
          <div className="col-sm left-box">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <div className="projects-title">
                      <strong>{project.name}</strong>
                    </div>
                    <div className="projects-dicription">
                      <div>{project.discription}</div>
                    </div>
                  </div>
                <div class="flip-card-back">
                  <div className="info-for-back">
                    <div className="projects-title">
                      <strong>{project.name}</strong>
                    </div>
                    <div className="img-container">
                      <img alt={project.name} src={project.image} />
                    </div>
                  </div>  
                </div>
              </div>
            </div>
          </div>    
          <div className="col-sm right-box">
            <div className="tech-stack">
              <div className="title">
                <strong>Tech-stack:</strong>
              </div>
              <div className="info">
                <div>{project.tech}</div>
                <div className="buttons-conteiner">
                  <Button>
                    <a
                      href={project.github} 
                      rel="noopener noreferrer" 
                      target="_blank">
                      <span>GitHub</span>
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
              </div>  
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default Projects
