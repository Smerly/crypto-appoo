import { AssetsWrapper } from "./Assets.style"
import { useSelector } from 'react-redux'
import EachAsset from "./EachAsset"
import { useEffect, useState } from "react"
import { getAllCoinsWithImages, getHistoricalCoin } from "helpers/getCoin"
import { current } from "@reduxjs/toolkit"


function Assets() {
    const [allCoins, setAllCoins] = useState([])
    const [allHistoryCoins, setAllHistoryCoins] = useState([])
    const currencyType = useSelector((state) => state.persist.currency)
    const purchasedCurrencies = useSelector((state) => state.persist.portfolio.currencies)

    const boughtCurrencyIds = purchasedCurrencies.map((each) => each.id)

    useEffect(() => {
        // Get only the coins that we have purchased
        getAllCoinsWithImages(currencyType.currency).then((res) => setAllCoins(res.filter((each) => boughtCurrencyIds.includes(each.id))))
        // Get coins history that we have purchased
        setAllHistoryCoins(purchasedCurrencies.map((each) => getHistoricalCoin(each, each.datePurchased, currencyType.currency).then((res) => res)))
    }, [currencyType.currency])

    console.log(allHistoryCoins)
    console.log(allCoins)

    // redux only record id, name, priceWhenBought
    // In assets:
        // Make api call to get current data with redux id (done)
        // Make api call to get historical data with redux id

    
    

    return (
        <AssetsWrapper>
            {purchasedCurrencies.map((each) => {
                return <EachAsset key={each.id} asset={each} allCoins={allCoins} /> 
            })}
        </AssetsWrapper>
    )
}

export default Assets
