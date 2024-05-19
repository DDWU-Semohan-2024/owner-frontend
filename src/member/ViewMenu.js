import React from 'react';
import './Style.css'; // CSS 파일을 import
import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';

function ViewMenu() {
    const menuData = [
        { day: '', mainMenu: '', sideDish: '' }
    ];
    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo"/>
            </header>
            <table>
            <caption>
                    <button id="last" type="button">
                        <img src="../img/free-icon-triangle-649731.png" alt="저번주" onClick={() => console.log('저번주 버튼 클릭')} />
                    </button>
                    날짜
                    <button id="next" type="button">
                        <img src="../img/free-icon-triangle-649731.png" alt="다음주" onClick={() => console.log('다음주 버튼 클릭')} />
                    </button>
                </caption>
                <thead>
                <tr>
                    <th>요일</th>
                    <th>메인 메뉴</th>
                    <th>반찬</th>
                    <th>수정</th>
                </tr>
                </thead>
                <tbody>
                {/* 데이터 배열을 map() 함수를 사용하여 동적으로 행을 생성 */}
                {menuData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.day}</td>
                        <td>{item.mainMenu}</td>
                        <td>{item.sideDish}</td>
                        <td><img src="../img/edit.png" alt="수정" /></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewMenu;
