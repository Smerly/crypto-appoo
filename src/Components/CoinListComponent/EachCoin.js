
import { useEffect, useState } from 'react';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { getCoin, getCoinChartData } from 'helpers/getCoin';
import { Line } from 'react-chartjs-2';
import { EachCoinWrapper, CoinTitle, CoinName, CoinImage, CoinHeader, CoinBar, CoinBarWrapper, CoinBarLabel, CoinBarLeft, LabelRight, Last7DGraph} from 'Components/CoinListComponent/CoinList.style';
import { type } from '@testing-library/user-event/dist/type';


function EachCoin(props) {
    const { coin, index } = props
    const [coinChartData, setCoinChartData] = useState()

    // Helper Vars

    const returnAwait = (obj, str) => {
        return obj ? obj[str] : 'loading..'
    }

    const today = new Date()
    const daysInAWeek = ["Sun", 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
    const weekOfChartData = returnAwait(coinChartData, 'prices').slice(0,7)
    const weekFromNow = []

    // Make weekFromNow list days of the week according to the current day
    let weekIndex = 0
    daysInAWeek.forEach((each) => {
        const indexedDate = new Date()
        indexedDate.setDate(today.getDate() + weekIndex)
        weekFromNow.push(daysInAWeek[indexedDate.getDay()])
        weekIndex++
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
    
    // Helper Function

    const roundToHundredth = (num) => {
        return Math.floor(num * 100) / 100
    }

    const returnOwnedPercentage = () => {
        return coin.total_volume / (coin.market_cap) * 100
    }

    const returnCirculatingPercentage = () => {
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

    const returnGreenOrRed = (data) => {
        return data[data.length - 1][1] > data[0][1] ? '#4ade80' : '#dc2626'
    }

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

    // Options obj for chart config
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
        transitions: {
            show: {
                animations: {
                    x: {
                        from: 0
                    },
                    y: {
                        from: 0
                    }
                }
            },
            hide: {
                animations: {
                    x: {
                        to: 0
                    },
                    y: {
                        to: 0
                    }
                }
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
                    font: {
                        size: 0,
                    },
                },
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                  font: {
                    size: 0,
                  }
                },
                grid: {
                    display: false,
                },
            },
        }
    }

    return (
        <EachCoinWrapper>
            <CoinHeader>{index}</CoinHeader>
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