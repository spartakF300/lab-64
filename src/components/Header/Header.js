import React from 'react';
import './Header.css'
import Button from "../../components/UI/Button/Button";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                    <div className='button-box'>
                    <Button imgIcon={'imgHome btn'}><NavLink className='link-item' to={'/'}>Home</NavLink></Button>
                    <Button imgIcon={'imgAdd btn'}><NavLink className='link-item' to={'/add'}>Add</NavLink></Button>
                    <Button imgIcon={'imgAbout btn'}><NavLink className='link-item' to={'/about'}>Edit</NavLink></Button>
                    <Button imgIcon={'imgContact btn'}><NavLink className='link-item' to={'contact'}>Contact</NavLink></Button>
                </div>
            </div>
        </div>
    );
};

export default Header;