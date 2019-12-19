import React from 'react';
import './Textarea.css'

const Textarea = (props) => {
    return (
        <textarea
            onChange={props.getMessage}
            placeholder='Enter message post:'
            className='message'
            rows="15"
            name={'text'}
        />
    );
};

export default Textarea;