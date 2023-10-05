import { NavbarBox, NavbarRespBig, NavbarRespSmall, DarkMode } from './Navbar.style';
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar.js';
import CurrencyDropDown from './CurrencyDropDown';
import { useWindowSize } from '../../helpers/useWindowSize';
import { useEffect, useState } from 'react';
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