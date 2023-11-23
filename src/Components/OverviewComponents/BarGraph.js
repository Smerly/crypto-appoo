import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { options } from "./options";
import { Chart as ChartJS, BarElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler } from 'chart.js'
import { getCoinChartData } from "helpers/getCoin";
import { returnMillBillThou } from "utils/returnMillBillThou";
import { handleAwaitArray } from "utils/handleAwait";
import { MainChart, MainChartWrapper } from "./overview.style";


function BarGraph() {
    const currencyType = useSelector((state) => state.persist.currency)
    
    const [coinData, setCoinData] = useState([1,2,4,1,2,4])

    ChartJS.register(
        BarElement
    )

    useEffect(() => {
        getCoinChartData('bitcoin', currencyType.currency).then((res) => setCoinData(res)).catch((err) => {
            console.log(err)
        })
    }, [])
    const data = {
        labels: handleAwaitArray(coinData, 'total_volumes', 0, 23).map((each) => returnMillBillThou(each)),
        datasets: [
            {
                data: handleAwaitArray(coinData, 'total_volumes', 0, 23),
                tension: 0.4,
                borderColor: '#2172E5',
                fill: true,
                backgroundColor: '#2172E5'
            }
        ]
    }

    return (
        <MainChartWrapper>
            <MainChart>
                <Bar data={data} options={options}/>
            </MainChart>
        </MainChartWrapper>
    )
}

export default BarGraph