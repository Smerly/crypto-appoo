
import { useEffect, useState } from 'react';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { getCoin, getCoinChartData } from 'helpers/getCoin';
import { Line } from 'react-chartjs-2';
import { EachCoinWrapper, CoinTitle, CoinName, CoinImage, CoinHeader, CoinBar, CoinBarWrapper, CoinBarLabel, CoinBarLeft, LabelRight, Last7DGraph} from 'Components/CoinListComponent/CoinList.style';
import { type } from '@testing-library/user-event/dist/type';


function EachCoin(props) {
    const { coin, index } = props
    const [coinChartData, setCoinChartData] = useState()
    const [image, setImage] = useState('loading...')
    console.log(coin)

    ChartJS.register(
        LineElement,
        PointElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        // Legend
    )


    useEffect(() => {
        getCoinChartData(coin.id).then((res) => {
            setCoinChartData(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    
    const roundToHundredth = (num) => {
        return Math.floor(num * 100) / 100
    }

    const returnOwnedPercentage = () => {
        // console.log(`total_volume:${coin.total_volume} / market_cap: ${coin.market_cap} = ${coin.total_volume / coin.market_cap * 100}`)
        return coin.total_volume / (coin.market_cap) * 100
    }

    const returnCirculatingPercentage = () => {
        console.log(`circulating_supply:${coin.circulating_supply} / total_supply${coin.total_supply} = ${coin.circulating_supply / (coin.total_supply + coin.circulating_supply)}`)
        return coin.circulating_supply / (coin.circulating_supply + coin.total_supply) * 100
    }

    const returnMillBillThou = (num) => {
        if (num >= 1.0e+9) {
            return `${Math.floor(num / 1.0e+9)}B `
        } else if (num >= 1.0e+6) {
            return `${Math.floor(num / 1.0e+6)}M`
        } else if (num >= 1.0e+3) {
            return `${Math.floor(num / 1.0e+3)}K`
        } else {
            return num
        }

    }


    console.log(returnCirculatingPercentage() * 2)
    const returnAwait = (obj, str) => {
        return obj ? obj[str] : 'loading..'
    }

    console.log(returnAwait(coin, 'sparkline_in_7.prices'))

    const returnGreenOrRed = (num) => {
        return num > 0 ? 'bg-green-200' : 'bg-red-400'
    }
    
    console.log(coin.sparkline_in_7)

    const weekOfChartData = returnAwait(coinChartData, 'prices').slice(0,7)
    console.log(weekOfChartData[weekOfChartData.length - 1][1])
    console.log(weekOfChartData[0][1])

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', "Sun"],
        datasets: [
            {
                data: weekOfChartData,
                tension: 0.4,
                borderColor: weekOfChartData[weekOfChartData.length - 1][1] > weekOfChartData[0][1] ? '#4ade80' : '#dc2626',
                fill: true,
            }
        ],
    }

    const options = {
        plugins: {
          legend: {
            display: false,
          },
          subtitle: {
            display: false
          },
          tooltips: {
            enabled: false
            }
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        elements: {
          point: {
            radius: 0,
          },
        },
        scales: {
            x: {
                ticks: {
                align: "start",
                source: "auto",
                maxRotation: 0,
                autoSkip: true,
                maxTicksLimit: 7,
                font: {
                    size: 0,
                },
            },
            grid: {
              display: false,
            },
          y: {
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              font: {
                size: 0,
              }
            },
            grid: {
                display: false,
            },
          },
        },
    }
    }

    return (
        <EachCoinWrapper>
            <CoinHeader>{index} {weekOfChartData[weekOfChartData.length - 1][1]} - {weekOfChartData[0][1]}</CoinHeader>
            <CoinName>
            <CoinImage src={returnAwait(coin, 'image')}/>
                {returnAwait(coin, 'name')}
            </CoinName>
            <CoinHeader className='ml-7'>
                ${roundToHundredth(returnAwait(coin, 'current_price'))}
            </CoinHeader>
            <CoinHeader>
                {roundToHundredth(returnAwait(coin, 'price_change_percentage_1h_in_currency'))}%
            </CoinHeader>
            <CoinHeader>
                {roundToHundredth(returnAwait(coin, 'price_change_percentage_24h'))}
            </CoinHeader>
            <CoinHeader>
                {roundToHundredth(returnAwait(coin, 'price_change_percentage_7d_in_currency'))}
            </CoinHeader>

            {/* CoinBar for circulating_supply / total_supply */}

            <CoinBarWrapper className='m-10'>
                <CoinBarLabel>
                    {returnMillBillThou(roundToHundredth(returnAwait(coin,'total_volume')))}
                    <LabelRight>
                        {returnMillBillThou(roundToHundredth(returnAwait(coin, 'market_cap')))}
                    </LabelRight>
                </CoinBarLabel>
                <CoinBar>
                    <CoinBarLeft percentageOwned={returnOwnedPercentage()}/>
                </CoinBar>
            </CoinBarWrapper>

            {/* CoinBar for circulating_supply / total_supply */}

            <CoinBarWrapper className='m-10'>
                <CoinBarLabel>
                    {returnMillBillThou(roundToHundredth(returnAwait(coin, 'circulating_supply')))}
                    <LabelRight>
                        {returnMillBillThou(roundToHundredth(returnAwait(coin, 'total_supply')))}
                    </LabelRight>
                </CoinBarLabel>
                <CoinBar>
                    <CoinBarLeft percentageOwned={returnCirculatingPercentage()}/>
                </CoinBar>
            </CoinBarWrapper>
            
            <Last7DGraph>
                <Line data={data} options={options}/>
            </Last7DGraph>

        </EachCoinWrapper>
    )
}

export default EachCoin