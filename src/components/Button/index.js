import React from 'react';
import './style.css';

function Button(props) {
    return (
        <div className="main-button" {...props}>
            {props.children}
        </div>

    );
}

export default Button;