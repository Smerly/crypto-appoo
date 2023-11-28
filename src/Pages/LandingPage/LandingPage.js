import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LandingPageWrapper, CustomContainer, Tester, LandingNavLink, LandingNavbar, CoinsButton, ConverterButton } from 'Pages/LandingPage/Landing.style'
import CoinList from 'Components/CoinListComponent/CoinList'
import Converter from 'Components/ConverterComponents/Converter'
import Overview from 'Components/OverviewComponents/Overview'
import { getCoin } from 'helpers/getCoin'
import LineGraph from 'Components/OverviewComponents/LineGraph'
import BarGraph from 'Components/OverviewComponents/BarGraph'

function LandingPage () {
    const [selectedCoin, setSelectedCoin] = useState()
    const [landingTab, setLandingTab] = useState('coins')

    const setCoinTab = () => setLandingTab('coins')
    const setConverterTab = () => setLandingTab('converter')
    
    return (
        <LandingPageWrapper>
            <CustomContainer>
                <LandingNavbar>
                    <CoinsButton tab={landingTab} onClick={setCoinTab}>
                            Coins
                    </CoinsButton>

                    <ConverterButton tab={landingTab} onClick={setConverterTab}>
                            Converter
                    </ConverterButton>
                </LandingNavbar>
                {landingTab === 'coins' ? <Overview /> : <Converter />}
                <CoinList />
            </CustomContainer>
        </LandingPageWrapper>
    )
}

export default LandingPage