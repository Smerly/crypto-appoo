import './LandingPage.css'
import { LandingPageWrapper, CustomContainer } from './Landing.style'
import CoinList from './CoinList/CoinList'
import { getCoin } from '../helpers/getCoin'
import { useState } from 'react'

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
                {[1,2,3,4,5,2,3,1,3,,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2].map(() => {
                        return (
                            <div>asdasdasd</div>
                        )
                    })}
            </CustomContainer>
        </LandingPageWrapper>
    )
}

export default LandingPage