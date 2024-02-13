import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getGlobalData } from "helpers/getCoin";
import { CoinNavbarWrapper, CoinNavbarText, SmallImage, CoinNavbarDivider, CoinNavbarLabel } from "./CoinNavbar.style";
import CoinNavbarBar from "./CoinNavbarBar";
import { handleAwaitInt, handleAwaitPrim } from "utils/handleAwait";
import { returnMillBillThou } from "utils/returnMillBillThou";
import btcLogo from 'images/Bitcoin.png'
import ethLogo from 'images/ethereum.png'
import { returnArrow, returnGreenOrRedCondition } from "utils/returnGreenOrRed";


function CoinNavbar () {
    const currencyType = useSelector((state) => state.persist.currency)
    
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
    
    useEffect(() => {
        setMarketCap24h(Number(handleAwaitInt(globalData, `market_cap_change_percentage_24h_${currencyType.currency}`).toFixed(3)))
        const totalVol = handleAwaitInt(globalData, 'total_volume')
        const usdTotalVol = handleAwaitInt(totalVol, `${currencyType.currency}`)
        setTotalVolume(usdTotalVol)

        const marketCapPercentage = handleAwaitInt(globalData, 'market_cap_percentage')
        setBtcPercentage(handleAwaitInt(marketCapPercentage, 'btc'))
        setEthPercentage(handleAwaitInt(marketCapPercentage, 'eth'))

        const marketCap = handleAwaitInt(globalData, 'total_market_cap')
        setTotalMarketCap(Math.floor(handleAwaitInt(marketCap, `${currencyType.currency}`)))

    }, [globalData, currencyType.currency])
    
    return (
        <CoinNavbarWrapper>
            <CoinNavbarText>
                <CoinNavbarLabel>
                <svg className='mx-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='svg-paths' d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 13.23L10.35 16.82C9.59 17.35 9.15 17.04 9.37 16.15L10.32 12.31L8.67 11.9C7.92 11.72 7.83 11.2 8.46 10.76L13.64 7.17C14.4 6.64 14.84 6.95 14.62 7.84L13.67 11.68L15.32 12.09C16.07 12.28 16.16 12.79 15.53 13.23Z"/>
                </svg>
                    Coins
                </CoinNavbarLabel>
                {handleAwaitInt(globalData, 'active_cryptocurrencies')}
            </CoinNavbarText>
            <CoinNavbarDivider />
            <CoinNavbarText>
                <CoinNavbarLabel>
                <svg className='mx-2' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='svg-paths' d="M15.0002 22.75C14.7302 22.75 14.4802 22.6 14.3502 22.37C14.2202 22.13 14.2202 21.85 14.3602 21.61L15.4102 19.86C15.6202 19.5 16.0902 19.39 16.4402 19.6C16.8002 19.81 16.9102 20.27 16.7002 20.63L16.4302 21.08C19.1902 20.43 21.2602 17.95 21.2602 14.99C21.2602 14.58 21.6002 14.24 22.0102 14.24C22.4202 14.24 22.7602 14.58 22.7602 14.99C22.7502 19.27 19.2702 22.75 15.0002 22.75Z" />
                    <path className='svg-paths' d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.52 1.4 9.65 1.63C9.78 1.87 9.78 2.15 9.64 2.39L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.39C7.21 4.18 7.09 3.72 7.31 3.36L7.58 2.91C4.81 3.56 2.75 6.04 2.75 9C2.75 9.41 2.41 9.75 2 9.75Z"/>
                    <path className='svg-paths' d="M14.8 12.63V15.57C14.8 18.02 13.82 19 11.37 19H8.43C5.98 19 5 18.02 5 15.57V12.63C5 10.18 5.98 9.19995 8.43 9.19995H11.37C13.82 9.19995 14.8 10.18 14.8 12.63Z"/>
                    <path className='svg-paths' d="M15.5709 5H12.6309C10.2209 5 9.24094 5.96 9.21094 8.32H11.3709C14.3109 8.32 15.6709 9.69 15.6709 12.62V14.78C18.0409 14.75 18.9909 13.77 18.9909 11.36V8.43C19.0009 5.98 18.0209 5 15.5709 5Z"/>
                </svg>      
                    Exchange
                </CoinNavbarLabel>
                {handleAwaitInt(globalData, 'markets')}
            </CoinNavbarText>

            <CoinNavbarDivider />

            <CoinNavbarText>
                {returnMillBillThou(totalMarketCap)}
            </CoinNavbarText>
            <CoinNavbarText className={`ml-5 ${returnGreenOrRedCondition(handleAwaitInt(globalData, `market_cap_change_percentage_24h_${currencyType.currency}`) * totalVolume > 0)}`}>
              {returnMillBillThou(handleAwaitInt(globalData, `market_cap_change_percentage_24h_${currencyType.currency}`) * totalVolume)} {returnArrow(handleAwaitInt(globalData, `market_cap_change_percentage_24h_${currencyType.currency}`) * totalVolume, 0)}
            </CoinNavbarText>
            <CoinNavbarBar fraction={marketCap24h} total={100}/>

            <CoinNavbarDivider />

            <CoinNavbarText>
                <SmallImage src={btcLogo}/>
                {`${Math.floor(btcPercentage)}%`}
            </CoinNavbarText>
            <CoinNavbarBar fraction={btcPercentage} total={100} />

            <CoinNavbarDivider />

            <CoinNavbarText>
                <SmallImage src={ethLogo}/>
                {`${Math.floor(ethPercentage)}%`}
            </CoinNavbarText>
            <CoinNavbarBar fraction={ethPercentage} total={100}/>

        </CoinNavbarWrapper>
    )
}

export default CoinNavbar