import React from 'react';
import './Style.css'; // CSS 파일을 import
import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';
import Header from "./Header";

function GeneratePassword() {
    return (
        <div id="body">
            <Header />
            <div id="result">
                임시 비밀번호가 발급되었습니다.
            </div>
            <div className="btn">
                <Link to="/login">확인</Link>
            </div>
        </div>
    );
}

export default GeneratePassword;
