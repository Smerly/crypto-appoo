import './ViewCoin.css'
import PriceBox from './boxes/PriceBox'
import MoreInfoBox from './boxes/MoreInfoBox'
import TitleBox from './boxes/TitleBox'
import { IfSmallerWindow } from './ViewCoin.style'
import { useParams } from "react-router-dom"
import { getCoin } from "../helpers/getCoin"
import { useEffect, useState } from "react"
import { CustomContainer } from "../LandingPage/Landing.style"
import { current } from '@reduxjs/toolkit'
        
function ViewCoin() {
    const slug = useParams().slug

    const [name, setName] = useState('loading...')
    const [selectedCoin, setSelectedCoin] = useState('loading...')
    const [priceChange24, setPriceChange24] = useState('loading...')
    const [priceChange24Percent, setPriceChange24Percent] = useState('loading...')
    const [description, setDescription] = useState('loading...')
    const [homepage, setHomepage] = useState('loading...')
    const [currentPrice, setCurrentPrice] = useState('loading...')
    const [marketCap, setMarketCap] = useState('loading...')
    const [symbol, setSymbol] = useState('loading...')
    const [allTimeHigh, setAllTimeHigh] = useState('loading...');
    const [allTimeLow, setAllTimeLow] = useState('loading...');
    const [athDate, setAthDate] = useState('loading...');
    const [atlDate, setAtlDate] = useState('loading...');
    const [fullyDilutedValuation, setFullyDilutedValuation] = useState('loading...')
    const [totalVolume, setTotalVolume] = useState('loading...')
    const [totalVolumeCurrency, setTotalVolumeCurrency] = useState('loading...')
    const [circulatingSupply, setCirculatingSupply] = useState('loading...')
    const [maxSupply, setMaxSupply] = useState('loading...')
    // getCoin(slug).then((res) => setSelectedCoin(res))

    // Helper Functions

    const setNumberCommas = (numberString) => {
        // For every character in the "number" string, put a commas for every thousand
        return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        getCoin(slug).then((res) => {
            setName(res.name)
            setPriceChange24(setNumberCommas(String(res.market_data.price_change_24h_in_currency.usd)))
            setPriceChange24Percent(Math.floor(res.market_data.price_change_percentage_24h * 100) / 100)
            setDescription(res.description.en)
            setHomepage(res.links.homepage[0])
            setCurrentPrice(setNumberCommas(String(res.market_data.current_price.usd)))
            setMarketCap(setNumberCommas(String(res.market_data.market_cap.usd)))
            setSymbol(res.symbol)
            setAllTimeHigh(setNumberCommas(String(res.market_data.ath.usd)))
            setAllTimeLow(setNumberCommas(String(res.market_data.atl.usd)))
            setAthDate(res.market_data.ath_date.usd)
            setAtlDate(res.market_data.atl_date.usd)
            setFullyDilutedValuation(setNumberCommas(String(res.market_data.fully_diluted_valuation.usd)))
            console.log(res.market_data.market_cap)
            setTotalVolume(setNumberCommas(String(res.market_data.total_volume.usd)))
            setTotalVolumeCurrency(setNumberCommas(String(res.market_data.total_volume[res.symbol])))
            setCirculatingSupply(setNumberCommas(String(res.market_data.circulating_supply)))
            setMaxSupply(setNumberCommas(String(res.market_data.max_supply)))
            return setSelectedCoin(res)
        })
    }, [])

    return (
        <div className='primary-component-wrapper'>
            <CustomContainer>
                <IfSmallerWindow>
                <h1 className='text-3xl mt-20 title-header'> Summary </h1>
                <div className='flex lg:flex-row flex-col mt-40 justify-around items-center'>
                    
                    <TitleBox name={name} homepage={homepage} symbol={symbol} />

                    <PriceBox currentPrice={currentPrice} priceChange24Percent={priceChange24Percent} ath={allTimeHigh} atl={allTimeLow} atlDate={atlDate} athDate={athDate} />

                    <MoreInfoBox marketCap={marketCap} fullyDilutedValuation={fullyDilutedValuation} totalVolume={totalVolume} currency={'usd'} coin={slug} totalVolumeCurrency={totalVolumeCurrency} circulatingSupply={circulatingSupply} maxSupply={maxSupply} />

                    {/* {[1,2,3,4,5,2,3,1,3,,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,22,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].map(() => {
                        return (
                            <div>asdasdasd</div>
                        )
                    })} */}
                </div>
                </IfSmallerWindow>
            </CustomContainer>
        </div>
    )
}  
        

export default ViewCoin