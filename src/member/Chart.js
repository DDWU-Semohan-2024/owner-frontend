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

const LineChart = () => {
    const data = {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [
            {
                label: '요일별 선호도',
                data: [65, 59, 80, 81, 56, 100, 40],
                //data = 좋아요 개수 / 리뷰 총 개수
                fill: false,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    return (
        <div className="line-chart-container">
            <Line data={data} options={options} />
        </div>
    );
};

export default LineChart;
