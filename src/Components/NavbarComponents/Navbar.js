import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useWindowSize } from 'helpers/useWindowSize';
import { NavbarBox, NavbarRespBig, NavbarRespSmall, DarkMode } from 'Components/NavbarComponents/Navbar.style';
import SearchBar from 'Components/NavbarComponents/SearchBar.js';
import CurrencyDropDown from 'Components/NavbarComponents/CurrencyDropDown';
import NavbarLarge from 'Components/NavbarComponents/NavbarLarge';
import NavbarSmall from 'Components/NavbarComponents/NavbarSmall';
import 'Components/NavbarComponents/Navbar.css'

function Navbar() {
    return (
        <NavbarBox>
            {useWindowSize()[0] > 1000 ? <NavbarLarge /> : <NavbarSmall />}
        </NavbarBox>
    )
}

export default Navbar