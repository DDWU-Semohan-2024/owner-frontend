import React, { useEffect, useState } from 'react';
import './Style.css';
import Header from './Header';
import axios from "axios";
import triangle from "../img/free-icon-triangle-649731.png";
import { Link } from "react-router-dom";
import LineChart from './Chart';

function MenuGraphStatic() {
    const [menuData, setMenuData] = useState([]);
    const [weekIndex, setWeekIndex] = useState(0);

    const handlePreviousWeekClick = () => {
        setWeekIndex(prevWeekIndex => prevWeekIndex - 1);
        console.log('저번주 버튼 클릭');
    };

    const handleNextWeekClick = () => {
        setWeekIndex(prevWeekIndex => prevWeekIndex + 1);
        console.log('다음주 버튼 클릭');
    };

    const fetchMenuData = () => {
        axios.get(`review/line-graph/${weekIndex}`, {
            withCredentials: true
        })
            .then(response => {
                const transformedData = Array(7).fill({ preference: 0 }); // 7일 기준의 기본값 설정
                const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
    
                daysOfWeek.forEach((day, index) => {
                    if (response.data[day]) {
                        // 요일별 데이터가 존재할 경우 해당 인덱스에 값 할당
                        const likesData = response.data[day].map(item => ({
                            preference: item.preference
                        }));
                        transformedData[index] = likesData[0] || { preference: 0 }; // 첫 번째 데이터 사용, 없으면 기본값 0
                    }
                });
    
                setMenuData(transformedData);
            })
            .catch(error => {
                console.error('Error fetching menu data:', error);
            });
    };

    useEffect(() => {
        fetchMenuData();
    }, [weekIndex]); // weekIndex가 변경될 때마다 데이터 fetching

    return (
        <div id="body">
            <div className="no-mobile">모바일 버전으로 변경해주세요.</div>
            <div className="mobile">
                <Header />

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
                        {/*    <option><Link to="/staticGraph">그래프</Link></option>*/}
                        {/*    <option><Link to="/staticChart">표</Link></option>*/}
                        {/*    <option><Link to="/staticCircle">원형</Link></option>*/}
                        {/*</select>*/}
                    </section>
                </div>

                <LineChart menuData={menuData} /> {/* LineChart에 데이터 전달 */}
            </div>
        </div>
    );
}

export default MenuGraphStatic;
