import React from 'react';
import './style.css';

function ContactBar() {
  return (
    <ul className="list-socials">
        <li className="icon">
            <a className="github" href="https://github.com/Zerrtry" rel="noopener noreferrer" target="_blank" title="GitHub">
                <i className="fab fa-github-square"  aria-hidden="true"></i>
            </a>
        </li>
        <li className="icon">
            <a className="linkedin" href="https://www.linkedin.com/in/dmitrii-zverev-577957b7/" rel="noopener noreferrer" target="_blank" title="LinkedIn">
                <i className="fab fa-linkedin"  aria-hidden="true"></i>
            </a>
        </li>
        <li className="icon">
            <a className="stack-overflow" href="https://stackoverflow.com/users/12950229/dmitrii" rel="noopener noreferrer" target="_blank" title="Stack-Overflow">
                <i className="fab fa-stack-overflow" aria-hidden="true"></i>
            </a>
        </li>
    </ul> 
  );
}

export default ContactBar;