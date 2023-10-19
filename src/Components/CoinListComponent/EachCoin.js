
import { useEffect, useState } from 'react';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { getCoin, getCoinChartData } from 'helpers/getCoin';
import { Line } from 'react-chartjs-2';
import { EachCoinWrapper, CoinTitle, CoinName, CoinImage, CoinHeader, CoinBar, CoinBarWrapper, CoinBarLabel, CoinBarLeft, LabelRight, Last7DGraph} from 'Components/CoinListComponent/CoinList.style';
import { type } from '@testing-library/user-event/dist/type';
import { handleAwait } from 'utils/handleAwait';
import { returnPercentage } from 'utils/returnPercentage'
import { returnGreenOrRed } from 'utils/returnGreenOrRed';
import { returnMillBillThou } from 'utils/returnMillBillThou';
import { roundToHundredth } from 'utils/roundToHundredth';
import { options } from 'Components/CoinListComponent/options'


function EachCoin(props) {
    const { coin, index } = props
    const [coinChartData, setCoinChartData] = useState()

    // Helper Vars

    const today = new Date()
    const daysInAWeek = ["Sun", 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
    const weekOfChartData = handleAwait(coinChartData, 'prices').slice(0,7)

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
    useEffect(() => {
        getCoinChartData(coin.id).then((res) => {
            setCoinChartData(res)
        }).catch((err) => {
            return err
        })
    }, [])
    
   
    // Data for chart
    const data = {
        labels: weekFromNow,
        datasets: [
            {
                data: weekOfChartData,
                tension: 0.4,
                borderColor: returnGreenOrRed(weekOfChartData),
                fill: true,
            }
        ],
    }

    return (
        <EachCoinWrapper>
            <CoinHeader>{index}</CoinHeader>
            <CoinName>
            <CoinImage src={handleAwait(coin, 'image')}/>
                {handleAwait(coin, 'name')}
            </CoinName>
            <CoinHeader className='ml-7'>
                ${roundToHundredth(handleAwait(coin, 'current_price'))}
            </CoinHeader>
            <CoinHeader>
                {roundToHundredth(handleAwait(coin, 'price_change_percentage_1h_in_currency'))}%
            </CoinHeader>
            <CoinHeader>
                {roundToHundredth(handleAwait(coin, 'price_change_percentage_24h'))}
            </CoinHeader>
            <CoinHeader>
                {roundToHundredth(handleAwait(coin, 'price_change_percentage_7d_in_currency'))}
            </CoinHeader>

            {/* CoinBar for circulating_supply / total_supply */}

            <CoinBarWrapper className='ml-auto'>
                <CoinBarLabel>
                    {returnMillBillThou(roundToHundredth(handleAwait(coin,'total_volume')))}
                    <LabelRight>
                        {returnMillBillThou(roundToHundredth(handleAwait(coin, 'market_cap')))}
                    </LabelRight>
                </CoinBarLabel>
                <CoinBar>
                    <CoinBarLeft percentageOwned={returnPercentage(coin.total_volume, coin.market_cap)}/>
                </CoinBar>
            </CoinBarWrapper>

            {/* CoinBar for circulating_supply / total_supply */}

            <CoinBarWrapper className='ml-20'>
                <CoinBarLabel>
                    {returnMillBillThou(roundToHundredth(handleAwait(coin, 'circulating_supply')))}
                    <LabelRight>
                        {returnMillBillThou(roundToHundredth(handleAwait(coin, 'total_supply')))}
                    </LabelRight>
                </CoinBarLabel>
                <CoinBar>
                    <CoinBarLeft percentageOwned={returnPercentage(coin.circulating_supply, coin.total_supply)}/>
                </CoinBar>
            </CoinBarWrapper>
            
            <Last7DGraph>
                <Line data={data} options={options}/>
            </Last7DGraph>

        </EachCoinWrapper>
    )
}

export default EachCoin