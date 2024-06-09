import React from 'react';
import './Style.css'; // CSS 파일을 import
import { Link, } from 'react-router-dom';
import axios from 'axios';
import logoImage from '../img/semohan-logo.png';

axios.defaults.withCredentials = true;

function Main() {

    const handleLogout = async () => {
        try {
            await axios.post('/auth/sign-out');
            window.location.href = '/login';
        } catch (error) {
            console.error('There was an error logging out!', error);
        }
    };

    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo"/>
            </header>
            <div className="mainLink">
                <Link className="gray" to="/myInfo">나의 정보</Link>
                <Link className="gray" to="/restaurantInfo">식당 정보</Link>
                <Link className="lemon" to="/viewMenu">메뉴 등록</Link>

                <Link className="gray" to="/">비즈니스</Link>
                <Link className="gray" onClick={handleLogout}>로그아웃</Link>

            </div>
        </div>
    );
}

export default Main;
