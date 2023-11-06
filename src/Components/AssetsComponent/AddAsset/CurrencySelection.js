import { CurrencySelectionWrapper } from "../Assets.style"
import { formatNumber } from 'utils/formatNumber'

function CurrencySelection(props) {
    const currencyNameProps = props.currencyNameProps
    const { currency, setCurrency } = currencyNameProps
    return (
        <CurrencySelectionWrapper data-type="currency" value={currency} onChange={(e) => setCurrency(`$${formatNumber(e.target.value.slice(1))}`)} />
    )
}

export default CurrencySelection