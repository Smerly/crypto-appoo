import { AssetsWrapper } from "./Assets.style"
import { useSelector } from 'react-redux'
import EachAsset from "./EachAsset"
import { useEffect, useState } from "react"
import { getAllCoinsWithImages, getHistoricalCoin } from "helpers/getCoin"
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
        // Promise.all([
        //     allCoinsWithImages
        // ])
        // Get only the coins that we have purchased
        async function getAllCoinsFiltered() {
            try {
                const allCoinsWithImages = await getAllCoinsWithImages(currencyType.currency)
                const filteredCoinsWithImages = allCoinsWithImages
                // .filter((each) => boughtCurrencyIds.includes(each.id))
                setAllCoins(filteredCoinsWithImages)
            } catch (err) {
                console.log(err)
            }
            purchasedCurrencies.map((each) => getHistoricalCoin(each.id, formatDateDash(each.datePurchased), currencyType.currency).then((res) => {
                if (!allHistoryCoins.includes(res)) {
                    return setAllHistoryCoins([...allHistoryCoins, res])
                }
            }).catch((err) =>  {
                console.log(err)
            }))

        }
        getAllCoinsFiltered()
        // getAllCoinsWithImages(currencyType.currency).then((res) => res ? setAllCoins(res) : setAllCoins([]))
        // setAllCoins(allCoins.filter((each) => boughtCurrencyIds.includes(each.id)))
        
        // Get coins history that we have purchased
        // console.log(purchasedCurrencies)
        // console.log(`allcoins:${allCoins}`)

        // console.log(allCoins)
        // console.log(`allhistorycoins${allHistoryCoins}`)
        // console.log(allHistoryCoins)
        console.log(allCoins)
        console.log(allHistoryCoins)
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
