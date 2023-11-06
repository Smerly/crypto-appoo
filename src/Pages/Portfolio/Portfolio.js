import { PrimaryComponentWrapper } from "App.style"
import { AddAssetsButton, PortfolioWrapper } from 'Pages/Portfolio/Portfolio.style'
import Assets from 'Components/AssetsComponent/Assets' 
import AddAsset from "Components/AssetsComponent/AddAsset/AddAsset"

function Portfolio() {
    return (
        <PrimaryComponentWrapper>
            <PortfolioWrapper>
                <AddAsset />
                <Assets />
            </PortfolioWrapper>
        </PrimaryComponentWrapper>
    )
}

export default Portfolio