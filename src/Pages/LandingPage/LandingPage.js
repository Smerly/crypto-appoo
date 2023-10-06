import { useState } from 'react'
import './LandingPage.css'
import { LandingPageWrapper, CustomContainer } from './Landing.style'
import CoinList from '../../Components/CoinListComponent/CoinList'
import { getCoin } from '../../helpers/getCoin'

function LandingPage () {
    const [selectedCoin, setSelectedCoin] = useState()
    return (
        <LandingPageWrapper>
            <CustomContainer>
                <h1 className='text-3xl mt-5 title-header'> Overview </h1>
                <div className='graph-row'>
                    <div className='graph-box'></div>
                    <div className='graph-box'>
                    </div>
                </div>
                <CoinList />
            </CustomContainer>
        </LandingPageWrapper>
    )
}

export default LandingPage