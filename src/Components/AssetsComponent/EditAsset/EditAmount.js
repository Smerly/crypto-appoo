import { formatNumber } from "utils/formatNumber"
import { CurrencySelectionWrapper } from "../Assets.style"

function EditAmount(props) {
    const { currencyAmount, setCurrencyAmount } = props
    return (
        <CurrencySelectionWrapper data-type="currency" 
        value={currencyAmount} 
        onChange={(e) => setCurrencyAmount(`$${formatNumber(e.target.value.slice(1))}`)} 
        />
    )
}

export default EditAmount