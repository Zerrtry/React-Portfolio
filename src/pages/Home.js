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
            I am Dmitrii Zverev, welcome to my portfolio page. If you have any reason to Contact Me, please be sure to do it.

            After 18 years as a lawyer, I decided to try something new. I have started to learn web-developing at the Northwestern Coding Boot Camp without previous experience in software. However, technic has been interesting for me always. Even in childhood, my favorite magazines were about building scale models and other entertaining topics related to technology. I'm expecting to get professional into programming and learn as much as possible about it!
            </p>
            <a href="https://docs.google.com/document/d/1DS2DIkUIm5BBt7SLdHHnEHezM81L-nASURQsF62X2Lg/edit?usp=sharing" target="_blank">Resume</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
