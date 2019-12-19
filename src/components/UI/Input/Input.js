import React from 'react';
import './Input.css'

const Input = (props) => {
    return (
        <input
            onChange={props.getTitle}
            placeholder='Enter title post:'
            className="title-input"
            type="text"
            name={'title'}
        />
    );
};

export default Input;