import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PriceBox from 'Components/ViewCoinComponents/PriceBox'
import MoreInfoBox from 'Components/ViewCoinComponents/MoreInfoBox'
import TitleBox from 'Components/ViewCoinComponents/TitleBox'
import LinksFooter from "Components/ViewCoinComponents/LinksFooter"
import { IfSmallerWindow, DescriptionBox, DescriptionText, ToggleDescriptionButton, LinksContainer, SectionWrapper } from './ViewCoin.style'
import { getCoin } from "helpers/getCoin"
import { CustomContainer } from "Pages/LandingPage/Landing.style"
import { PrimaryComponentWrapper, Title } from "App.style"
        
function ViewCoin() {
    const slug = useParams().slug

    // UseState Variables

    // Api Vars
    const [name, setName] = useState('loading...')
    const [selectedCoin, setSelectedCoin] = useState('loading...')
    const [priceChange24, setPriceChange24] = useState('loading...')
    const [priceChange24Percent, setPriceChange24Percent] = useState('loading...')
    const [description, setDescription] = useState('loading...')
    const [homepage, setHomepage] = useState('loading...')
    const [blockchair, setBlockChair] = useState('loading...')
    const [tokenView, setTokenView] = useState('loading...')
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

    useEffect(() => {
        getCoin(slug).then((res) => {
            setName(res.name)
            setPriceChange24(setNumberCommas(String(res.market_data.price_change_24h_in_currency.usd)))
            setPriceChange24Percent(Math.floor(res.market_data.price_change_percentage_24h * 100) / 100)
            setDescription(res.description.en)
            setHomepage(res.links.homepage[0])
            setBlockChair(res.links.blockchain_site[0])
            setTokenView(res.links.blockchain_site[2])
            setCurrentPrice(setNumberCommas(String(res.market_data.current_price.usd)))
            setMarketCap(setNumberCommas(String(res.market_data.market_cap.usd)))
            setSymbol(res.symbol)
            setAllTimeHigh(setNumberCommas(String(res.market_data.ath.usd)))
            setAllTimeLow(setNumberCommas(String(res.market_data.atl.usd)))
            setAthDate(res.market_data.ath_date.usd)
            setAtlDate(res.market_data.atl_date.usd)
            setFullyDilutedValuation(setNumberCommas(String(res.market_data.fully_diluted_valuation.usd)))
            setTotalVolume(setNumberCommas(String(res.market_data.total_volume.usd)))
            setTotalVolumeCurrency(setNumberCommas(String(res.market_data.total_volume[res.symbol])))
            setCirculatingSupply(setNumberCommas(String(res.market_data.circulating_supply)))
            setMaxSupply(setNumberCommas(String(res.market_data.max_supply)))
            return setSelectedCoin(res)
        })
    }, [])

    // Other useStates

    const [expandDescription, setExpandDescription] = useState(false)

    // Helper Functions

    const setNumberCommas = (numberString) => {
        // For every character in the "number" string, put a commas for every thousand
        return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    const changeDescriptionSize = () => setExpandDescription(!expandDescription)
    
    const descriptionTextButton = () => {
        if (description.length < 300) {
            return ''
        }
        return expandDescription ? 'Minimize' : 'Expand'
}

    const handleLongDescription = (str) => {
        if (str.length > 300 && expandDescription) {
            return str + '.'
        } else if (str.length > 300 && !expandDescription) {
            return str.slice(0, 300) + '...' 
        } else {
            return str + '.'
        }
    }

    return (
        <PrimaryComponentWrapper>
            <CustomContainer>
                <IfSmallerWindow>
                <Title> Summary </Title>
                    <SectionWrapper>
                        
                        <TitleBox name={name} homepage={homepage} symbol={symbol} />

                        <PriceBox currentPrice={currentPrice} priceChange24Percent={priceChange24Percent} ath={allTimeHigh} atl={allTimeLow} atlDate={atlDate} athDate={athDate} />

                        <MoreInfoBox marketCap={marketCap} fullyDilutedValuation={fullyDilutedValuation} totalVolume={totalVolume} currency={'usd'} coin={slug} totalVolumeCurrency={totalVolumeCurrency} circulatingSupply={circulatingSupply} maxSupply={maxSupply} />

                    </SectionWrapper>
                </IfSmallerWindow>
                <Title> Description </Title>

                <DescriptionBox>
                    <DescriptionText>
                        <span>{handleLongDescription(description)}</span>
                    </DescriptionText>
                    <ToggleDescriptionButton onClick={changeDescriptionSize}>{descriptionTextButton()}</ToggleDescriptionButton>
                </DescriptionBox>

                <LinksFooter blockchair={blockchair} tokenView={tokenView} homepage={homepage} /> 
                
            </CustomContainer>
        </PrimaryComponentWrapper>
    )
}  
        

export default ViewCoin