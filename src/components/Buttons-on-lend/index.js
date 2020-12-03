import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button'
import './style.css';
import {useLanguage} from '../../utils/LngContext'

function ButtonsOnlend() {
  const activeLanguage = useLanguage()
  return (
    <div className="buttons-conteiner">
      <div>
        <Link to="/projects">
          <Button id="projects">
            {activeLanguage.projects}
          </Button>
        </Link>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/16sfB7qak8cMWsSVPpJR1cbVSN2dUptgZ/view?usp=sharing"
          rel="noopener noreferrer" 
          target="_blank">
          <Button>
            {activeLanguage.myResume} 
          </Button>
        </a>
      </div>
    </div>
  );
}

export default ButtonsOnlend;
