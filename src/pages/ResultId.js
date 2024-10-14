import React from 'react';
import './Style.css'; // CSS 파일을 import
import { Link, useLocation } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';
import Header from "./Header";
import HeaderBFLogin from "./HeaderBFLogin";

function FindIdResult() {
    const location = useLocation();
    const username = location.state?.username;

    if (!username) {
        return <div>Error: username not found</div>;
    }

    return (
        <div id="body">
            <div className="no-mobile">모바일 버전으로 변경해주세요.</div>
            <div className="mobile">
                <HeaderBFLogin />
                <div id="result">
                    휴대폰 번호와 일치하는 아이디입니다.
                </div>
                <div id="resultId">
                    <div>아이디: {username}</div>
                </div>
                <div className="btn">
                    <Link to="/login">확인</Link>
                    <Link to="/newPassword">비밀번호 재설정</Link>
                </div>
            </div>
        </div>
    );
}

export default FindIdResult;