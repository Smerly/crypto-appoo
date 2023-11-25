import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LandingPageWrapper, CustomContainer, Tester, LandingNavLink, LandingNavbar } from 'Pages/LandingPage/Landing.style'
import CoinList from 'Components/CoinListComponent/CoinList.ts'
import { getCoin } from 'helpers/getCoin'
import 'Pages/LandingPage/LandingPage.css'
import LineGraph from 'Components/OverviewComponents/LineGraph'
import BarGraph from 'Components/OverviewComponents/BarGraph'

function LandingPage () {
    const [selectedCoin, setSelectedCoin] = useState()
    return (
        <LandingPageWrapper>
            <CustomContainer>
                <LandingNavbar>
                    <LandingNavLink>
                        <Link>
                            Coins
                        </Link>
                    </LandingNavLink>

                    <LandingNavLink>
                        <Link>
                            Converter
                        </Link>
                    </LandingNavLink>
                </LandingNavbar>
                <h1 className='text-3xl mt-5 title-header'> Overview </h1>
                <div className='graph-row'>
                    {/* <Tester /> */}
                    <div className='graph-box'> 
                        <LineGraph /> 
                    </div>
                    <div className='graph-box'>
                        <BarGraph />
                    </div>
                </div>
                <CoinList />
            </CustomContainer>
        </LandingPageWrapper>
    )
}

export default LandingPage