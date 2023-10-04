import { NavbarRespBig, NavbarRespSmall, NavbarToggler, DarkMode, NavbarHidden } from "./Navbar.style"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import CurrencyDropDown from "./CurrencyDropDown"
import { useEffect, useState } from "react"
import { useWindowSize } from "../helpers/useWindowSize"

function NavbarSmall() {
    // UseState Vars
    const [hidden, setHidden] = useState(true)
    // Getting the current window size with custom hook
    const size = useWindowSize()
    // Whenever window size changes, check and adjust for size
    useEffect(() => {
        if (size[0] > 1000 && hidden === false) {
            setHidden(false)
        }
    }, [size])
    return (
        <NavbarRespSmall>
            <Link className='navbar-links' to='/'>
                Coins
            </Link>

            <Link className='navbar-links' to='/portfolio'>
                Portfolio
            </Link>

            <NavbarToggler onClick={() => {
                setHidden(!hidden)
            }}/>


            <div className={`navbar-hidden ${hidden ? '' : 'show-navbar'}`}>
                <NavbarHidden>
                        <SearchBar/>
                <CurrencyDropDown />

                    <DarkMode>Temp DarkMode Button</DarkMode>
                </NavbarHidden>
            </div>

        </NavbarRespSmall>
    )
}

export default NavbarSmall