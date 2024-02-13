import styled, { keyframes } from 'styled-components';
import tw from 'tailwind-styled-components';
import toggleIcon from 'images/toggler-icon.png'
import lightbulb from 'images/lightbulb.png'

export const NavbarWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const NavbarBox = styled.div`
    border-bottom: 2px rgba(40,40,40, 0.3) solid;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    width: 100vw;
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const NavbarRespBig = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 7rem;
    padding-right: 4rem;
    width: 100%;    
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
    justify-center
    items-center
`

export const DropdownButton = tw.button`
    text-white
    rounded-lg 
    bg-primary
    w-32 
    p-3

`
export const DropdownButtonWrapper = styled.div` 
    border-radius: 12px;
    border: double 2px transparent;
    background-image: linear-gradient(rgba(31,31,40,1), rgba(31,31,40,1)),  linear-gradient(180deg, rgba(60,60,60,1) 0%, rgba(30,30,30,1) 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;

`

export const DropdownMenu = styled.div`

`

export const DropdownList = styled.ul`

`

export const DarkMode = styled.button`
    background: url(${lightbulb});
    background-size: contain;
    width: 3rem;
    height: 3rem;
    ${(props) => props.lightState ? 'filter: invert(1)' : ''}
`

export const SearchBarWrapper = styled.form`
    border-radius: 11px;
    border: double 2px transparent;
    background-image: linear-gradient(white, white),  linear-gradient(180deg, rgba(60,60,60,1) 0%, rgba(30,30,30,1) 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
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
    outline-0
    rounded-lg
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
    flex
    flex-row
    rounded-2xl
    bg-secondaryTransparent

`

export const NavLinksWrapper = styled.div`
    border-radius: 19px;
    border: double 2px transparent;
    background-image: linear-gradient(rgba(31,31,40,1), rgba(31,31,40,1)),  linear-gradient(180deg, rgba(100,100,100,1) 0%, rgba(60,60,60,1) 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
`

export const LogoSVG = tw.svg`
    mx-5
    mr-10
`