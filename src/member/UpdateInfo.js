import React, { useState } from 'react';
import './Style.css';
import logoImage from '../img/semohan-logo.png';
import lock from "../img/lock.png"
import beforeCheck from "../img/free-icon-checkmark-656971.png"

function UpdateInfo() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNum: '',
        password: '',
        passwordCheck: '',
        restaurantPhoto: ''
    });


    const [selectedFile, setSelectedFile] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);



        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            // Example: Send file to the server
            fetch('/upload', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    };

    return (
        <div>
            <header>
                <img src={logoImage} alt="logo" />
            </header>

            <form id="updateInfo" method="post" action="" onSubmit={handleSubmit}>
                <label htmlFor="name">기존 이름</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        placeholder="기존 이름"
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="phoneNum">휴대전화</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="phoneNum"
                        id="phoneNum"
                        value={formData.phoneNum}
                        placeholder="기존 전화번호"
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="password">비밀번호</label>
                <div>
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
                <div>
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


                <div>
                    <input className="button" type="submit" value="저장"/>
                </div>
            </form>
        </div>
    );
}

export default UpdateInfo;