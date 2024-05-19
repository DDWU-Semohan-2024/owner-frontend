import React from 'react';
import './Style.css';
// import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';

function FindId() {

    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo"/>
            </header>
            <form id="findId" action="" method="post">
                <label htmlFor="phoneNum">휴대전화</label>
                <div>
                    <input className="blank" type="tel" name="phoneNum" id="phoneNum" autoComplete="tel"/>
                    <input className="button" type="button" value="인증번호"/>
                </div>
                <input className="blank" type="number" name="certificationNum" id="certificationNum"
                       autoComplete="one-time-code"/>
                <input className="button" type="submit" value="아이디 찾기"/>
            </form>
        </div>
    );
}

export default FindId;
