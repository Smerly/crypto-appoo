import { CoinQueryListImage, EachFilteredCoin, FilteredList } from "./Converter.style"



function FilteredOptions(props) {
    const { coinList, coinInput, setCoinInput, setChosenCoin } = props

    const filteredCoinList = coinList.filter((each) => each.name.toLowerCase().includes(coinInput.toLowerCase()))

    const setToChosen = (coin) => {
        setCoinInput(coin)
    }

    const handleChooseCoin = (each) => {
        setChosenCoin({coinId: each.id, coinName: each.name, coinImage: each.image, coinPrice: each.current_price})
        setToChosen(each.name)
    }

    return (
        <FilteredList>
            {filteredCoinList.map((each) => {
                return (
                    <EachFilteredCoin key={each.id} onClick={() => handleChooseCoin(each)}>
                        <CoinQueryListImage src={each.image} />
                        {each.name}
                    </EachFilteredCoin>
                )
            })}
        </FilteredList>
    )
}

export default FilteredOptions