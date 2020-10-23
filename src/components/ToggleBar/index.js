import React from 'react';
import {useLanguage} from '../../utils/LngContext'

import './style.css';

function ToggleBar(props) {
  const activeLanguage = useLanguage()
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button 
          className="toggle" 
          id="sidebarCollapse" 
          title={activeLanguage.projects} 
          onClick={props.toggleSideBar}>
          <i className="fas fa-folder-open"></i>
        </button>
      </div>
    </nav>
  );
}

export default ToggleBar;