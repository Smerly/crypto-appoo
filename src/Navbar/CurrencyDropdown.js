
import { DropdownMenu, DropdownButton } from './Navbar.style'
import { useState } from 'react'

function CurrencyDropDown() {
    const [hidden, setHidden] = useState(true)
    return (
        <div>
            <DropdownButton data-dropdown-toggle="dropdownRadioBgHover" className='dropdown-button bg-gray' onClick={() => {
                setHidden(!hidden)
            }}>dropdown</DropdownButton>
            {/* The DropdownMenu at first is hidden */}
            <DropdownMenu id='dropdown' className={`dropdown h-52 w-32 ml-20 p-3 ${hidden ? '' : 'unhide'}`}>
                <ul>
                    {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((each) => <li>{each}</li>)}

                </ul>
            </DropdownMenu>
        </div>
    )
}

export default CurrencyDropDown
