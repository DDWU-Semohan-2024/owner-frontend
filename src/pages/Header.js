import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import logoImage from '../img/newLogo-removebg-preview.png';

function Header() {
    return (
        <header>
            <Link to="/main">
                <img src={logoImage} alt="logo" style={{ cursor: 'pointer' }}/>
            </Link>
        </header>
    );
}

export default Header;
