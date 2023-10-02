import { Coins } from '../Landing.style'
import { getAllCoins, getCoin } from '../../helpers/getCoin'
import { useEffect, useState } from 'react'


function CoinList () {
    const [coins, setCoins] = useState(undefined)
    // useEffect(() => {
    //         getAllCoins().then((res) => setCoins(res))
    // }, [])
    // console.log(typeof coins)
    // const displayAllCoinTitles = () => {
    //     if (coins) {
    //         coins.map((each) => {
    //             return <h2>{each.id}</h2>
    //         });
    //     }
    // }

    return (
        <Coins className='flex flex-col m-32 min-h-max'>
            {/* {displayAllCoinTitles()} */}
        </Coins>
    )
}

export default CoinList