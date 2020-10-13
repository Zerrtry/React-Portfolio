import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button'
import './style.css';

function ButtonsOnlend() {
  return (
    <div className="buttons-on-lend">
      <div>
        <Link to="/contact">
          <Button>CONTACT ME</Button>
        </Link>
      </div>
      <div>
        <a
          href="https://drive.google.com/file/d/1GP_UUsnWkarrLvDJSESGCXDuV57IQVkt/view?usp=sharing" 
          rel="noopener noreferrer" 
          target="_blank">
          <Button>
            MY RESUME 
          </Button>
        </a>
      </div>
    </div>
  );
}

export default ButtonsOnlend;