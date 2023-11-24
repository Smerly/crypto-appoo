
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { NavLinksWrapper, NavbarRespBig } from "Components/NavbarComponents/Navbar.style"
import SearchBar from "Components/NavbarComponents/SearchBar"
import CurrencyDropDown from "Components/NavbarComponents/CurrencyDropDown"
import { DarkMode, NavLinks } from "Components/NavbarComponents/Navbar.style"
import { useState } from "react"

function NavbarLarge() {
    const [lightState, setLightState] = useState(true)
    const currencyType = useSelector((state) => state.persist.currency)

    const toggleLight = () => setLightState(!lightState)
    return (
        <NavbarRespBig>
            {/* <NavLinksWrapper> */}
                <NavLinks>
                    <Link className='navbar-links hover:bg-primary' to='/'>
                        Coins
                    </Link>

                    <Link className='navbar-links hover:bg-primary' to='/portfolio'>
                        Portfolio
                    </Link>
                </NavLinks>
            {/* </NavLinksWrapper> */}

            <div className='ml-auto'>
                <SearchBar/>
            </div>

            <CurrencyDropDown currencyType={currencyType}/>

            <DarkMode onClick={toggleLight} lightState={lightState}></DarkMode>
        </NavbarRespBig>
    )
}

export default NavbarLarge