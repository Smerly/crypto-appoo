import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { formatNumber } from "utils/formatNumber"
import { EachAssetWrapper, AssetImage, CoinLabelBox, AssetName, AssetInfoBoxes, AssetInfoBoxLabel, MarketPriceContainer, YourCoinContainer, MarketPriceBox, YourCoinBox, InfoText } from "./Assets.style"
import { handleAwaitPrim } from "utils/handleAwait"
import { roundToHundredth } from "utils/roundToHundredth"
import { formatDateSlash } from 'utils/formatDate'
import { returnArrow, returnGreenOrRedCompare, returnGreenOrRedCondition } from "utils/returnGreenOrRed"
import CoinBar from "./CoinBar"

function EachAsset(props) {
    const [currentCoin, setCurrentCoin] = useState('')
    const [historyCoin, setHistoryCoin] = useState('')

    const historyCoinMarket = handleAwaitPrim(historyCoin, 'market_data')
    const historyCoinPrice = handleAwaitPrim(historyCoinMarket, 'current_price')

    const currencyType = useSelector((state) => state.persist.currency.currency )
    
    const { reduxAsset, allCoins, allHistoryCoins } = props
    const { id, amountOfCoin, datePurchased } = reduxAsset
    const amountInCurrency = (amountOfCoin * handleAwaitPrim(historyCoinPrice, `${currencyType}`)).toFixed(2)
    const priceOfEach = handleAwaitPrim(historyCoinPrice, `${currencyType}`)
    const image = handleAwaitPrim(currentCoin, 'image')

    useEffect(() => {
        // Find the one current coin that exists since id is unique, and add it as a state
        setCurrentCoin(allCoins.filter((each) => each.id === id)[0])
    }, [allCoins])
    

    useEffect(() => {
        // Find the one history coin that exists since id is unique, and add it as a state
        setHistoryCoin(allHistoryCoins.filter((each) => each.id === id)[0])
    }, [allHistoryCoins])


    return (
        <EachAssetWrapper>
            <CoinLabelBox>
                <AssetImage src={image}/>
                <AssetName>{handleAwaitPrim(currentCoin,'name')}</AssetName>
            </CoinLabelBox>

            <AssetInfoBoxes>

                {/* Market Price Box */}
                
                <MarketPriceContainer>
                    <AssetInfoBoxLabel>
                        Market Price
                    </AssetInfoBoxLabel>
                    <MarketPriceBox>
                        <InfoText>
                            Price: ${formatNumber(String(handleAwaitPrim(currentCoin, 'current_price')))}
                        </InfoText>
                        <InfoText>
                            Change 24h:
                            <p className={`ml-1 ${returnGreenOrRedCondition(handleAwaitPrim(currentCoin, 'price_change_percentage_24h') > 0)}`}>
                                {handleAwaitPrim(currentCoin, 'price_change_percentage_24h')}
                            </p>
                            {returnArrow(handleAwaitPrim(currentCoin, 'price_change_percentage_24h'), 0)}
                        </InfoText>
                        <InfoText>
                            Market Cap vs Volume: 
                            <CoinBar fraction={handleAwaitPrim(currentCoin, 'total_volume')} total={handleAwaitPrim(currentCoin, 'market_cap')}/>
                        </InfoText>
                        <InfoText>
                            Circulating vs Max:
                            <CoinBar fraction={handleAwaitPrim(currentCoin, 'circulating_supply')} total={handleAwaitPrim(currentCoin, 'total_supply')}/>
                        </InfoText>
                    </MarketPriceBox>
                </MarketPriceContainer>

                {/* Your Coin */}

                <YourCoinContainer>
                    <AssetInfoBoxLabel>
                        Your Coin
                    </AssetInfoBoxLabel>
                    <YourCoinBox>
                        <InfoText>
                            # of Coins: {roundToHundredth(amountOfCoin)} Coins
                        </InfoText>
                        <InfoText>
                            Amount Value: ${formatNumber(String(amountInCurrency))}
                        </InfoText>
                        <InfoText>  
                            Total Price Difference: 
                            <p className={`ml-1 ${returnGreenOrRedCompare(handleAwaitPrim(currentCoin, 'current_price'), priceOfEach)}`}>
                                ${(formatNumber(roundToHundredth(handleAwaitPrim(currentCoin, 'current_price') - priceOfEach) * roundToHundredth(amountOfCoin)))}
                            </p> 
                            {returnArrow(handleAwaitPrim(currentCoin, 'current_price'), priceOfEach)}
                        </InfoText>
                        <InfoText>
                            Date Purchased: {formatDateSlash(datePurchased)}
                        </InfoText>
                    </YourCoinBox>
                </YourCoinContainer>

            </AssetInfoBoxes>
        </EachAssetWrapper>
    )
}

export default EachAsset