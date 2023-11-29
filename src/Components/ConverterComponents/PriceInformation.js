import { useSelector } from "react-redux"
import { PriceInfoWrapper } from "./Converter.style"
import { formatNumber } from "utils/formatNumber"

function PriceInformation (props) {
    const currencyType = useSelector((state) => state.persist.currency.currency)
    const { chosenCoin } = props

    if (chosenCoin.coinName) {
            return (
            <PriceInfoWrapper>
                1 {chosenCoin.coinName} = {formatNumber(chosenCoin.coinPrice)} {currencyType}
            </PriceInfoWrapper>
        )
    } else return ''
}

export default PriceInformation