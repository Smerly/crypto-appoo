import { NavbarRespBig, NavbarRespSmall, NavbarToggler, DarkMode, NavbarHidden } from "./Navbar.style"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"
import CurrencyDropDown from "./CurrencyDropDown"
import { useEffect, useState } from "react"
import { useWindowSize } from "../helpers/useWindowSize"

function NavbarSmall() {
    const [hidden, setHidden] = useState(true)
    const size = useWindowSize()
    useEffect(() => {
        if (size[0] > 1000 && hidden === false) {
            setHidden(false)
        }
    }, [useWindowSize()])
    return (
        <NavbarRespSmall>
            <Link className='navbar-links' to={`/`}>
                Coins
            </Link>

            <Link className='navbar-links' to={`/portfolio`}>
                Portfolio
            </Link>

            <NavbarToggler onClick={() => {
                setHidden(!hidden)
            }}/>


            <div className={`navbar-hidden bg-gray-200 ${hidden ? '' : 'show-navbar'}`}>
                <NavbarHidden>
                    hiASDASD
                </NavbarHidden>
            </div>

        </NavbarRespSmall>
    )
}

export default NavbarSmall