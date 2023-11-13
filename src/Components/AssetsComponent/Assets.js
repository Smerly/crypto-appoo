import { AssetsWrapper } from "./Assets.style"
import { useSelector } from 'react-redux'
import EachAsset from "./EachAsset"
import { useEffect, useState } from "react"
import { getAllCoinsWithImages } from "helpers/getCoin"


function Assets() {
    const [allCoins, setAllCoins] = useState([])

    const currencyType = useSelector((state) => state.persist.currency)
    const purchasedCurrencies = useSelector((state) => state.persist.portfolio.currencies)
    useEffect(() => {
        getAllCoinsWithImages(currencyType.currency).then((res) => setAllCoins(res))
    }, [currencyType.currency])

    return (
        <AssetsWrapper>
            {purchasedCurrencies.map((each) => {
                return <EachAsset key={each.id} asset={each} allCoins={allCoins} /> 
            })}
        </AssetsWrapper>
    )
}

export default Assets
