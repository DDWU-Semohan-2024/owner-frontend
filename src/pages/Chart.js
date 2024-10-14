import React from 'react';
import './Style.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = ({ menuData }) => {
    const data = {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [
            {
                label: '요일별 선호도',
                data: menuData.map(item => item.preference),
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        clip: false,
        scales: {
            y: {
                beginAtZero: true, // y축을 0에서 시작
                max: 100, // y축 최대값을 100으로 고정
            }
        }
    };

    return (
        <div className="line-chart-container">
            <div>
                <Line data={data} options={options}/>
            </div>
        </div>

    );
};

export default LineChart;