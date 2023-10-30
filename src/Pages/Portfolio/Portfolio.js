import { PrimaryComponentWrapper } from "App.style"
import { AddAssetsButton, PortfolioWrapper } from 'Pages/Portfolio/Portfolio.style'
import Assets from 'Components/AssetsComponent/Assets' 
function Portfolio() {
    return (
        <PrimaryComponentWrapper>
            <PortfolioWrapper>
                <AddAssetsButton>
                    Add Asset
                </AddAssetsButton>
                <Assets />
            </PortfolioWrapper>
        </PrimaryComponentWrapper>
    )
}

export default Portfolio