import React, { useState, useEffect } from 'react';
import './Style.css'; // CSS 파일을 import
import logoImage from '../img/semohan-logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyInfoPage() {
    const [ownerInfo, setOwnerInfo] = useState({
        name: '',
        userName: '',
        phoneNumber: ''
    });

    const navigate = useNavigate(); // useNavigate 훅 사용

    useEffect(() => {
        // /restaurant/info로 GET 요청을 보내고 데이터를 받아옴
        const fetchOwnerInfo = async () => {
            try {
                const response = await axios.get('/owner/info', {
                    withCredentials: true
                });
                setOwnerInfo(response.data);
            } catch (error) {
                console.error('Error fetching owner info:', error);
            }
        };

        fetchOwnerInfo();
    }, []);

    const handleUpdateInfo = () => {
        navigate('/updateInfo');
    };

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
                    <td>{ownerInfo.name}</td>
                </tr>
                <tr>
                    <th>아이디</th>
                    <td>{ownerInfo.userName}</td>
                </tr>
                <tr>
                    <th>전화번호</th>
                    <td>{ownerInfo.phoneNumber}</td>
                </tr>
                </tbody>
            </table>
            <input className="submit" type="button" value="정보 수정" onClick={handleUpdateInfo}/>
        </div>
    );
}

export default MyInfoPage;
