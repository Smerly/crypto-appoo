
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2';
import { type } from '@testing-library/user-event/dist/type';
import { handleAwait, handleAwaitChart, handleAwaitPrim, handleAwaitSlice } from 'utils/handleAwait';
import { getCoin, getCoinChartData } from 'helpers/getCoin';
import { EachCoinWrapper, CoinTitle, CoinName, CoinImage, CoinHeader, CoinBar, CoinBarWrapper, CoinBarLabel, CoinBarLeft, LabelRight, Last7DGraph} from 'Components/CoinListComponent/CoinList.style';
import { returnPercentage } from 'utils/returnPercentage'
import { returnGreenOrRed } from 'utils/returnGreenOrRed';
import { returnMillBillThou } from 'utils/returnMillBillThou';
import { roundToHundredth } from 'utils/roundToHundredth';
import { options } from 'Components/CoinListComponent/options'



function EachCoin(props) {
    const { eachCoin, index } = props

    const currentType = useSelector((state) => state.persist.currency)
    
    const [coin, setCoin] = useState(eachCoin)
    const [coinChartData, setCoinChartData] = useState([[1,2],[3,4],[5,6],[7,8], [9,10], [11, 12], [13, 14], [15, 16], [17, 18]])

    // Helper Vars

    const today = new Date()
    const coinSparkLine = handleAwait(coin, 'sparkline_in_7d')
    const daysInAWeek = ["Sun", 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
    const weekOfChartData = handleAwaitChart(coinChartData, 'prices').slice(0,7)

    const returnDailyWeekData = (arr) => {
        return arr.filter((each, i) => i % 24 === 0)
    }
    useEffect(() => {
        setCoinChartData(returnDailyWeekData(handleAwait(coinSparkLine, 'price')))
    }, [])

    // Make weekFromNow list days of the week according to the current day
    let weekIndex = 0
    const weekFromNow = daysInAWeek.map((each) => {
        const indexedDate = new Date()
        indexedDate.setDate(today.getDate() + weekIndex)
        weekIndex++
        return daysInAWeek[indexedDate.getDay()]
    })

    ChartJS.register(
        LineElement,
        PointElement,
        CategoryScale,
        LinearScale,
        Tooltip,
    )

    // Data for chart
    const data = {
        labels: weekFromNow,
        datasets: [
            {
                data: coinChartData,
                tension: 0.4,
                borderColor: returnGreenOrRed(weekOfChartData),
                fill: true,
                backgroundColor: 'rgba(214, 222, 255, 0)'
            }
        ],
    }

    return (
        <EachCoinWrapper>
            <CoinHeader>{index}</CoinHeader>
            <Link className='flex flex-row justify-center items-center text-sm ml-8' to={`/coin/${coin.id}`}>
                <CoinImage src={handleAwait(eachCoin, 'image')}/>
                {handleAwait(coin, 'name')}
            </Link>
            <CoinHeader className='ml-7'>
                ${roundToHundredth(handleAwait(eachCoin, 'current_price'))}
            </CoinHeader>
            <CoinHeader>
                {roundToHundredth(handleAwait(eachCoin, 'price_change_percentage_1h_in_currency'))}%
            </CoinHeader>
            <CoinHeader>
                {roundToHundredth(handleAwait(eachCoin, 'price_change_percentage_24h'))}
            </CoinHeader>
            <CoinHeader>
                {roundToHundredth(handleAwait(eachCoin, 'price_change_percentage_7d_in_currency'))}
            </CoinHeader>

            {/* CoinBar for circulating_supply / total_supply */}

            <CoinBarWrapper className='ml-auto'>
                <CoinBarLabel>
                    {returnMillBillThou(roundToHundredth(handleAwait(eachCoin,'total_volume')))}
                    <LabelRight>
                        {returnMillBillThou(roundToHundredth(handleAwait(eachCoin, 'market_cap')))}
                    </LabelRight>
                </CoinBarLabel>
                <CoinBar>
                    <CoinBarLeft percentageOwned={returnPercentage(eachCoin.total_volume, eachCoin.market_cap)}/>
                </CoinBar>
            </CoinBarWrapper>

            {/* CoinBar for circulating_supply / total_supply */}

            <CoinBarWrapper className='ml-20'>
                <CoinBarLabel>
                    {returnMillBillThou(roundToHundredth(handleAwait(eachCoin, 'circulating_supply')))}
                    <LabelRight>
                        {returnMillBillThou(roundToHundredth(handleAwait(eachCoin, 'total_supply')))}
                    </LabelRight>
                </CoinBarLabel>
                <CoinBar>
                    <CoinBarLeft percentageOwned={returnPercentage(eachCoin.circulating_supply, eachCoin.total_supply)}/>
                </CoinBar>
            </CoinBarWrapper>
            
            <Last7DGraph>
                <Line data={data} options={options}/>
            </Last7DGraph>

        </EachCoinWrapper>
    )
}

export default EachCoin