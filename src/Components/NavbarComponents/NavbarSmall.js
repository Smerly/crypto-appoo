import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { NavbarRespBig, NavbarRespSmall, NavbarToggler, DarkMode, NavbarHidden } from "Components/NavbarComponents/Navbar.style"
import SearchBar from "Components/NavbarComponents/SearchBar"
import CurrencyDropDown from "Components/NavbarComponents/CurrencyDropDown"
import { useWindowSize } from "helpers/useWindowSize"

function NavbarSmall() {
    // UseState Vars
    const [hidden, setHidden] = useState(true)
    // Getting the current window size with custom hook
    const size = useWindowSize()

    const show = () => setHidden(!hidden)

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

            <NavbarToggler onClick={show}/>


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