import React from 'react';
import './style.css';

function ToggleBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button className="btn toggle" id="sidebarCollapse" title="Projects">
          <i className="fas fa-folder-open"></i>
        </button>
      </div>
    </nav>
  );
}

export default ToggleBar;