import { Bar } from "react-chartjs-2";
import { options } from "./options";
import { Chart as ChartJS, BarElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler } from 'chart.js'
import { getCoinChartData } from "helpers/getCoin";
import { useState, useEffect } from "react";
import { returnMillBillThou } from "utils/returnMillBillThou";
import { handleAwaitArray } from "utils/handleAwait";


function BarGraph() {
    const [coinData, setCoinData] = useState([1,2,4,1,2,4])
    ChartJS.register(
        BarElement
    )
    
    const awaitHandling = (data, query) => {
        return Array.isArray(data[query]) ? data[query].map((l) => l[1]).slice(0,23) : [[1, 0], [1, 0]]
    }

    useEffect(() => {
        getCoinChartData('bitcoin').then((res) => setCoinData(res)).catch((err) => {
            console.log(err)
        })
    }, [])
    const data = {
        labels: handleAwaitArray(coinData, 'total_volumes', 0, 23).map((each) => returnMillBillThou(each)),
        datasets: [
            {
                data: awaitHandling(coinData, 'total_volumes'),
                tension: 0.4,
                borderColor: '#2172E5',
                fill: true,
                backgroundColor: '#2172E5'
            }
        ]
    }
    console.log(coinData)

    // console.log(awaitHandling(coinData, 'prices'))
    return (
        <div>
            <Bar data={data} options={options}/>
        </div>
    )
}

export default BarGraph