import React from 'react';
import './Style.css'; // CSS 파일을 import
import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';

function MyInfoPage() {
    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo"/>
            </header>
            <table>
            <caption>나의 정보</caption>
                <tbody>
                <tr>
                    <th>이름</th>
                    <td>{/* 여기에 이름 데이터를 넣으세요 */}</td>
                </tr>
                <tr>
                    <th>아이디</th>
                    <td>{/* 여기에 아이디 데이터를 넣으세요 */}</td>
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <td>{/* 여기에 비밀번호 데이터를 넣으세요 */}</td>
                </tr>
                </tbody>
            </table>
            <input type="button" value="정보 수정" />
        </div>
    );
}

export default MyInfoPage;
