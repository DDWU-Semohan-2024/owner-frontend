import React, { useEffect, useState } from 'react';
import './Style.css';
import Header from './Header';
import axios from "axios";
import triangle from "../img/free-icon-triangle-649731.png";
import {Link} from "react-router-dom";
import LineChart from './Chart';



function MenuGraphStatic() {
    const [menuData, setMenuData] = useState([]);
    const [weekIndex, setWeekIndex] = useState(0);

    const handlePreviousWeekClick = () => {
        setWeekIndex(prevWeekIndex => prevWeekIndex - 1);
        console.log('저번주 버튼 클릭');
        fetchMenuData(); // 데이터 다시 조회
    };

    const handleNextWeekClick = () => {
        setWeekIndex(prevWeekIndex => prevWeekIndex + 1);
        console.log('다음주 버튼 클릭');
        fetchMenuData(); // 데이터 다시 조회
    };

    const fetchMenuData = () => {
        axios.get('/menu/' + weekIndex, {
            withCredentials: true
        })
            .then(response => {
                setMenuData(response.data);
            })
            .catch(error => {
                console.error('Error fetching menu data:', error);
            });
    };

    useEffect(() => {
        fetchMenuData();
    }, []);


    return (
        <div id="body">
            <Header/>

            <div id="captionStatic">
                <div>메뉴 선호도 통계</div>
                <section>
                    <img className="last" src={triangle} alt="저번주" onClick={handlePreviousWeekClick}/>
                    <div>주별 조회 {/* 선택 날짜 */}</div>
                    <img className="next" src={triangle} alt="다음주" onClick={handleNextWeekClick}/>
                    <select>
                        <option><Link to="/staticGraph">그래프</Link></option>
                        <option><Link to="/staticChart">표</Link></option>
                        <option><Link to="/staticCircle">원형</Link></option>
                    </select>
                </section>
            </div>

            <LineChart />

        </div>
    )
}

    export default MenuGraphStatic;