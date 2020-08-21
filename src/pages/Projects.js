import React, { Component } from "react";
import Card from "../components/Card";
import projects from "../projects.json"
// import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

class Projects extends Component {
  state = {
   projects
  };

  render() {
    return (
      <div >
      <Container style={{ marginTop: 30 }}>
        <h2 className="text-center">Projects</h2>
        <Row>
          {/* <Col size="md-12"> */}
            {/* <div className="wrapper"> */}
            {/* <Wrapper> */}
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
           {/* </Col> */}
         </Row>
       </Container>
        {/* </Wrapper> */}
        {/* </div> */}
      </div>
    );
  }
}

export default Projects;
