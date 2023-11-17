import { AssetsWrapper } from "./Assets.style"
import { useSelector } from 'react-redux'
import EachAsset from "./EachAsset"
import { useEffect, useState } from "react"
import { getAllCoinsWithImages, getHistoricalCoin } from "helpers/getCoin"
import { formatDateDash } from "utils/formatDate"


function Assets() {
    const [allCoins, setAllCoins] = useState([])
    const [allHistoryCoins, setAllHistoryCoins] = useState([])
    
    const currencyType = useSelector((state) => state.persist.currency)
    const purchasedCurrencies = useSelector((state) => state.persist.portfolio.currencies)

    const boughtCurrencyIds = purchasedCurrencies.map((each) => each.id)

    useEffect(() => {
        // Get only the coins that we have purchased
        getAllCoinsWithImages(currencyType.currency).then((res) => res ? setAllCoins(res) : setAllCoins([]))
        setAllCoins(allCoins.filter((each) => boughtCurrencyIds.includes(each.id)))
        // Get coins history that we have purchased
        purchasedCurrencies.map((each) => getHistoricalCoin(each.id, formatDateDash(each.datePurchased), currencyType.currency).then((res) => setAllHistoryCoins([...allHistoryCoins, res])))
    }, [currencyType.currency])

    return (
        <AssetsWrapper>
            {purchasedCurrencies.map((each) => {
                return <EachAsset key={each.id} reduxAsset={each} allCoins={allCoins} allHistoryCoins={allHistoryCoins} /> 
            })}
        </AssetsWrapper>
    )
}

export default Assets
