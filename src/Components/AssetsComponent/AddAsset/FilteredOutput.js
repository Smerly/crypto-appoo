import { EachCoinSelection } from "Components/CoinListComponent/CoinList.style"
import { SearchOutput } from "../Assets.style"

function FilteredOutput(props) {
    const { coinNames, coinSearch, handleCoinSelection } = props
    return (
        <SearchOutput>
            {coinNames.filter((each) => {
                return each[0].toLowerCase().includes(coinSearch)
            }).map((each) => {   
                    return (
                        <EachCoinSelection onClick={() => handleCoinSelection(each)}> {each[0]} </EachCoinSelection>
                    )                
            })}
        </SearchOutput>
    )
}

export default FilteredOutput