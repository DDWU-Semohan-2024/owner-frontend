import React, {useEffect, useState} from "react";
import './Style.css'; // CSS 파일을 import
import axios from 'axios';
// import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';

function RestaurantInfo() {
    // const [restaurant, setRestaurant] = useState({
    //     name: '',
    //     phoneNumber: '',
    //     address: '',
    //     businessHours: '',
    //     prices: ''
    // });
    //
    // useEffect(() => {
    //     const apiUrl = 'http://localhost:8088/restaurant/info';
    //     // Axios를 사용하여 GET 요청 보내기
    //     axios.get(apiUrl)
    //         // 요청이 성공하면 가게 목록을 상태에 설정
    //         .then((res) => {
    //             setRestaurant(res.data);
    //             console.log(res.data); // 콘솔에서 데이터 제대로 들어오는지 확인
    //         })
    //         // 요청이 실패하면 오류를 처리
    //         .catch(err => {
    //             alert(err.response.data.message);
    //         });
    // }, []);

    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo"/>
            </header>
            <table>
                <caption>식당 정보</caption>
                <tbody>
                    <tr>
                        <th>상호명</th>
                        <td>가게1{/*{restaurant.name}*/}</td>
                    </tr>
                    <tr>
                        <th>전화번호</th>
                        <td>000-0000-0000{/*{restaurant.phoneNumber}*/}</td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td>서울특별시 성북구 화랑로13길 60 {/*{restaurant.address}*/}</td>
                    </tr>
                    <tr>
                        <th>영업 시간</th>
                        <td>00:00 - 00:00{/*{restaurant.businessHours}*/}</td>
                    </tr>
                    <tr>
                        <th>가격</th>
                        <td>7000원{/*{restaurant.prices}*/}</td>
                    </tr>
                    <tr>
                        <th>사진</th>
                        <td>{/*<img src={restaurant.picture}>*/}</td>
                    </tr>
                </tbody>
            </table>
            <input className="submit" type="button" value="정보 수정"/>
        </div>
    );

}

export default RestaurantInfo;
