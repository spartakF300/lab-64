import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
         <button onClick={props.onclick} className={props.imgIcon + ' ' + props.class}>{props.children}</button>
    );
};

export default Button;