import React, { useState } from 'react';
import "./Style.css"; // CSS 파일을 import
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';
import axios from "axios";
import Header from "./Header";
import HeaderBFLogin from "./HeaderBFLogin";

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('Username:', username);
        console.log('Password:', password);

        // 로그인 처리 등의 로직 추가
        const data = {
            username,
            password,
        };

        try {
            const response = await axios.post("/auth/sign-in", data, {
                withCredentials: true
            });

            const token = response.data.token; // TokenDto의 token 값 추출
            console.log('JWT Token:', token);

            if (response.status === 200) {
                // 로그인 성공 시 /main으로 리디렉션
                navigate("/main");
            } else {
                // 로그인 실패 시 alert 창으로 메시지 표시
                alert(response.data.message);
            }
        } catch (error) {
            // 예외 처리
            console.error('로그인 요청 중 오류 발생:', error);
            alert('로그인에 실패했습니다.');
        }

    };

    return (

        <div id="body">
            <div className="no-mobile">모바일 버전으로 변경해주세요.</div>
            <div className="mobile">
                <HeaderBFLogin />

                <form id="login" onSubmit={handleSubmit}>
                    <label htmlFor="username">아이디</label>
                    <input className="blank" onChange={handleUsernameChange} type="text" id="username"
                           value={username}/>
                    <label htmlFor="password">비밀번호</label>
                    <input className="blank" onChange={handlePasswordChange} type="password" id="password"
                           value={password}/>
                    <input className="submit" type="submit" value="로그인"/>
                    <div className="loginLink">
                        <Link to="/findId">아이디 찾기</Link>
                        <Link to="/resetPassword">비밀번호 재발급</Link>
                        <Link to="/comingSoon">회원가입 문의</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;