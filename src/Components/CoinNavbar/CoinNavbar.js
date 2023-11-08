import { useEffect, useState } from "react";
import { getGlobalData } from "helpers/getCoin";
<<<<<<< HEAD
import { CoinNavbarWrapper, CoinNavbarText, SmallImage } from "./CoinNavbar.style";
import CoinNavbarBar from "./CoinNavbarBar";
import { handleAwaitPrim } from "utils/handleAwait";
import { returnMillBillThou } from "utils/returnMillBillThou";
import btcLogo from 'images/Bitcoin.png'
import ethLogo from 'images/ethereum.png'
=======
import { CoinNavbarWrapper, CoinNavbarText } from "./CoinNavbar.style";
import CoinNavbarBar from "./CoinNavbarBar";
>>>>>>> MainChartsLandingDev


function CoinNavbar () {
    const [globalData, setGlobalData] = useState({})
<<<<<<< HEAD
    const [marketCap24h, setMarketCap24h] = useState(0)
    const [totalVolume, setTotalVolume] = useState(0)
    const [btcPercentage, setBtcPercentage] = useState(0)
    const [ethPercentage, setEthPercentage] = useState(0)

    useEffect(() => {
        getGlobalData().then((res) => {
            setGlobalData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    
    useEffect(() => {
        setMarketCap24h(handleAwaitPrim(globalData, 'market_cap_change_percentage_24h_usd'))
        const totalVol = handleAwaitPrim(globalData, 'total_volume')
        const usdTotalVol = handleAwaitPrim(totalVol, 'usd')
        setTotalVolume(usdTotalVol)

        const marketCapPercentage = handleAwaitPrim(globalData, 'market_cap_percentage')
        setBtcPercentage(handleAwaitPrim(marketCapPercentage, 'btc'))
        setEthPercentage(handleAwaitPrim(marketCapPercentage, 'eth'))
    }, [globalData])
    
    return (
        <CoinNavbarWrapper>
            <CoinNavbarText>
                Coins: {handleAwaitPrim(globalData, 'active_cryptocurrencies')}
            </CoinNavbarText>
            <CoinNavbarText>
                Exchange: {handleAwaitPrim(globalData, 'markets')}
            </CoinNavbarText>
            <CoinNavbarText>•</CoinNavbarText>
            <CoinNavbarText>
                {returnMillBillThou(Math.floor(handleAwaitPrim(globalData.total_market_cap, 'usd')))}
            </CoinNavbarText>
            <CoinNavbarText>•</CoinNavbarText>
            <CoinNavbarText>
                {returnMillBillThou(handleAwaitPrim(globalData, 'market_cap_change_percentage_24h_usd') * handleAwaitPrim(globalData.total_volume, 'usd'))}
            </CoinNavbarText> 
            <CoinNavbarBar fraction={marketCap24h} total={totalVolume}/>

            <CoinNavbarText>
                <SmallImage src={btcLogo}/>
            </CoinNavbarText>
            <CoinNavbarBar fraction={btcPercentage} total={100} />

            <CoinNavbarText>
                <SmallImage src={ethLogo}/>
            </CoinNavbarText>
            <CoinNavbarBar fraction={ethPercentage} total={100}/>
=======

    useEffect(() => {
        getGlobalData().then((res) => setGlobalData(res))
    }, [])

    return (
        <CoinNavbarWrapper>
            <CoinNavbarText>
                Coins: 
            </CoinNavbarText>
            <CoinNavbarText>
                Exchange:
            </CoinNavbarText>
            <CoinNavbarText>
                Total Money:
            </CoinNavbarText>

            <CoinNavbarText>
                Another Money:
            </CoinNavbarText>
            <CoinNavbarBar />

            <CoinNavbarText>

            </CoinNavbarText>
            <CoinNavbarBar />

            <CoinNavbarText>
                
            </CoinNavbarText>
            <CoinNavbarBar />
>>>>>>> MainChartsLandingDev

        </CoinNavbarWrapper>
    )
}

export default CoinNavbar