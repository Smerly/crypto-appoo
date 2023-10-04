import { Coins } from '../Landing.style'
import { getAllCoins, getCoin } from '../../helpers/getCoin'
import { useEffect, useState } from 'react'


function CoinList () {
    const [coins, setCoins] = useState(undefined)

    return (
        <Coins className='flex flex-col m-32 min-h-max'>
        </Coins>
    )
}

export default CoinList