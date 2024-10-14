import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Style.css';
import Header from "./Header"; // CSS 파일을 import
import ranking from '../img/ranking.png';
import gold from '../img/gold.png';
import silver from '../img/silver.png';
import bronze from '../img/bronze.png';

function SmartRecommend() {
    // 음식 순위 데이터를 저장하기 위한 상태
    const [top3, setTop3] = useState(["", "", ""]);
    const [loading, setLoading] = useState(true);

    // 컴포넌트가 마운트될 때 요청 보내기
    useEffect(() => {
        axios.get('/review/top3')
            .then((response) => {
                // 서버로부터 1, 2, 3위 데이터를 받아와서 상태 업데이트
                setTop3(response.data);
                setLoading(false); // 로딩 완료
            })
            .catch((error) => {
                console.error('Error fetching top 3 foods:', error);
                setLoading(false); // 오류 발생 시에도 로딩 상태 해제
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>; // 데이터 로딩 중일 때 표시할 내용
    }

    return (
        <div id="body">
            <div className="no-mobile">모바일 버전으로 변경해주세요.</div>
            <div className="mobile">
                <Header/>

                <div id="ranking">
                    <nav>
                        <img className="rankingImg" src={ranking} alt="ranking"/>
                        <div>지난주 전국 식당 인기 순위</div>
                    </nav>
                    <div>
                        <section>
                            <img src={gold} alt="gold"/>
                            <div>1위. {top3[0]}</div> {/* 1위 음식 */}
                        </section>
                        <section>
                            <img src={silver} alt="silver"/>
                            <div>2위. {top3[1]}</div> {/* 2위 음식 */}
                        </section>
                        <section>
                            <img src={bronze} alt="bronze"/>
                            <div>3위. {top3[2]}</div> {/* 3위 음식 */}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmartRecommend;
