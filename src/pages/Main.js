import React from 'react';
import './Style.css'; // CSS 파일을 import
import { Link, } from 'react-router-dom';
import axios from 'axios';
import HeaderMain from './HeaderMain';
import statics from '../img/statics.png';
import smart1 from '../img/smart1.png';
import smart2 from '../img/smart2.png';
import resInfo1 from '../img/resInfo1.png';
import resInfo2 from '../img/resInfo2.png';
import resInfo3 from '../img/resInfo3.png';
import menu1 from '../img/menu1.png';
import menu2 from '../img/menu2.png';

axios.defaults.withCredentials = true;

function Main() {

    // const handleLogout = async () => {
    //     try {
    //         await axios.post('/auth/sign-out');
    //         window.location.href = '/login';
    //     } catch (error) {
    //         console.error('There was an error logging out!', error);
    //     }
    // };

    return (
        <div id="body">
            <div className="no-mobile">모바일 버전으로 변경해주세요.</div>
            <div className="mobile">
                <HeaderMain/>

                <div className="mainLink">
                    {/*<Link className="gray" to="/myInfo">나의 정보</Link>*/}
                    {/*<Link className="gray" to="/restaurantInfo">식당 정보</Link>*/}
                    {/*<Link className="lemon" to="/viewMenu">메뉴 등록</Link>*/}
                    {/*<Link className="gray" to="/staticChart">비즈니스</Link>*/}
                    {/*<Link className="gray" onClick={handleLogout}>로그아웃</Link>*/}

                    <Link to="/smartRecommend">
                        <img className="mainIcon" src={smart1} alt="smartRecommend"/>
                        <div>스마트 추천</div>
                    </Link>
                    <Link to="/staticChart">
                        <img className="mainIcon" src={statics} alt="statics"/>
                        <div>지난 기록</div>
                    </Link>
                    <Link to="/viewMenu">
                        <img className="mainIcon" src={menu1} alt="registerMenu"/>
                        <div>메뉴 등록</div>
                    </Link>
                    <Link to="/restaurantInfo">
                        <img className="mainIcon" src={resInfo1} alt="restaurantInfo"/>
                        <div>식당 정보</div>
                    </Link>


                </div>
            </div>

        </div>
    );
}

export default Main;
