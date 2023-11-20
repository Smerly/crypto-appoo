import { AssetsWrapper } from "./Assets.style"
import { useSelector } from 'react-redux'
import EachAsset from "./EachAsset"
import { useEffect, useState } from "react"
import { getAllCoinsWithImages, getAllCoinsWithImagesNoPage, getHistoricalCoin } from "helpers/getCoin"
import { formatDateDash } from "utils/formatDate"


function Assets() {
    const [allCoins, setAllCoins] = useState([])
    const [allHistoryCoins, setAllHistoryCoins] = useState([])
    const [boughtCurrencyIds,  setBoughtCurrencyIds] = useState([])

    const currencyType = useSelector((state) => state.persist.currency)
    const purchasedCurrencies = useSelector((state) => state.persist.portfolio.currencies)

    useEffect(() => {
        setBoughtCurrencyIds(purchasedCurrencies.map((each) => each.id))    
    }, [purchasedCurrencies])

    useEffect(() => {
        // Get only the coins that we have purchased
        async function getAllCoinsFiltered() {
            // Call for all coins, then filter just the ones we need, setstate to allcoins
            try {
                const allCoinsWithImages = await getAllCoinsWithImagesNoPage(currencyType.currency)
                const filteredCoinsWithImages = allCoinsWithImages.filter((each) => {
                    return boughtCurrencyIds.includes(each.id)
                })
                setAllCoins(filteredCoinsWithImages)
            } catch (err) {
                console.log(err)
            }

        }

        async function setAllHistoricalCoins(eachId, eachDatePurchased) {
            try {
                const eachHistoricalCoin = await getHistoricalCoin(eachId, eachDatePurchased, currencyType.currency)
                if (!allHistoryCoins.includes(eachHistoricalCoin)) {
                    return setAllHistoryCoins([...allHistoryCoins, eachHistoricalCoin])
                }
            } catch (err) {
                console.log(err)
            }
        }

        // For every coin in purchased currencies, get the historical data for it.
        purchasedCurrencies.forEach((each) => setAllHistoricalCoins(each.id, formatDateDash(each.datePurchased)))
        getAllCoinsFiltered()
        
    }, [currencyType.currency, boughtCurrencyIds])

    return (
        <AssetsWrapper>
            {purchasedCurrencies.map((each) => {
                return <EachAsset key={each.id} reduxAsset={each} allCoins={allCoins} allHistoryCoins={allHistoryCoins} /> 
            })}
        </AssetsWrapper>
    )
}

export default Assets
