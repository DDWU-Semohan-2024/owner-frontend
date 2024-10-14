import React from 'react';
import './Style.css';
import Header from "./Header"; // CSS 파일을 import
import ranking from '../img/ranking.png';
import gold from '../img/gold.png';
import silver from '../img/silver.png';
import bronze from '../img/bronze.png';

function SmartRecommend() {

    return (
        <div id="body">
            <div className="no-mobile">모바일 버전으로 변경해주세요.</div>
            <div className="mobile">
                <Header/>

                <div id="ranking">
                    <nav>
                        <img className="rankingImg" src={ranking}/>
                        <div>지난주 전국 식당 인기 순위</div>
                    </nav>
                    <div>
                        <section>
                            <img src={gold}/>
                            <div>1위 음식</div>
                        </section>
                        <section>
                            <img src={silver}/>
                            <div>2위 음식</div>
                        </section>
                        <section>
                            <img src={bronze}/>
                            <div>3위 음식</div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmartRecommend