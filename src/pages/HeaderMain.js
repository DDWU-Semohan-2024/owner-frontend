import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import logoImage from '../img/newLogo-removebg-preview.png';
import profile from '../img/profile-user.png';
import logout from '../img/logout.png';
import axios from "axios";

function Header() {

    const handleLogout = async () => {
        try {
            await axios.post('/auth/sign-out');
            window.location.href = '/login';
        } catch (error) {
            console.error('There was an error logging out!', error);
        }
    };

    return (
        <header>
            <Link to="/login" onClick={handleLogout}>
                <img className="headerImg1" src={logout} alt="profile" style={{cursor: 'pointer' }}/>
            </Link>
            <Link to="/main">
                <img className="headerImg" src={logoImage} alt="logo" style={{cursor: 'pointer' }}/>
            </Link>
            <Link to="/myInfo">
                <img className="headerImg1" src={profile} alt="myInfo" style={{ cursor: 'pointer' }}/>
            </Link>
        </header>
    );
}

export default Header;
