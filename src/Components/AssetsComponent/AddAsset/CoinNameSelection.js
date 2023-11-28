import { useEffect, useState } from "react"
import { CoinNameInput, SearchOutput, CoinNameSelectionWrapper } from "../Assets.style"
import { returnOnCondition } from "utils/returnOnCondition"
import { EachCoinSelection } from "Components/CoinListComponent/CoinList.style"
import FilteredOutput from "./FilteredOutput"

function CoinNameSelection(props) {
    const [ifSelected, setIfSelected] = useState(false)
    
    const coinNameProps = props.coinNameProps
    const { coinSearch, setCoinSearch, coinNames, coinImages, setCoinImages, chosenCoin, setChosenCoin, selectedCoinImage, setSelectedCoinImage } = coinNameProps
    const coins = ['1','2', '3', '4', '5' ,'6', '7', '8', '9', '10']

    const handleCoinSelection = (coin) => {
        setChosenCoin(coin)
        setSelectedCoinImage(coinImages.filter((each) => each[1] === coin[1])[0])
        setCoinSearch('')
    }

    const handleFocused = () => {
            setTimeout(() => {
            setIfSelected(true)
        }, 100);
    }
    const handleBlurred = () => { 
            setTimeout(() => {
            setIfSelected(false)
        }, 100);
    }

    return (
        <CoinNameSelectionWrapper>
            <CoinNameInput type="text" value={coinSearch} onFocus={handleFocused} onBlur={handleBlurred} placeholder='Search Coin...' onChange={(e) => setCoinSearch(e.target.value)}/>
            {returnOnCondition(<FilteredOutput coinNames={coinNames} coinSearch={coinSearch} handleCoinSelection={handleCoinSelection} />, () => ifSelected)}
        </CoinNameSelectionWrapper>
    )
}

export default CoinNameSelection