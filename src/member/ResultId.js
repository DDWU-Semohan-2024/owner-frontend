import React from 'react';
import './Style.css'; // CSS 파일을 import
import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';

function FindIdResult() {
    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo"/>
            </header>
            <div id="result">
            휴대폰 번호와 일치하는 아이디입니다.
            </div>
            <div id="resultId">
                <div className="text">아이디: semohan123</div>
                <div className="text">가입일: 2024.04.01</div>
            </div>
            <div className="btn">
                <a href="./login.html">확인</a>
                <a href="./newPassword.html">비밀번호 재설정</a>
            </div>
        </div>
    );
}

export default FindIdResult;
