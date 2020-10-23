import React  from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import ButtonToggleLang from '../ButtonLanguage';
import { useLanguage } from '../../utils/LngContext'

function Header() {
    const activeLanguage = useLanguage()
    return (
        <div className="row justify-content-center">
            <div className="col-sm">
                <div className="header">
                    <div className="name">
                        <div className="toggle-head" >
                            <Link to="/" title={activeLanguage.Home}>
                                <span> 	&lt; </span>  
                                {activeLanguage.name} 
                                <span> 	&#47;&gt;</span>
                            </Link>  
                        </div>      
                    </div>
                    <div className="langToggle">
                        <ul className="lang-list hidden-sm-down">
                            <li className={activeLanguage.language==="EN"?"toggle-head active-lng":"toggle-head disactive-lang"}>
                                <ButtonToggleLang value='EN' >{activeLanguage.enAbbriviation}</ButtonToggleLang>
                            </li>
                            <li className="splitter">||</li>
                            <li className={activeLanguage.language==="RU"?"toggle-head active-lng":"toggle-head disactive-lang"}>
                                <ButtonToggleLang value='RU' >{activeLanguage.ruAbbriviation}</ButtonToggleLang>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
