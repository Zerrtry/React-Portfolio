import React from 'react';
import { Link } from 'react-router-dom';
import {useLanguage} from '../../utils/LngContext'

import './style.css';

function ToggleBar(props) {
  const activeLanguage = useLanguage()
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/projects">
          <button 
            className="toggle" 
            title={activeLanguage.projects} >
            {/* onClick={props.toggleSideBar}> */}
            <i className="fas fa-folder-open"></i>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default ToggleBar;