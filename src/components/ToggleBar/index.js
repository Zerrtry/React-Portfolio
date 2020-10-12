import React from 'react';

import './style.css';

function ToggleBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button 
          className="toggle" 
          id="sidebarCollapse" 
          title="Projects" 
          onClick={props.toggleSideBar}>
          <i className="fas fa-folder-open"></i>
        </button>
      </div>
    </nav>
  );
}

export default ToggleBar;