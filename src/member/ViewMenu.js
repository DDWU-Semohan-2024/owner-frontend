import React, { useEffect, useState } from 'react';
import './Style.css'; // CSS 파일을 import
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import logoImage from '../img/semohan-logo.png';
import triangle from '../img/free-icon-triangle-649731.png';
import edit from '../img/edit.png';

function ViewMenu() {
    const [menuData, setMenuData] = useState([]);
    const [weekIndex, setWeekIndex] = useState(0);

    const fetchMenuData = () => {
        axios.get('/menu/week/' + weekIndex, {
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
        if (performance.getEntriesByType("navigation")[0].type === "reload") {
            // 캐시를 우회한 새로고침
            window.location.href = window.location.href;
            fetchMenuData();
        }
    }, []);

    // useEffect(() => {
    //     fetchMenuData();
    // }, []);

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

    return (
        <div id="body">
            <Header />


            {/*/!* 데이터가 없을 경우 *!/*/}
            {/*{menuData.length === 0 ? (*/}
            {/*    <div id="resultId">*/}
            {/*        <div>등록된 메뉴가 없습니다.</div>*/}
            {/*    </div>*/}
            {/*) : (*/}
            {/*    <>*/}
                    {/* 데이터가 있을 경우 */}
                    <table id="viewMenu">
                        <caption>
                            <img className="last" src={triangle} alt="저번주" onClick={handlePreviousWeekClick} />
                            <div>주별 조회 {/* 선택 날짜 */}</div>
                            <img className="next" src={triangle} alt="다음주" onClick={handleNextWeekClick} />
                        </caption>
                        <thead>
                        <tr>
                            <th>날짜</th>
                            <th>메인 메뉴</th>
                            <th>반찬</th>
                            <th>수정</th>
                        </tr>
                        </thead>
                        <tbody>
                        {menuData.map((item, index) => (
                            <tr key={index}>
                                <td>{item.mealDate}</td>
                                <td>{item.mainMenu}</td>
                                <td>{item.subMenu}</td>
                                <td>
                                    <Link to={`/updateMenu/${item.id}`}>
                                        <img className="edit" src={edit} alt="수정" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            {/*    </>*/}
            {/*)}*/}
            <Link className="submit" to="/registerMenu">메뉴 등록</Link>
        </div>
    );
}

export default ViewMenu;
