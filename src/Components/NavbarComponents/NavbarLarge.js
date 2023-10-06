
import { Link } from "react-router-dom"
import { NavbarRespBig } from "./Navbar.style"
import SearchBar from "./SearchBar"
import CurrencyDropDown from "./CurrencyDropDown"
import { DarkMode } from "./Navbar.style"

function NavbarLarge() {
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

            <CurrencyDropDown />

            <DarkMode>Temp DarkMode Button</DarkMode>
        </NavbarRespBig>
    )
}

export default NavbarLarge