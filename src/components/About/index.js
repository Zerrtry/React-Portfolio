import React from 'react';
import './style.css';

function About() {
  return (
    <div className="greeting-main">
        <h1 className="greeting-text"> 
        Hi, I'm Dmitrii
        </h1>
        <p className="summary">
        I'm a motivated Full Stack Web Developer with a Certificate from Northwestern University School of Professional Studies - Full Stack Web Development Coding Boot Camp. 
        My experience includes building Web applications with 
        <span> <i className="fab fa-js" title="JavaScript"></i> </span>
        &amp;&amp; 
        <span> <i className="fab fa-react" title="React.js"></i> </span> 
        &amp;&amp;
        <span> <i className="fab fa-node" title="Node.js"></i> </span>
        and some other libraries and frameworks. 
        I'm constantly seeking to further develop my programming skills and gain experience.
        {/* Having working experience as a lawyer in pharmaceutical, handling, and insurance companies help me to contribute problem-solving and decision-making skills to complete successful end-to-end projects. */}
        </p>
    </div>
  );
}

export default About;