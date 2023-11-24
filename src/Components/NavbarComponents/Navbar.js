import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useWindowSize } from 'helpers/useWindowSize';
import { NavbarBox, NavbarRespBig, NavbarRespSmall, DarkMode, NavbarWrapper } from 'Components/NavbarComponents/Navbar.style';
import SearchBar from 'Components/NavbarComponents/SearchBar.js';
import CurrencyDropDown from 'Components/NavbarComponents/CurrencyDropDown';
import NavbarLarge from 'Components/NavbarComponents/NavbarLarge';
import NavbarSmall from 'Components/NavbarComponents/NavbarSmall';
import 'Components/NavbarComponents/Navbar.css'
import CoinNavBar from 'Components/CoinNavbar/CoinNavbar';

function Navbar() {
    const location = useLocation()
    return (
        <NavbarWrapper>
            <NavbarBox>
                {useWindowSize()[0] > 1000 ? <NavbarLarge location={location} /> : <NavbarSmall location={location} />}
            </NavbarBox>
            <CoinNavBar />
        </NavbarWrapper>
    )
}

export default Navbar