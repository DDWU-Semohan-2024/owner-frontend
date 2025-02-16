
import React, {useState, useEffect} from 'react';
import './Style.css';
import addMenuImage from '../img/free-icon-add-992651.png';
// import {Link} from "react-router-dom";
import Header from "./Header";

function UpdateMenu() {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [date, setDate] = useState(new Date().getDate());
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
        if (mainMenus.length < 2) {
            setMainMenus([...mainMenus, '']);
        } else {
            alert(`최대 ${maxMainMenus}개까지 추가 가능합니다.`);
        }
    };

    const addSubMenu = (e) => {
        e.preventDefault();
        // setSubMenus([...subMenus, '']);

        if (subMenus.length + 1 <= maxSubMenus) {
            setSubMenus([...subMenus, '']); //메뉴 추가

        } else {
            alert(`최대 ${maxSubMenus}개까지 추가 가능합니다.`);
        }
        // alert(subMenus.length+1); 개수확인
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
        // 여기서 폼 데이터를 처리합니다.
        console.log({
            year,
            month,
            date,
            mealType: e.target.mealType.value,
            mainMenus,
            subMenus,
        });
    };

    return (
        <div id="body">
            <div className="no-mobile">모바일 버전으로 변경해주세요.</div>
            <div className="mobile">
                <Header />

                <form id="updateMenu" method="post" action="" onSubmit={handleSubmit}>
                    <label>날짜</label>
                    <div id="dateSelect">
                        <select id="year" value={year} onChange={(e) => setYear(e.target.value)}>
                            <option value="2024">2024년</option>
                            <option value="2025">2025년</option>
                        </select>

                        <select id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
                            {Array.from({length: 12}, (_, i) => i + 1).map((m) => (
                                <option key={m} value={m}>
                                    {m}월
                                </option>
                            ))}
                        </select>

                        <select id="date" value={date} onChange={(e) => setDate(e.target.value)}>
                            {Array.from({length: 31}, (_, i) => i + 1).map((d) => (
                                <option key={d} value={d}>
                                    {d}일
                                </option>
                            ))}
                        </select>
                    </div>

                    <label>구분</label>
                    <select name="mealType" >
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
                        <img onClick={addMainMenu} id="addInputBtn" className="addbtn" src={addMenuImage} alt="add"/>

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
                        <img onClick={addSubMenu} id="addInputBtn" className="addbtn" src={addMenuImage} alt="add"/>
                    </div>
                    <input className="submit" type="submit" value="저장"/>
                </form>
            </div>
        </div>
    );
}

export default UpdateMenu;