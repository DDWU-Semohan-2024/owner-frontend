import React, {useState} from 'react';
import './Style.css';
// import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Header from "./Header";

function FindId() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [certificationNum, setCertificationNum] = useState('');
    const navigate = useNavigate();

    const handleSendCertification = async () => {
        try {
            const response = await axios.post('/auth/find-id/send', {phoneNumber}.phoneNumber);
            if (response.status === 200) {
                // Handle success response
                console.log('Certification number sent successfully');
            }
        } catch (error) {
            // Handle error response
            console.error('Failed to send certification number', error);
        }
    };

    const handleCertification = async () => {
        try {
            const response = await axios.post('/auth/find-id/confirm', {
                phoneNumber,
                verificationCode: certificationNum
            });
            if (response.status === 200) {
                console.log(response.data)
                navigate('/resultId', {state: {username: response.data}});
            } else if (response.status === 404) {
                alert("인증번호가 잘못되었습니다.")
            } else if (response.status === 401) {
                alert("회원정보가 없습니다.")
            }
        } catch (error) {

        }
    }

    return (
        <div id="body">
            <Header />
            <form id="findId" action="" method="post">
                <label htmlFor="phoneNumber">휴대전화</label>
                <div className="certification">
                    <input className="blank" type="tel" name="phoneNumber" id="phoneNumber" autoComplete="tel"
                           value={phoneNumber}
                           onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <input className="certi" type="button" value="인증번호" onClick={handleSendCertification}/>
                </div>
                <div className="certification">
                    <input className="blank" type="number" name="certificationNum"
                           placeholder="인증번호를 입력하세요" id="certiPhone"
                           value={certificationNum}
                           onChange={(e) => setCertificationNum(e.target.value)}/>
                    {/*<input className="certi" type="button" value="인증확인" onClick={handleCertification}/>*/}
                </div>
                <div className="find" onClick={handleCertification}>
                    아이디 찾기
                </div>
            </form>
        </div>
    );
}

export default FindId;