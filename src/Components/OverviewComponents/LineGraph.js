import { Line } from "react-chartjs-2"
import { useSelector } from "react-redux"
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Filler } from 'chart.js'
import { useEffect, useState } from "react"
import { handleAwait, handleAwaitArray } from "utils/handleAwait"
import { getGradient } from "utils/getGradient"
import { returnMillBillThou } from "utils/returnMillBillThou"
import { options, plugins } from "Components/OverviewComponents/options"
import { getCoinChartData } from "helpers/getCoin"
import { MainChartWrapper } from "./overview.style"

function LineGraph () {
    const currencyType = useSelector((state) => state.persist.currency)

    const [coinData, setCoinData] = useState([1,2,4,1,2,4])

    ChartJS.register(
        LineElement,
        PointElement,
        CategoryScale,
        LinearScale,
        Filler,
        Tooltip,
    )


    useEffect(() => {
        getCoinChartData('bitcoin', currencyType.currency).then((res) => setCoinData(res)).catch((err) => {
            console.log(err)
        })
    }, [])

    const data = {
        labels: handleAwaitArray(coinData, 'prices', 0, 180).map((each) => returnMillBillThou(each)),
        datasets: [
            {
                data: handleAwaitArray(coinData, 'prices'),
                tension: 0.4,
                borderColor: '#00FF5F', 
                fill: true,
                backgroundColor: function(context) {
                    const chart = context.chart;
                    const {ctx, chartArea} = chart;
            
                    if (!chartArea) {
                      return;
                    }
                    return getGradient(ctx, chartArea);
                  },
            }
        ]
    }
    return (
        <MainChartWrapper>
            <Line options={options} data={data} />
        </MainChartWrapper>
    )
}

export default LineGraph