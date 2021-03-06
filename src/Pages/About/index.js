import React from 'react';
import './style.css';
import {useLanguage} from '../../utils/LngContext'
import ContactBar from '../../components/ContactBar';
import ButtonsOnlend from '../../components/Buttons-on-lend';

function About() {
  const activeLanguage = useLanguage()
  return (
    <div className="content-conteiner">
      <div className="main-text">
        <div className="greeting"> 
        {activeLanguage.grettingTitle}
        </div>
        <div className="summary">
          <p>{activeLanguage.about1st}
            <span name="bootstrap"> <i className="fab fa-bootstrap" title="bootstrap"></i> </span>
            &amp;&amp; 
            <span name="React"> <i className="fab fa-react" title="React.js"></i> </span> 
            &amp;&amp;
            <span name="Node"> <i className="fab fa-node" title="Node.js"></i> </span>
            {activeLanguage.about2nd}
          </p>
          <p>{activeLanguage.about3nd}</p>
          <div className="tech-list">
            {activeLanguage.skillset}
            <ul className="dev-icons">
              <li className="software-skill-inline" name="css3">
                <i className="fab fa-css3-alt"></i>
                <div>css3</div>
              </li>
              <li className="software-skill-inline" name="html-5">
                <i className="fab fa-html5"></i>
                <div>html5</div>
              </li>
              <li className="software-skill-inline" name="bootstrap">
                <i class="fab fa-bootstrap"></i>
                <div>bootstrap</div>
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
      <ButtonsOnlend/>
      <div className="contacts-hidden">
        <ContactBar/>
      </div>
    </div>
  );
}

export default About;