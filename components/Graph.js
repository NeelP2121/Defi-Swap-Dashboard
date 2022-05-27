import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'


const randomPoints = [
    [69, 55, 96, 78, 25, 56, 72, 45, 63, 55, 42],
    [10, 50, 30, 84, 36, 90, 42, 78, 100, 0, 100],
    [0, 60, 100, 80, 10, 56, 100, 0, 26, 23, 32],
    [100, 42, 76, 100, 0, 100, 72, 45, 72, 55, 42],
    [0, 100, 48, 21, 90, 36, 25, 69, 78, 0, 32],
]

const getRandomPoints = () => {
    const randInt = Math.floor(Math.random()*4)+1
    return randomPoints[randInt]
}

const data = {
    labels:[
        '9:04 AM',
        '10:06 AM',
        '11:05 AM',
        '12:03 PM',
        '1:05 PM',
        '2:07 PM',
        '3:06 PM'
    ],
    datasets:[
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'red',
            borderColor: '#3773f5',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#3773f5',
            pointBackgroundColor: '#3773f5',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#3773f5',
            pointHoverBorderColor: '#3773f5',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: getRandomPoints(),
        }
    ]
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
}

const Graph = () => {
    return (
        <Line data={data} options={options} width={400} height={150} />
    )
}

export default Graph