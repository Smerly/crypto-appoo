import { EachAssetWrapper, AssetImage, CoinLabelBox, AssetName, AssetInfoBoxes, AssetInfoBoxLabel, MarketPriceContainer, YourCoinContainer, MarketPriceBox, YourCoinBox } from "./Assets.style"
import { handleAwaitPrim } from "utils/handleAwait"
function EachAsset(props) {
    const { asset } = props
    return (
        <EachAssetWrapper>
            <CoinLabelBox>
                <AssetImage src={handleAwaitPrim(asset, 'image')}/>
                <AssetName>{handleAwaitPrim(asset,'name')}</AssetName>
            </CoinLabelBox>

            <AssetInfoBoxes>

                {/* Market Price Box */}
                
                <MarketPriceContainer>
                    <AssetInfoBoxLabel>
                        Market Price
                    </AssetInfoBoxLabel>
                    <MarketPriceBox>

                    </MarketPriceBox>
                </MarketPriceContainer>

                {/* Your Coin */}

                <YourCoinContainer>
                    <AssetInfoBoxLabel>
                        Your Coin
                    </AssetInfoBoxLabel>
                    <YourCoinBox>

                    </YourCoinBox>
                </YourCoinContainer>

            </AssetInfoBoxes>
        </EachAssetWrapper>
    )
}

export default EachAsset