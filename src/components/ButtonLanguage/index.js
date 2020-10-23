import React from 'react';
import { useLanguageTggl } from "../../utils/LngContext";

function ButtonToggleLang (props) {
    
    const toggleLanguage = useLanguageTggl()

    return (
        <div 
            data-txt={props.value}
            className={props.class} 
            onClick={toggleLanguage}>
            {props.children}
        </div>
    )
}

export default ButtonToggleLang