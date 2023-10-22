import { Line } from "react-chartjs-2"
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { useEffect, useState } from "react"
import { options } from "Components/OverviewComponents/options"
import { getCoinChartData } from "helpers/getCoin"

function LineGraph () {
    const [coinData, setCoinData] = useState()

    ChartJS.register(
        LineElement,
        PointElement,
        CategoryScale,
        LinearScale,
        Tooltip,
    )

    const data = {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                data: coinData,
                tension: 0.4,
                borderColor: 'aqua',
                fill: true,
            }
        ]
    }

    useEffect(() => {
        getCoinChartData('bitcoin').then((res) => setCoinData(res)).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <Line options={options} data={data} />
    )
}

export default LineGraph