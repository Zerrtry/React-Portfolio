import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function ButtonsOnlend() {
  return (
    <div className="buttons-on-lend">
        <div>
          <Link className="main-button"
            to="/contact"
          >
            CONTACT ME
          </Link>
        </div>
        <div>
            <a className="main-button" 
            href="https://drive.google.com/file/d/1GP_UUsnWkarrLvDJSESGCXDuV57IQVkt/view?usp=sharing" 
            rel="noopener noreferrer" 
            target="_blank">
              MY RESUME
            </a>
        </div>
    </div>
  );
}

export default ButtonsOnlend;