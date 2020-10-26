import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import {useLanguage} from '../../utils/LngContext'

function ContactBar() {
    const activeLanguage = useLanguage();
  return (
    <ul className="list-socials">
        <li className="icon">
            <a 
            className="github" 
            href="https://github.com/Zerrtry" 
            rel="noopener noreferrer" 
            target="_blank" 
            title="GitHub">
                <i className="fab fa-github-square" aria-hidden="true"></i>
            </a>
        </li>
        <li className="icon">
            <a 
            className="linkedin" 
            href="https://www.linkedin.com/in/dmitrii-zverev-577957b7/" 
            rel="noopener noreferrer" 
            target="_blank" 
            title="LinkedIn">
                <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
        </li>
        <li className="icon">
            {/* <a  */}
            <Link to="/contact"
            className="contact-me" 
            // href="/contact" 
            // rel="noopener noreferrer" 
            // target="_blank" 
            title={activeLanguage.contactMe}>
                <i class="fas fa-envelope-square" aria-hidden="true"></i>
            {/* </a> */}</Link>
        </li>
    </ul> 
  );
}

export default ContactBar;