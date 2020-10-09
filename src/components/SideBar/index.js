import React from 'react';
import './style.css';

function SideBar(props) {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="active">Projects</div>
      </nav>
      <div id="content">
        {props.children}
      </div>
    </div>
  );
}

export default SideBar;
