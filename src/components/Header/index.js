import React from 'react';
import './style.css';

function Header() {
  return (
    <div className="row flex-fill d-flex justify-content-center">
        <div className="col-sm">
            <div className="topBar">
                <div className="name">
                    <span> 	&lt; </span>  
                        Dmitrii Zverev 
                    <span> /&gt;</span>    
                </div>
                <div className="langToggle">
                    <ul className="switch-lang hidden-sm-down">
                        <li className="active">EN</li>
                        <li>||</li>
                        <li className="active">RU</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
