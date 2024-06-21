import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import axios from 'axios';
import Header from './Header';
import logoImage from '../img/semohan-logo.png';
import addMenuImage from '../img/free-icon-add-992651.png';

function RegisterMenu() {
    const navigate = useNavigate();
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [date, setDate] = useState(new Date().getDate());
    const [mealType, setMealType] = useState('');
    const [mainMenus, setMainMenus] = useState(['']);
    const [subMenus, setSubMenus] = useState(['', '']);
    const maxSubMenus = 10; /*기타메뉴 최대 개수 지정*/
    const maxMainMenus = 2; /*메인메뉴 최대 개수 지정*/

    useEffect(() => {
        // 초기 날짜 설정
        const today = new Date();
        setYear(today.getFullYear());
        setMonth(today.getMonth() + 1);
        setDate(today.getDate());
    }, []);

    const addMainMenu = (e) => {
        e.preventDefault();
        if (mainMenus.length < maxMainMenus) {
            setMainMenus([...mainMenus, '']);
        } else {
            alert(`최대 ${maxMainMenus}개까지 추가 가능합니다.`);
        }
    };

    const addSubMenu = (e) => {
        e.preventDefault();
        if (subMenus.length < maxSubMenus) {
            setSubMenus([...subMenus, '']);
        } else {
            alert(`최대 ${maxSubMenus}개까지 추가 가능합니다.`);
        }
    };

    const handleMainMenuChange = (index, value) => {
        const newMainMenus = [...mainMenus];
        newMainMenus[index] = value;
        setMainMenus(newMainMenus);
    };

    const handleSubMenuChange = (index, value) => {
        const newSubMenus = [...subMenus];
        newSubMenus[index] = value;
        setSubMenus(newSubMenus);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mealDate = new Date(year, month - 1, date).toISOString().split('T')[0]; // 포맷을 맞춘 식사 날짜
        const menuData = {
            mealDate,
            mealType,
            mainMenu: mainMenus,
            subMenu: subMenus,
        };

        axios.post('/menu/new-menu', menuData, { withCredentials: true })
            .then(response => {
                if (response.status === 200 && response.data === true) {
                    alert('메뉴가 성공적으로 등록되었습니다.');
                    navigate('/viewMenu'); // 성공 시 /viewMenu로 이동
                } else {
                    alert('메뉴 등록에 실패했습니다.');
                }
            })
            .catch(error => {
                console.error('메뉴 등록 중 오류 발생:', error);
                alert('메뉴 등록 중 오류가 발생했습니다.');
            });
    };

    return (
        <div id="body">
            <Header />

            <form id="updateMenu" method="post" action="" onSubmit={handleSubmit}>
                <label>날짜</label>
                <div id="dateSelect">
                    <select id="year" value={year} onChange={(e) => setYear(e.target.value)}>
                        <option value="2024">2024년</option>
                        <option value="2025">2025년</option>
                    </select>

                    <select id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                            <option key={m} value={m}>
                                {m}월
                            </option>
                        ))}
                    </select>

                    <select id="date" value={date} onChange={(e) => setDate(e.target.value)}>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                            <option key={d} value={d}>
                                {d}일
                            </option>
                        ))}
                    </select>
                </div>

                <label>구분</label>
                <select name="mealType" value={mealType} onChange={(e) => setMealType(e.target.value)}>
                    <option value="점심">점심</option>
                    <option value="저녁">저녁</option>
                </select>

                <div className="addMenu">
                    <label>메인 메뉴 (최대 2개)</label>
                    <div id="addMainMenu">
                        {mainMenus.map((menu, index) => (
                            <input
                                key={index}
                                className="blank"
                                type="text"
                                name={`mainMenu${index + 1}`}
                                value={menu}
                                onChange={(e) => handleMainMenuChange(index, e.target.value)}
                                placeholder="메인 메뉴"
                            />
                        ))}
                    </div>
                    <img onClick={addMainMenu} id="addInputBtn" className="addbtn" src={addMenuImage} alt="add" />

                    <label>기타 메뉴</label>
                    <div id="addSubMenu">
                        {subMenus.map((menu, index) => (
                            <React.Fragment key={index}>
                                <input
                                    className="blank"
                                    type="text"
                                    name={`subMenu${index + 1}`}
                                    value={menu}
                                    onChange={(e) => handleSubMenuChange(index, e.target.value)}
                                    placeholder={index === 0 ? '기타 메뉴 추가' : '기타 메뉴 추가'}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                    <img onClick={addSubMenu} id="addInputBtn" className="addbtn" src={addMenuImage} alt="add" />
                </div>
                <input className="submit" type="submit" value="저장" />
            </form>
        </div>
    );
}

export default RegisterMenu;
