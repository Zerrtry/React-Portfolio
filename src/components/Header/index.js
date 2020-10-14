import React from 'react';
import { Link } from "react-router-dom";
import './style.css';

function Header() {
  return (
    <div className="row justify-content-center">
        <div className="col-sm">
            <div className="header">
                <div className="name">
                    <Link to="/" title="Home">
                        <div className="toggle-lang" >
                            <span> 	&lt; </span>  
                                Dmitrii Zverev 
                            <span> &gt;</span>
                        </div>
                    </Link>        
                </div>
                <div className="langToggle">
                    <ul className="switch-lang hidden-sm-down">
                        <li>
                            <a className="toggle-lang active-ln" href="#">
                                <span className="latter-ln">EN</span>
                            </a>
                        </li>
                        <li className="splitter">||</li>
                        <li>
                            <a className="toggle-lang disactive-ln" href="#">
                                <span className="latter-ln">RU</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
