import styled, { keyframes } from 'styled-components';
import tw from 'tailwind-styled-components';
import { useWindowSize } from '../helpers/useWindowSize';
import toggleIcon from '../images/toggler-icon.png'

export const NavbarBox = styled.div`
    width: 100vw;
    height: 5rem;
    background-color: #191B1F;
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const NavbarRespBig = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 100px;
    padding-right: 20px;
    width: 100%;
    background-color: #191B1F;
`

export const NavbarRespSmall = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 100px;
    padding-right: 20px;
    width: 100%;
    background-color: #191B1F;
`

export const NavbarToggler = styled.button`
    background: url(${toggleIcon});
    background-size: cover;
    width: 4rem;
    height: 4rem;
    margin-left: auto;
    &:hover {
        background-color: #1e2125;
    }
    border-radius: 10px;
    transition: 0.2s;
`

export const NavbarHidden = tw.div`
    flex
    flex-col
    h-full
`

export const DropdownButton = tw.button`
    rounded-lg 
    bg-gray 
    w-32 
    m-20 
    mt-1 
    mb-1 
    p-3

`

export const DropdownMenu = styled.div`


`

export const DarkMode = styled.button`
`