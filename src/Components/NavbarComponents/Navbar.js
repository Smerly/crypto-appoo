import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useWindowSize } from '../../helpers/useWindowSize';
import { NavbarBox, NavbarRespBig, NavbarRespSmall, DarkMode } from './Navbar.style';
import SearchBar from './SearchBar.js';
import CurrencyDropDown from './CurrencyDropDown';
import NavbarLarge from './NavbarLarge';
import NavbarSmall from './NavbarSmall';
import './Navbar.css'

function Navbar() {
    return (
        <NavbarBox>
            {useWindowSize()[0] > 1000 ? <NavbarLarge /> : <NavbarSmall />}
        </NavbarBox>
    )
}

export default Navbar