import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import logoImage from '../img/semohan-logo.png';
import Header from './Header';
import lock from "../img/lock.png";
import beforeCheck from "../img/free-icon-checkmark-656971.png";
import axios from 'axios';

axios.defaults.withCredentials = true;

function UpdateInfo() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNum: '',
        password: '',
        passwordCheck: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // /owner/info로 GET 요청을 보내고 데이터를 받아옴
        const fetchOwnerInfo = async () => {
            try {
                const response = await axios.get('/owner/info', {
                    withCredentials: true
                });
                setFormData({
                    ...formData,
                    name: response.data.name,
                    phoneNum: response.data.phoneNumber
                });
            } catch (error) {
                console.error('Error fetching owner info:', error);
            }
        };

        fetchOwnerInfo();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrorMessage(''); // 입력 중에 에러 메시지 초기화
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.passwordCheck) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            return;
        }

        const updatedData = {
            phoneNumber: formData.phoneNum,
            password: formData.password,
        };

        try {
            const response = await axios.post('/owner/edit-info', updatedData, {
                withCredentials: true
            });

            if (response.status === 200) {
                navigate('/myInfo');
            } else {
                setErrorMessage('정보 수정에 실패했습니다.');
            }
        } catch (error) {
            console.error('Error updating info:', error);
            setErrorMessage('정보 수정 중 오류가 발생했습니다.');
        }
    };

    return (
        <div id="body">
            <Header />

            <form id="updateInfo" method="post" action="" onSubmit={handleSubmit}>
                <label htmlFor="name">이름</label>
                <input
                    className="blank"
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    readOnly // 이름은 고정된 값으로 설정
                />

                <label htmlFor="phoneNum">휴대전화</label>
                <input
                    className="blank"
                    type="text"
                    name="phoneNum"
                    id="phoneNumOriginal"
                    value={formData.phoneNum}
                    placeholder="기존 전화번호"
                    onChange={handleChange}
                />

                <label htmlFor="password">비밀번호</label>
                <div id="containImg">
                    <input
                        className="blank"
                        type="password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <img src={lock} alt="lock"/>
                </div>

                <label htmlFor="passwordCheck">비밀번호 재확인</label>
                <div id="containImg">
                    <input
                        className="blank"
                        type="password"
                        name="passwordCheck"
                        id="passwordCheck"
                        value={formData.passwordCheck}
                        onChange={handleChange}
                    />
                    <img src={beforeCheck} alt="beforeCheck"/>
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <input className="submit" type="submit" value="저장"/>
            </form>
        </div>
    );
}

export default UpdateInfo;
