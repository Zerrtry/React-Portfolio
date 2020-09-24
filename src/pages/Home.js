import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
;

function Home() {
  return (
    <div>
      <Hero/>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
            I am Dmitrii Zverev, a Full-Stack Web Developer. Welcome to my portfolio page. Please contact me for full-stack web development projects.
 
After 18 years as a lawyer, I decided to try something new. I started to learn web-development even though I had no previous experience in software. I have recently completed an intense 24-week Full-Stack Coding Bootcamp from Northwestern University,. However, science and technology has always interested me. Even in childhood, my favorite magazines were about building scale models and other entertaining topics related to technology. I'm excited to get professionally into programming and want to work, learn and grow in this field.
            </p>
            <a href="https://docs.google.com/document/d/1DS2DIkUIm5BBt7SLdHHnEHezM81L-nASURQsF62X2Lg/edit?usp=sharing" target="_blank">Resume</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
