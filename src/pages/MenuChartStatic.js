import React, { useEffect, useState } from 'react';
import './Style.css';
import Header from './Header';
import axios from "axios";
import triangle from "../img/free-icon-triangle-649731.png";
import { Link } from "react-router-dom";

function MenuChartStatic() {
    const [menuData, setMenuData] = useState({});
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
        axios.get(`review/table-graph/${weekIndex}`, { withCredentials: true })
            .then(response => {
                console.log(response.data);  // 응답 데이터 구조 확인
                setMenuData(response.data);
            })
            .catch(error => {
                console.error('Error fetching menu data:', error);
            });
    };

    useEffect(() => {
        fetchMenuData();
    }, [weekIndex]);  // weekIndex가 변경될 때마다 데이터 fetching

    // 요일 배열 (월~일)
    const koreanDays = ["월", "화", "수", "목", "금", "토", "일"];

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
                        {/*    <option><Link to="/staticChart">표</Link></option>*/}
                        {/*    <option><Link to="/staticGraph">그래프</Link></option>*/}
                        {/*    <option><Link to="/staticCircle">원형</Link></option>*/}
                        {/*</select>*/}
                    </section>
                </div>

                <table id="staticChart">
                    <thead>
                        <tr>
                            <th>요일</th>
                            <th>메인 메뉴</th>
                            <th>리뷰 개수</th>
                            <th>좋아요 개수</th>
                            <th>선호도</th>
                        </tr>
                    </thead>
                    <tbody>
                        {koreanDays.map(day => {
                            const items = menuData[day] || []; // 해당 요일의 데이터가 없으면 빈 배열
                            if (items.length === 0) { // 데이터가 없을 경우 초기값 추가
                                return (
                                    <tr key={day}>
                                        <td>{day}</td>
                                        <td> </td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td>0%</td>
                                    </tr>
                                );
                            }
                            return items.map((item, index) => (
                                <tr key={`${day}-${index}`}>
                                    <td>{day}</td>
                                    <td>{item.mainMenu.join(", ")}</td>
                                    <td>{item.reviewCount}</td>
                                    <td>{item.likesMenu}</td>
                                    <td>{item.preference}%</td>
                                </tr>
                            ));
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MenuChartStatic;