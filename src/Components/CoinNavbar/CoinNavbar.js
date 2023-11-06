import { useEffect, useState } from "react";
import { getGlobalData } from "helpers/getCoin";
import { CoinNavbarWrapper, CoinNavbarText } from "./CoinNavbar.style";
import CoinNavbarBar from "./CoinNavbarBar";


function CoinNavbar () {
    const [globalData, setGlobalData] = useState({})

    useEffect(() => {
        getGlobalData().then((res) => setGlobalData(res))
    }, [])

    return (
        <CoinNavbarWrapper>
            <CoinNavbarText>
                Coins: 
            </CoinNavbarText>
            <CoinNavbarText>
                Exchange:
            </CoinNavbarText>
            <CoinNavbarText>
                Total Money:
            </CoinNavbarText>

            <CoinNavbarText>
                Another Money:
            </CoinNavbarText>
            <CoinNavbarBar />

            <CoinNavbarText>

            </CoinNavbarText>
            <CoinNavbarBar />

            <CoinNavbarText>
                
            </CoinNavbarText>
            <CoinNavbarBar />

        </CoinNavbarWrapper>
    )
}

export default CoinNavbar