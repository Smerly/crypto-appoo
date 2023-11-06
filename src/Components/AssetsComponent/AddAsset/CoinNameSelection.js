import { useEffect, useState } from "react"
import { CoinNameInput, SearchOutput, CoinNameSelectionWrapper } from "../Assets.style"
import { returnOnCondition } from "utils/returnOnCondition"
import { EachCoinSelection } from "Components/CoinListComponent/CoinList.style"
function CoinNameSelection(props) {
    const coinNameProps = props.coinNameProps
    const { coinSearch, setCoinSearch, coinNames, coinImages, setCoinImages, chosenCoin, setChosenCoin, selectedCoinImage, setSelectedCoinImage } = coinNameProps
    const coins = ['1','2', '3', '4', '5' ,'6', '7', '8', '9', '10']

    const handleCoinSelection = (coin) => {
        setChosenCoin(coin)
        setSelectedCoinImage(coinImages.filter((each) => each[1] === coin[1])[0])
        setCoinSearch('')
    }

    const FilteredOutput = <SearchOutput>
                                {coinNames.filter((each) => {
                                    return each[0].toLowerCase().includes(coinSearch)
                                }).map((each) => {   
                                        return (
                                            <EachCoinSelection onClick={() => handleCoinSelection(each)}> {each[0]} </EachCoinSelection>
                                        )                
                                })}
                            </SearchOutput>
    return (
        <CoinNameSelectionWrapper>
            <CoinNameInput type="text" value={coinSearch} placeholder='Search Coin...' onChange={(e) => setCoinSearch(e.target.value)}/>
            {returnOnCondition(FilteredOutput, () => coinSearch.length > 0)}
        </CoinNameSelectionWrapper>
    )
}

export default CoinNameSelection