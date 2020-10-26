import React from "react";
import "./style.css";

function Card(props) {
  return (
    // <li>
      <div className="card" key={props.name}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
          <div className="projects-name">
            <strong>{props.name}</strong> 
          </div>  
        </div>
        <div className="content">
          {/* <ul>
            <li>
              
            </li>
            <li>
              <a className="main-button" href={props.github} rel="noopener noreferrer" target="_blank"><strong>Github:</strong></a> 
            </li>
            <li>
              <a className="main-button" 
                href={props.deployed} 
                rel="noopener noreferrer" 
                target="_blank">
                  <strong>Visit Website</strong>
              </a> 
            </li>
          </ul> */}
        </div>
      </div>
    // </li>
  );
}

export default Card;
