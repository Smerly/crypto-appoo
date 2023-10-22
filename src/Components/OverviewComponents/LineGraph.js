import { Line } from "react-chartjs-2"
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { useEffect, useState } from "react"
import { handleAwait } from "utils/handleAwait"
import { options } from "Components/OverviewComponents/options"
import { getCoinChartData } from "helpers/getCoin"

function LineGraph () {
    const [coinData, setCoinData] = useState([1,2,4,1,2,4])

    ChartJS.register(
        LineElement,
        PointElement,
        CategoryScale,
        LinearScale,
        Tooltip,
    )

    console.log([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,81,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,201,2,2,2,2,2,2,2].length)


    const awaitHandling = (data, query) => {
        return Array.isArray(data) ? data[query] : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,1,2,3,4,5,6,7,81,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,201,2,2,2,2,2,2,2]
    }

    useEffect(() => {
        getCoinChartData('bitcoin').then((res) => setCoinData(res)).catch((err) => {
            console.log(err)
        })
    }, [])
    console.log()
    const data = {
        labels: awaitHandling(coinData, 'prices'),
        datasets: [
            {
                data: handleAwait(coinData, 'prices'),
                tension: 0.4,
                borderColor: 'aqua',
                fill: true,
            }
        ]
    }
    return (
        <div>
            s
            <Line options={options} data={data} />
        </div>
    )
}

export default LineGraph