import { useState } from 'react'
import { LandingPageWrapper, CustomContainer } from 'Pages/LandingPage/Landing.style'
import CoinList from 'Components/CoinListComponent/CoinList'
import { getCoin } from 'helpers/getCoin'
import 'Pages/LandingPage/LandingPage.css'
import LineGraph from 'Components/OverviewComponents/LineGraph'

function LandingPage () {
    const [selectedCoin, setSelectedCoin] = useState()
    return (
        <LandingPageWrapper>
            <CustomContainer>
                <h1 className='text-3xl mt-5 title-header'> Overview </h1>
                <div className='graph-row'>
                    <div className='graph-box'> 
                        <LineGraph /> 
                    </div>
                    <div className='graph-box'></div>
                </div>
                <CoinList />
            </CustomContainer>
        </LandingPageWrapper>
    )
}

export default LandingPage