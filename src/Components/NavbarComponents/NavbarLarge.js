
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { NavbarRespBig } from "Components/NavbarComponents/Navbar.style"
import SearchBar from "Components/NavbarComponents/SearchBar"
import CurrencyDropDown from "Components/NavbarComponents/CurrencyDropDown"
import { DarkMode } from "Components/NavbarComponents/Navbar.style"

function NavbarLarge() {
    const currencyType = useSelector((state) => state.persist.currency)
    return (
        <NavbarRespBig>
            <Link className='navbar-links' to='/'>
                Coins
            </Link>

            <Link className='navbar-links' to='/portfolio'>
                Portfolio
            </Link>

            <div className='ml-auto'>
                <SearchBar/>
            </div>

            <CurrencyDropDown currencyType={currencyType}/>

            <DarkMode>Temp DarkMode Button</DarkMode>
        </NavbarRespBig>
    )
}

export default NavbarLarge