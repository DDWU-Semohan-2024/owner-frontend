import React from 'react';
import './Style.css';
// import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';
import {Link} from "react-router-dom";

function FindId() {

    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo"/>
            </header>
            <form id="findId" action="" method="post">
                <label htmlFor="phoneNum">휴대전화</label>
                <div className="certification">
                    <input className="blank" type="tel" name="phoneNum" id="phoneNum" autoComplete="tel"/>
                    <input className="certi" type="button" value="인증번호"/>
                </div>
                <input className="blank" type="number" name="certificationNum"/>
                <div className="find">
                    <Link to="/resultId">아이디 찾기</Link>
                </div>
            </form>
        </div>
    );
}

export default FindId;
