import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import logoImage from '../img/semohan-logo.png';

function Header() {
    return (
        <header>
            <Link to="/main">
                <img src={logoImage} alt="logo" />
            </Link>
        </header>
    );
}

export default Header;
