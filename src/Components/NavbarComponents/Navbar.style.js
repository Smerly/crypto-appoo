import styled, { keyframes } from 'styled-components';
import tw from 'tailwind-styled-components';
import toggleIcon from 'images/toggler-icon.png'

export const NavbarWrapper = styled.div`
background: linear-gradient(90deg, rgba(96,54,54,1) 0%, rgba(125,60,85,1) 12%, rgba(140,69,96,1) 30%, rgba(23,29,101,1) 54%, rgba(27,34,120,1) 61%, rgba(57,96,144,1) 79%, rgba(62,106,161,1) 87%, rgba(48,62,62,1) 100%);
`

export const NavbarBox = styled.div`
    width: 100vw;
    height: 5rem;
    background: linear-gradient(90deg, rgba(96,54,54,1) 0%, rgba(125,60,85,1) 12%, rgba(140,69,96,1) 30%, rgba(23,29,101,1) 54%, rgba(27,34,120,1) 61%, rgba(57,96,144,1) 79%, rgba(62,106,161,1) 87%, rgba(48,62,62,1) 100%);
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
    background: linear-gradient(90deg, rgba(96,54,54,1) 0%, rgba(170,69,108,1) 12%, rgba(140,69,96,1) 30%, rgba(23,29,101,1) 54%, rgba(27,34,120,1) 61%, rgba(57,96,144,1) 79%, rgba(62,106,161,1) 87%, rgba(48,62,62,1) 100%),
    linear-gradient(to right,black,white);`

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
    justify-center
    items-center
`

export const DropdownButton = tw.button`
    text-white
    rounded-lg 
    border-2
    border-gray-700
    border-solid
    bg-secondary
    w-32 
    m-20 
    mt-1 
    mb-1 
    p-3

`

export const DropdownMenu = styled.div`

`

export const DropdownList = styled.ul`

`

export const DarkMode = styled.button`
`

export const SearchBarWrapper = tw.form`
    bg-secondary
    rounded-xl
    border-2
    border-gray-700
    border-solid
`

export const SearchIconWrapper = tw.div`
    absolute 
    inset-y-0 
    left-0 flex 
    items-center 
    pl-3 
    pointer-events-none
`
export const SearchInput = tw.input`
    rounded-xl 
    h-11 
    w-full 
    ml-auto 
    p-4 
    pl-10 
    text-md 
    text-white 
    bg-secondary
`
export const EachCurrencyButton = tw.button`
    flex
    flex-row
`

export const NavLinks = tw.div`
    rounded-2xl
    bg-secondaryTransparent
    p-5
`