import { PrimaryComponentWrapper } from "App.style"
import { AddAssetsButton, PortfolioWrapper } from 'Pages/Portfolio/Portfolio.style'

function Portfolio() {
    return (
        <PrimaryComponentWrapper>
            <PortfolioWrapper>
                <AddAssetsButton>
                    Add Asset
                </AddAssetsButton>
            </PortfolioWrapper>
        </PrimaryComponentWrapper>
    )
}

export default Portfolio