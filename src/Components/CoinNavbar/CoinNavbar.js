import { useEffect, useState } from "react";
import { getGlobalData } from "helpers/getCoin";
import { CoinNavbarWrapper, CoinNavbarText, SmallImage } from "./CoinNavbar.style";
import CoinNavbarBar from "./CoinNavbarBar";
import { handleAwaitInt, handleAwaitPrim } from "utils/handleAwait";
import { returnMillBillThou } from "utils/returnMillBillThou";
import btcLogo from 'images/Bitcoin.png'
import ethLogo from 'images/ethereum.png'
import { useSelector } from "react-redux";


function CoinNavbar () {
    const CURRENTcy = useSelector((state) => state.persist.currency)
    const [globalData, setGlobalData] = useState({})
    const [marketCap24h, setMarketCap24h] = useState(0.11111111)
    const [totalVolume, setTotalVolume] = useState({usd: 0})
    const [btcPercentage, setBtcPercentage] = useState(0)
    const [ethPercentage, setEthPercentage] = useState(0)
    const [totalMarketCap, setTotalMarketCap] = useState()

    useEffect(() => {
        getGlobalData().then((res) => {
            setGlobalData(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(CURRENTcy.currency)
    
    useEffect(() => {
        setMarketCap24h(Number(handleAwaitInt(globalData, `market_cap_change_percentage_24h_${CURRENTcy.currency}`).toFixed(3)))
        const totalVol = handleAwaitInt(globalData, 'total_volume')
        const usdTotalVol = handleAwaitInt(totalVol, `${CURRENTcy.currency}`)
        setTotalVolume(usdTotalVol)

        const marketCapPercentage = handleAwaitInt(globalData, 'market_cap_percentage')
        setBtcPercentage(handleAwaitInt(marketCapPercentage, 'btc'))
        setEthPercentage(handleAwaitInt(marketCapPercentage, 'eth'))

        const marketCap = handleAwaitInt(globalData, 'total_market_cap')
        setTotalMarketCap(Math.floor(handleAwaitInt(marketCap, `${CURRENTcy.currency}`)))



    }, [globalData])
    
    return (
        <CoinNavbarWrapper>
            <CoinNavbarText>
                Coins: {handleAwaitInt(globalData, 'active_cryptocurrencies')}
            </CoinNavbarText>
            <CoinNavbarText>
                Exchange: {handleAwaitInt(globalData, 'markets')}
            </CoinNavbarText>
            <CoinNavbarText>•</CoinNavbarText>
            <CoinNavbarText>
                {returnMillBillThou(totalMarketCap)}
            </CoinNavbarText>
            <CoinNavbarText>•</CoinNavbarText>
            <CoinNavbarText>
                {returnMillBillThou(handleAwaitInt(globalData, `market_cap_change_percentage_24h_${CURRENTcy.currency}`) * totalVolume)}
            </CoinNavbarText> 
            <CoinNavbarBar fraction={marketCap24h} total={100}/>

            <CoinNavbarText>
                <SmallImage src={btcLogo}/>
                {`${Math.floor(btcPercentage)}%`}
            </CoinNavbarText>
            <CoinNavbarBar fraction={btcPercentage} total={100} />

            <CoinNavbarText>
                <SmallImage src={ethLogo}/>
                {`${Math.floor(ethPercentage)}%`}
            </CoinNavbarText>
            <CoinNavbarBar fraction={ethPercentage} total={100}/>

        </CoinNavbarWrapper>
    )
}

export default CoinNavbar