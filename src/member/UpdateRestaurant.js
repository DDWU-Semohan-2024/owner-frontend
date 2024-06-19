import React, { useState, useEffect } from 'react';
import './Style.css';
import logoImage from '../img/semohan-logo.png';
import { useLocation, useNavigate  } from 'react-router-dom';
import axios from "axios";

function UpdateRestaurant() {
    const location = useLocation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        phoneNumber: '',
        address: '',
        detailedAddress: '',
        businessHours: '',
        price: '',
        postcode: '',
        imageUrl: ''  // Added imageUrl property
    });

    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const fetchRestaurantInfo = async () => {
            try {
                const response = await axios.get('/restaurant/info', {
                    withCredentials: true
                });
                const { phoneNumber, businessHours, price, image } = response.data;
                setFormData({
                    phoneNumber: phoneNumber || '',
                    address:  '',
                    detailedAddress: '',
                    businessHours: businessHours || '',
                    price: price || '',
                    postcode: '',
                    imageUrl: ''  // Set the imageUrl from response data
                });
            } catch (error) {
                console.error('Error fetching restaurant info:', error);
            }
        };
        fetchRestaurantInfo();
    }, []);

    useEffect(() => {
        const daumPostcodeScript = document.createElement('script');
        daumPostcodeScript.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        daumPostcodeScript.type = 'text/javascript';
        document.head.appendChild(daumPostcodeScript);

        daumPostcodeScript.onload = () => {
            console.log('Daum Postcode script loaded.');
        };

        return () => {
            document.head.removeChild(daumPostcodeScript);
        };
    }, []);

    const postcodePopup = () => {
        new window.daum.Postcode({
            oncomplete: function(data) {
                let addr = '';
                let extraAddr = '';

                if (data.userSelectedType === 'R') {
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }

                if(data.userSelectedType === 'R'){
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                } else {
                    setFormData(prevState => ({
                        ...prevState,
                        detailedAddress: ''
                    }));
                }

                setFormData(prevState => ({
                    ...prevState,
                    postcode: data.zonecode,
                    address: addr
                }));

                document.getElementById("detailedAddress").focus();
            }
        }).open();
    };

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append('restaurantInfoUpdateDto', new Blob([JSON.stringify({
                phoneNumber: formData.phoneNumber,
                address: formData.address,
                detailedAddress: formData.detailedAddress,
                businessHours: formData.businessHours,
                price: formData.price,
                postcode: formData.postcode
            })], { type: "application/json" }));

            if (selectedFile) {
                data.append('imageFile', selectedFile);
            }

            const updateResponse = await axios.post("/restaurant/updateInfo", data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true
            });

            console.log('Update response:', updateResponse.data);

            // 요청이 성공적으로 완료된 후 /restaurantInfo로 이동
            navigate('/restaurantInfo');

        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo" />
            </header>
            <form id="updateRestaurant" onSubmit={handleSubmit}>
                <label htmlFor="address">주소</label>
                <input
                    className="blank"
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                />
                <input
                    className="blank"
                    type="text"
                    name="postcode"
                    id="postcode"
                    placeholder="우편 번호"
                    value={formData.postcode}
                    onChange={handleChange}
                />
                <input
                    className="blank"
                    type="text"
                    name="detailedAddress"
                    id="detailedAddress"
                    value={formData.detailedAddress}
                    placeholder="상세 주소"
                    onChange={handleChange}
                />
                <input type="button" onClick={postcodePopup} value="우편번호 찾기"/>

                <label htmlFor="businessHours">영업시간</label>
                <input
                    className="blank"
                    type="text"
                    name="businessHours"
                    id="businessHours"
                    value={formData.businessHours}
                    placeholder="영업시간"
                    onChange={handleChange}
                />
                <label htmlFor="price">가격 안내</label>
                <input
                    className="blank"
                    type="text"
                    name="price"
                    id="price"
                    value={formData.price}
                    placeholder="기존 가격"
                    onChange={handleChange}
                />
                <label htmlFor="restaurantPhoto">가게 사진</label>
                <div>
                    <input
                        type="file"
                        name="fileUpload"
                        id="fileUpload"
                        className="file-input"
                        onChange={handleFileChange}
                    />
                    {formData.imageUrl && (
                        <div>
                            <img src={formData.imageUrl} alt="Restaurant" style={{width: '200px', height: '200px'}}/>
                        </div>
                    )}
                </div>
                <input className="submit" type="submit" value="저장"/>
            </form>
        </div>
    );
}

export default UpdateRestaurant;
