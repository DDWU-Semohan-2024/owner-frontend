import React from 'react';
import './Style.css'; // CSS 파일을 import
import { Link } from 'react-router-dom';
import logoImage from '../img/semohan-logo.png';
import triangle from '../img/free-icon-triangle-649731.png'
import edit from '../img/edit.png'

function ViewMenu() {
    const menuData = [
        { day: '', mainMenu: '', sideDish: '' }
    ];
    return (
        <div id="body">
            <header>
                <img src={logoImage} alt="logo"/>
            </header>
            <table id="viewMenu">
                <caption>
                    <img className="last" src={triangle} alt="저번주" onClick={() => console.log('저번주 버튼 클릭')}/>
                    <div>날짜 {/*선택 날짜*/}</div>
                    <img className="next" src={triangle} alt="다음주" onClick={() => console.log('다음주 버튼 클릭')}/>
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
                        <td><Link to="/updateMenu"><img className="edit" src={edit} alt="수정"/></Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link className="submit" to="/updateMenu">메뉴 등록</Link>
        </div>
    );
}

export default ViewMenu;
