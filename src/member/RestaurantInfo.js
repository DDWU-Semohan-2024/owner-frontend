import React, {useEffect, useState} from "react";
import './Style.css'; // CSS 파일을 import
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';

function RestaurantInfo() {

    const [restaurant, setRestaurant] = useState(null);
    const navigate = useNavigate(); // useNavigate 훅 사용

    useEffect(() => {
        axios.get("/restaurant/info", {
            withCredentials: true
        }).then(response => {
            setRestaurant(response.data);
        }).catch(error => {
            console.error("There was an error fetching the restaurant data!", error);
        });
    }, []);

    const handleUpdateClick = () => {
        navigate('/updateRestaurant'); // 버튼 클릭 시 /updateRestaurant로 이동
    };

    if (!restaurant) {
        return <div>Loading...</div>;
    }

    return (
        <div id="body">
            <header>
                <Link to="/main"><img src={logoImage} alt="logo"/></Link>
            </header>
            <table>
                <caption>식당 정보</caption>
                <tbody>
                <tr>
                    <th>상호명</th>
                    <td>{restaurant.name}</td>
                </tr>
                <tr>
                    <th>전화번호</th>
                    <td>{restaurant.phoneNumber}</td>
                </tr>
                <tr>
                    <th>주소</th>
                    <td>{restaurant.address}</td>
                </tr>
                <tr>
                    <th>영업 시간</th>
                    <td>{restaurant.businessHours}</td>
                </tr>
                <tr>
                    <th>가격</th>
                    <td>{restaurant.price}</td>
                </tr>
                <tr>
                    <th>사진</th>
                    <td><img src={restaurant.image.s3Url} alt={restaurant.name}
                             style={{width: '150px', height: 'auto'}}/></td>
                </tr>
                </tbody>
            </table>
            <input className="submit" type="button" value="정보 수정" onClick={handleUpdateClick}/>
        </div>
    );

}

export default RestaurantInfo;
