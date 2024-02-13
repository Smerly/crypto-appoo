
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { NavLinksWrapper, NavbarRespBig, LogoSVG } from "Components/NavbarComponents/Navbar.style"
import SearchBar from "Components/NavbarComponents/SearchBar"
import CurrencyDropDown from "Components/NavbarComponents/CurrencyDropDown"
import { DarkMode, NavLinks } from "Components/NavbarComponents/Navbar.style"
import { useState } from "react"

function NavbarLarge(props) {
    const { location } = props
    const [lightState, setLightState] = useState(true)
    const currencyType = useSelector((state) => state.persist.currency)

    const toggleLight = () => setLightState(!lightState)
    return (
        <NavbarRespBig>
                <LogoSVG width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='svg-paths' d="M24 24H0V0C13.2533 0 24 10.7733 24 24Z"/>
                    <path className='svg-paths' d="M0 24H24V48C10.7467 48 0 37.2533 0 24Z"/>
                    <path className='svg-paths' d="M48 24H24V48C37.2533 48 48 37.2533 48 24Z"/>
                    <path className='svg-paths' d="M24 24H48V0C34.7467 0 24 10.7733 24 24Z"/>
                </LogoSVG>
                <NavLinks>

                    <Link className={`navbar-links hover:bg-primary ${location.pathname === '/' ? 'bg-primary' : ''}`} to='/'>
                        Coins
                    </Link>

                    <Link className={`navbar-links hover:bg-primary ${location.pathname === '/portfolio' ? 'bg-primary' : ''}`} to='/portfolio'>
                        Portfolio
                    </Link>
                </NavLinks>

            <div className='ml-auto'>
                <SearchBar/>
            </div>

            <CurrencyDropDown currencyType={currencyType}/>

            <DarkMode onClick={toggleLight} lightState={lightState}></DarkMode>
        </NavbarRespBig>
    )
}

export default NavbarLarge