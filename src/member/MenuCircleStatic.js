import React, { useEffect, useState } from 'react';
import './Style.css';
import Header from './Header';
import axios from "axios";
import triangle from "../img/free-icon-triangle-649731.png";
import {Link} from "react-router-dom";
import {Pie} from "react-chartjs-2";
import 'chart.js/auto';

function MenuCircleStatic() {
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

    const data = {
        labels: ['1위', '2위', '3위'],
        //label = 음식 이름
        datasets: [
            {
                label: '# of Votes',
                data: [19, 12, 7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            // title: {
            //     display: true,
            //     text: 'Pie Chart Example',
            // },
        },
    };

    return (
        <div id="body">
            <div className="no-mobile">모바일 버전으로 변경해주세요.</div>
            <div className="mobile">
                <Header/>

                <div id="captionStatic">
                    <div>메뉴 선호도 통계</div>
                    <section>
                        <img className="last" src={triangle} alt="저번주" onClick={handlePreviousWeekClick}/>
                        <div>주별 조회 {/* 선택 날짜 */}</div>
                        <img className="next" src={triangle} alt="다음주" onClick={handleNextWeekClick}/>
                        <select>
                            <option><Link to="/staticCircle">원형</Link></option>
                            <option><Link to="/staticChart">표</Link></option>
                            <option><Link to="/staticGraph">그래프</Link></option>
                        </select>
                    </section>
                </div>

                <Pie data={data} options={options}/>
            </div>
        </div>
    )
}

export default MenuCircleStatic;