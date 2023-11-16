import { AssetsWrapper } from "./Assets.style"
import { useSelector } from 'react-redux'
import EachAsset from "./EachAsset"
import { useEffect, useState } from "react"
import { getAllCoinsWithImages, getHistoricalCoin } from "helpers/getCoin"
import { current } from "@reduxjs/toolkit"
import { formatDateDash } from "utils/formatDate"


function Assets() {
    const [allCoins, setAllCoins] = useState([])
    const [allHistoryCoins, setAllHistoryCoins] = useState([])
    const currencyType = useSelector((state) => state.persist.currency)
    const purchasedCurrencies = useSelector((state) => state.persist.portfolio.currencies)

    // https://api.coingecko.com/api/v3/coins/bitcoin/history?date=2023-11-16

    const boughtCurrencyIds = purchasedCurrencies.map((each) => each.id)

    useEffect(() => {
        // Get only the coins that we have purchased
        getAllCoinsWithImages(currencyType.currency).then((res) => setAllCoins(res))
        setAllCoins(allCoins.filter((each) => boughtCurrencyIds.includes(each.id)))
        // Get coins history that we have purchased
        purchasedCurrencies.map((each) => getHistoricalCoin(each.id, formatDateDash(each.datePurchased), currencyType.currency).then((res) => setAllHistoryCoins([...allHistoryCoins, res])))
    }, [currencyType.currency])

    console.log(allHistoryCoins)

    // redux only record id, name, priceWhenBought
    // In assets:
        // Make api call to get current data with redux id (done)
        // Make api call to get historical data with redux id (done)

    return (
        <AssetsWrapper>
            {purchasedCurrencies.map((each) => {
                return <EachAsset key={each.id} asset={each} allCoins={allCoins} allHistoryCoins={allHistoryCoins} /> 
            })}
        </AssetsWrapper>
    )
}

export default Assets
