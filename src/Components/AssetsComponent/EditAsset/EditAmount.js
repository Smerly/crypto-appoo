import { formatCurrencyAmount } from "utils/formatNumber"
import { CurrencySelectionWrapper } from "../Assets.style"

function EditAmount(props) {
    const { currencyAmount, setCurrencyAmount } = props
    return (
        <CurrencySelectionWrapper data-type="currency" 
        value={currencyAmount} 
        onChange={(e) => setCurrencyAmount(formatCurrencyAmount(e.target.value))} 
        />
    )
}

export default EditAmount