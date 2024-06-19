import React, {useEffect, useState} from 'react';
import './Style.css'; // CSS 파일을 import
import {Link} from 'react-router-dom';
import axios from 'axios';
import logoImage from '../img/semohan-logo.png';
import triangle from '../img/free-icon-triangle-649731.png';
import edit from '../img/edit.png';
import remove from '../img/delete.png'

function ViewMenu() {
    const [menuData, setMenuData] = useState([]);
    const [weekIndex, setWeekIndex] = useState(0);

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

    const removeTr = (id) => {
        axios.delete(`/menu/${id}`, {
            withCredentials: true
        })
            .then(() => {
                setMenuData(prevData => prevData.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error('Error deleting menu item:', error);
            });
    };

    return (
        <div id="body">
            <header>
                <Link to="/main"><img src={logoImage} alt="logo"/></Link>
            </header>

            {/* 데이터가 있을 경우 */}
            <table id="viewMenu">
                <caption>
                    <img className="last" src={triangle} alt="저번주" onClick={handlePreviousWeekClick}/>
                    <div>주별 조회 {/* 선택 날짜 */}</div>
                    <img className="next" src={triangle} alt="다음주" onClick={handleNextWeekClick}/>
                </caption>
                <thead>
                <tr>
                    <th>날짜</th>
                    <th>메인 메뉴</th>
                    <th>반찬</th>
                    <th>수정</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {menuData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.mealDate}</td>
                        <td>{item.mainMenu}</td>
                        <td>{item.subMenu}</td>
                        <td>
                            <Link to="/updateMenu">
                                <img className="edit" src={edit} alt="수정"/>
                            </Link>
                        </td>
                        <td>
                            <img className="edit" src={remove} alt="삭제" onClick={() => removeTr(item.id)}/>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
            <Link className="submit" to="/updateMenu">메뉴 등록</Link>
        </div>
    );
}

export default ViewMenu;

