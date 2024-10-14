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
    const [isDataEmpty, setIsDataEmpty] = useState(false); // 데이터가 없을 때 상태 관리

    const handlePreviousWeekClick = () => {
        setWeekIndex(prevWeekIndex => prevWeekIndex - 1);
        console.log('저번주 버튼 클릭');
    };

    const handleNextWeekClick = () => {
        setWeekIndex(prevWeekIndex => prevWeekIndex + 1);
        console.log('다음주 버튼 클릭');
    };

    const fetchMenuData = () => {
        axios.get(`review/pie-chart/${weekIndex}`, {
            withCredentials: true
        })
            .then(response => {
                const data = response.data;
                console.log('Fetched Menu Data:', data); // 데이터 확인

                // 선호도가 0이 아닌 항목만 필터링
                const filteredData = data.filter(item => item.percentage > 0);

                // 데이터가 없을 경우 처리
                if (filteredData.length === 0) {
                    setIsDataEmpty(true);
                } else {
                    setIsDataEmpty(false);
                    setMenuData(filteredData); // 필터링된 데이터로 상태 업데이트
                }
            })
            .catch(error => {
                console.error('Error fetching menu data:', error);
                setIsDataEmpty(true);
            });
    };

    useEffect(() => {
        fetchMenuData();
    }, [weekIndex]);  // weekIndex가 변경될 때마다 데이터 fetching

    const data = {
        labels: isDataEmpty ? [] : menuData.map(item => item.menuName),  // 메뉴 이름 배열
        //label = 음식 이름
        datasets: [
            {
                label: '# of Votes',
                data: isDataEmpty ? [1] : menuData.map(item => item.percentage),  // 퍼센티지 배열
                backgroundColor: isDataEmpty
                    ? ['rgba(169, 169, 169, 0.5)'] // 회색
                    : [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                borderColor: isDataEmpty
                    ? ['rgba(169, 169, 169, 1)'] // 회색
                    : [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                borderWidth: 1,
            },
        ],
    };

    console.log(menuData);

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
                    <div id="selectStatic">
                        <button><Link to="/staticChart">표</Link></button>
                        <button><Link to="/staticGraph">그래프</Link></button>
                        <button><Link to="/staticCircle">원형</Link></button>
                    </div>
                    <section>
                        <img className="last" src={triangle} alt="저번주" onClick={handlePreviousWeekClick}/>
                        <div>주별 조회 {/* 선택 날짜 */}</div>
                        <img className="next" src={triangle} alt="다음주" onClick={handleNextWeekClick}/>
                        {/*<select>*/}
                        {/*    <option><Link to="/staticCircle">원형</Link></option>*/}
                        {/*    <option><Link to="/staticChart">표</Link></option>*/}
                        {/*    <option><Link to="/staticGraph">그래프</Link></option>*/}
                        {/*</select>*/}
                    </section>

                </div>

                <Pie data={data} options={options}/>
            </div>
        </div>
    )
}

export default MenuCircleStatic;