import React from 'react';
import './style.css';

function About() {
  return (
    <div className="main-text">
        <div className="greeting"> 
        Hi, I'm Dmitrii.
        </div>
        <div className="summary">
        I'm a motivated Full Stack Web Developer with a Certificate from Northwestern University School of Professional Studies. 
        My experience includes building Web applications with 
        <span name="JavaScript"> <i className="fab fa-js" title="JavaScript"></i> </span>
        &amp;&amp; 
        <span name="React"> <i className="fab fa-react" title="React.js"></i> </span> 
        &amp;&amp;
        <span name="Node"> <i className="fab fa-node" title="Node.js"></i> </span>
        and some other libraries and frameworks. 
        I'm constantly seeking to further develop my programming skills and gain experience. I want to help bring ideas to life for serving people.
          <div className="tech-list">
            Here are some of technologies I'm familiar with.
            <ul className="dev-icons">
              <li className="software-skill-inline" name="html-5">
                <i className="fab fa-html5"></i>
                <div>html-5</div>
              </li>
              <li className="software-skill-inline" name="css3">
                <i className="fab fa-css3-alt"></i>
                <div>css3</div>
              </li>
              <li className="software-skill-inline" name="css3">
                <i className="fab fa-js"></i>
                <div>JavaScript</div>
              </li>
              <li className="software-skill-inline" name="reactjs">
                <i className="fab fa-react"></i>
                <div>reactjs</div>
              </li>
              <li className="software-skill-inline" name="nodejs">
                <i className="fab fa-node"></i>
                <div>nodejs</div>
              </li>
              <li className="software-skill-inline" name="npm">
                <i className="fab fa-npm"></i>
                <div>npm</div>
              </li>
              <li className="software-skill-inline" name="swift">
                <i className="fas fa-database mng"></i>
                <div>mongoDB</div>
              </li>
              <li className="software-skill-inline" name="swift">
                <i className="fas fa-database"></i>
                <div>MySQL</div>
              </li>
              <li className="software-skill-inline" name="aws">
                <i className="fab fa-aws"></i>
                <div>aws</div>
              </li>  
              <li className="software-skill-inline" name="JavaScript">
                <i className="fab fa-github"></i>
                <div>GitHub</div>
              </li>
            </ul>
          </div>

        </div>
    </div>
  );
}

export default About;