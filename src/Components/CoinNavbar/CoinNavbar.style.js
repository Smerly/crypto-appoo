import tw from "tailwind-styled-components";
import styled from 'styled-components';

export const CoinNavbarWrapper = tw.div`
    absolute
    left-1/3
    flex
    flex-row
    items-center
    bg-primary
    w-2/5
    h-10
    p-5
`

export const CoinNavbarText = tw.p`
<<<<<<< HEAD
    flex
    flex-row
    text-white
    mx-1
=======
    text-white
    m-3
>>>>>>> MainChartsLandingDev
    text-sm
`

export const CoinNavbarBarWrapper = styled.div`
    height: 10px;
    width: 50px;
    background-color: #2172E5;
    border-radius: 20px;
`

export const CoinNavbarBarFilled = styled.div`
    height: 10px;
<<<<<<< HEAD
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
=======
    width: 10px;
    background-color: white;
    border-radius: 20px;
>>>>>>> MainChartsLandingDev
`