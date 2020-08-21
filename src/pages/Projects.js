import React, { Component } from "react";
import Card from "../components/Card";
import projects from "../projects.json"
import Wrapper from "../components/Wrapper";

class Projects extends Component {
  state = {
   projects
  };

  render() {
    return (
      <div >
        <h2 className="text-center">Projects</h2>
        {/* <div className="wrapper"> */}
        <Wrapper>
          {this.state.projects.map(project => (
            <Card
            id={project.id}
            key={project.id}
            name={project.name}
            image={project.image}
            github={project.github}
            deployed={project.deployed}
            />
            ))}
        </Wrapper>
        {/* </div> */}
      </div>
    );
  }
}

export default Projects;
