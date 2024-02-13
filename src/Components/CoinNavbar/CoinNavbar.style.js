import tw from "tailwind-styled-components";
import styled from 'styled-components';

export const CoinNavbarWrapper = tw.div`
    w-screen
    left-1/3
    flex
    flex-row
    items-center
    h-10
    py-10
    border-b-2
    border-dividerGray
    border-solid
    pl-36
`

export const CoinNavbarDivider = tw.div`
    w-0.5
    h-6
    bg-dividerGray
    mx-5
`

export const CoinNavbarText = tw.p`
    flex
    flex-row
    items-center
    text-white
    mx-1
    text-lg
    font-medium
    text-center
`

export const CoinNavbarLabel = tw.p`
    flex
    flex-row
    items-center
    text-gray-300
    text-md
    mr-2
    font-medium
    text-center
`

export const CoinNavbarBarWrapper = styled.div`
    height: 10px;
    width: 50px;
    background-color: #2172E5;
    border-radius: 20px;
`

export const CoinNavbarBarFilled = styled.div`
    height: 10px;
    width: ${(props) => {
        const fraction = Number(props.fraction)
        const total = props.total
        const percentage = fraction / total
        return (50 * percentage)

    }}px;
    background-color: white;
    border-radius: 20px;
`

export const SmallImage = tw.img`
    w-3
    h-3
    m-2
`