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
        <span> <i className="fab fa-js" title="JavaScript"></i> </span>
        &amp;&amp; 
        <span> <i className="fab fa-react" title="React.js"></i> </span> 
        &amp;&amp;
        <span> <i className="fab fa-node" title="Node.js"></i> </span>
        and some other libraries and frameworks. 
        I'm constantly seeking to further develop my programming skills and gain experience.
        {/* Having working experience as a lawyer in pharmaceutical, handling, and insurance companies help me to contribute problem-solving and decision-making skills to complete successful end-to-end projects. */}
        </div>
    </div>
  );
}

export default About;