import { useEffect, useState } from "react"
import { formatNumber } from "utils/formatNumber"
import { EachAssetWrapper, AssetImage, CoinLabelBox, AssetName, AssetInfoBoxes, AssetInfoBoxLabel, MarketPriceContainer, YourCoinContainer, MarketPriceBox, YourCoinBox, InfoText } from "./Assets.style"
import { handleAwaitPrim } from "utils/handleAwait"
import { roundToHundredth } from "utils/roundToHundredth"
import { returnArrow, returnGreenOrRedCompare, returnGreenOrRedCondition } from "utils/returnGreenOrRed"
import CoinBar from "./CoinBar"
import { useSelector } from "react-redux"

function EachAsset(props) {
    const [currentCoin, setCurrentCoin] = useState('')
    const CURRENTcy = useSelector((state) => state.persist.currency)

    const [currentPrice, setCurrentPrice] = useState(0)
    const { asset, allCoins } = props
    const { id, name, image, priceOfEach, amountInCurrency, amountOfCoin, datePurchased } = asset

    const dateFormatted = `${new Date(datePurchased).getMonth()+1}/${new Date(datePurchased).getDate()}/${new Date(datePurchased).getFullYear()}`

    useEffect(() => {
        setCurrentCoin(allCoins.filter((each) => each.id === id)[0])
    }, [allCoins])


    return (
        <EachAssetWrapper>
            <CoinLabelBox>
                <AssetImage src={image}/>
                <AssetName>{handleAwaitPrim(asset,'name')}</AssetName>
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
                            Price Difference: 
                            <p className={`ml-1 ${returnGreenOrRedCompare(handleAwaitPrim(currentCoin, 'current_price'), priceOfEach)}`}>
                                ${handleAwaitPrim(currentCoin, 'current_price') - priceOfEach}
                            </p> 
                            {returnArrow(handleAwaitPrim(currentCoin, 'current_price'), priceOfEach)}
                        </InfoText>
                        <InfoText>
                            Date Purchased: {dateFormatted}
                        </InfoText>
                    </YourCoinBox>
                </YourCoinContainer>

            </AssetInfoBoxes>
        </EachAssetWrapper>
    )
}

export default EachAsset