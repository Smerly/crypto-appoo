import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrency } from 'redux/currencySlice'
import { DropdownMenu, DropdownButton, EachCurrencyButton, DropdownList } from 'Components/NavbarComponents/Navbar.style'
import { getCoin } from 'helpers/getCoin'

function CurrencyDropDown() {
    const dispatch = useDispatch()
    const currencyType = useSelector((state) => state.persist.currency)

    const [hidden, setHidden] = useState(true)
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        getCoin('bitcoin').then((res) => setCurrencies(Object.keys(res.market_data.price_change_24h_in_currency)))
    }, [])

    const show = () => setHidden(!hidden)
    return (
        <div>
            <DropdownButton data-dropdown-toggle="dropdownRadioBgHover" onClick={show}>{currencyType.currency}</DropdownButton>
            {/* The DropdownMenu's initial state is hidden */}
            <DropdownMenu id='dropdown' className={`dropdown h-52 w-32 ml-20 p-3 ${hidden ? '' : 'unhide'}`}>
                <DropdownList>
                    {currencies.map((each) => <EachCurrencyButton key={each} value={each} onClick={(e) => {
                            show()
                            dispatch(changeCurrency({currency: String(each)}))
                    }}>{each}</EachCurrencyButton>)}
                </DropdownList>
            </DropdownMenu>
        </div>
    )
}

export default CurrencyDropDown
