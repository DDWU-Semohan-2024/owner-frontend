import React, { useState } from 'react';
import './Style.css';
import logoImage from '../img/semohan-logo.png';
import lock from "../img/lock.png"
import beforeCheck from "../img/free-icon-checkmark-656971.png"

function UpdateRestaurant() {
    const [formData, setFormData] = useState({
        name: '',
        phoneNum: '',
        address: '',
        detailedAddress: '',
        businessHours: '',
        price: '',
        password: '',
        passwordCheck: '',
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

            <form id="updateRestaurant" method="post" action="" onSubmit={handleSubmit}>


                <label htmlFor="address">주소</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="address"
                        id="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="detailedAddress"
                        id="detailedAddress"
                        value={formData.detailedAddress}
                        placeholder="상세 주소"
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="businessHours">영업시간</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="businessHours"
                        id="businessHours"
                        value={formData.businessHours}
                        placeholder="영업시간"
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="price">가격 안내</label>
                <div>
                    <input
                        className="blank"
                        type="text"
                        name="price"
                        id="price"
                        value={formData.price}
                        placeholder="기존 가격"
                        onChange={handleChange}
                    />
                </div>

                <label htmlFor="restaurantPhoto">가게 사진</label>

                <div>
                    {/*<label htmlFor="fileUpload" className="custom-file-upload">*/}
                    {/*upload*/}
                    {/*</label>*/}
                    <input
                        type="file"
                        name="fileUpload"
                        id="fileUpload"
                        className="file-input"
                        onChange={handleFileChange}
                    />

                </div>

                <div>
                    <input className="button" type="submit" value="저장"/>
                </div>
            </form>
        </div>
    );
}

export default UpdateRestaurant;