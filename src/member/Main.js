import React from 'react';
import './Style.css'; // CSS 파일을 import
import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';

function Main() {

    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo"/>
            </header>
            <div id="main">
            {/* 버튼 클릭 시 동작을 정의한 함수를 onClick 이벤트로 추가 */}
                <Link className="gray" to="/myInfo">나의 정보</Link>
                <Link className="gray" to="/restaurantInfo">식당 정보</Link>
                <Link className="lemon" to="/registerMenu">메뉴 등록</Link>
                <Link className="gray" to="/">비즈니스</Link>
            </div>
        </div>
    );
}

export default Main;
