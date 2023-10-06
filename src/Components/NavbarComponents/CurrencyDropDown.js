
import { useEffect, useState } from 'react'
import { DropdownMenu, DropdownButton } from 'Components/NavbarComponents/Navbar.style'
import { getCoin } from 'helpers/getCoin'

function CurrencyDropDown() {
    const [hidden, setHidden] = useState(true)
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        getCoin('bitcoin').then((res) => setCurrencies(Object.keys(res.market_data.price_change_24h_in_currency)))
    }, [])

    const show = () => setHidden(!hidden)
    return (
        <div>
            <DropdownButton data-dropdown-toggle="dropdownRadioBgHover" className='dropdown-button bg-gray' onClick={show}>dropdown</DropdownButton>
            {/* The DropdownMenu at first is hidden */}
            <DropdownMenu id='dropdown' className={`dropdown h-52 w-32 ml-20 p-3 ${hidden ? '' : 'unhide'}`}>
                <ul>
                    {currencies.map((each) => <li>{each}</li>)}
                </ul>
            </DropdownMenu>
        </div>
    )
}

export default CurrencyDropDown
