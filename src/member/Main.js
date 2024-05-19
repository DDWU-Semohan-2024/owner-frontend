import React from 'react';
import './Style.css'; // CSS 파일을 import
import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';

function Main() {
    // 버튼 클릭 시 동작을 정의하는 함수
    const handleMyInfoClick = () => {
        // 버튼을 클릭했을 때 할 작업을 여기에 추가
        // 예를 들어, 페이지를 이동할 수 있습니다.
        // 예: history.push('/my-info-page');
    };

    const handleRestaurantInfoClick = () => {
        // 버튼을 클릭했을 때 할 작업을 여기에 추가
    };

    const handleMenuRegistrationClick = () => {
        // 버튼을 클릭했을 때 할 작업을 여기에 추가
    };

    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo"/>
            </header>
            <div id="main">
            {/* 버튼 클릭 시 동작을 정의한 함수를 onClick 이벤트로 추가 */}
                <button className="gray" onClick={handleMyInfoClick}>나의 정보</button>
                <button className="gray" onClick={handleRestaurantInfoClick}>식당 정보</button>
                <button className="lemon" onClick={handleMenuRegistrationClick}>메뉴 등록</button>
                <button className="gray">비즈니스</button>
            </div>
        </div>
    );
}

export default Main;
