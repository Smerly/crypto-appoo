import { useState } from "react"
import { SelectionFields, DropdownSelection} from "../Assets.style"
import CoinNameSelection from "./CoinNameSelection"
import CurrencySelection from "./CurrencySelection"
import DateTimeSelection from "./DateTimeSelection"

function SelectionFieldsComp(props) {
    const { selectCoinProps } = props
    const { coinSearch, setCoinSearch, currency, setCurrency, date, setDate, coinNames, coinImages, setCoinImages, chosenCoin, setChosenCoin, selectedCoinImage, setSelectedCoinImage } = selectCoinProps

    const coinNameProps = {
        coinSearch: coinSearch, 
        setCoinSearch: setCoinSearch, 
        coinNames: coinNames,
        coinImages: coinImages,
        setCoinImages, setCoinImages,
        chosenCoin: chosenCoin,
        setChosenCoin: setChosenCoin,
        selectedCoinImage: selectedCoinImage,
        setSelectedCoinImage: setSelectedCoinImage
    }
    const currencyNameProps = {
        currency: currency,
        setCurrency: setCurrency
    }
    const dateNameProps = {
        date: date,
        setDate: setDate
    }
    return (
        <SelectionFields>
            <CoinNameSelection coinNameProps={coinNameProps} />
            <CurrencySelection currencyNameProps={currencyNameProps}/>
            <DateTimeSelection dateNameProps={dateNameProps} />
        </SelectionFields>
    )
}
export default SelectionFieldsComp