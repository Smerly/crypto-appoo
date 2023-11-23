import tw from 'tailwind-styled-components'
import styled from 'styled-components'

export const Coins = tw.div`
    flex
    flex-col
    min-h-max
    bg-primary
    rounded-2xl
`

export const CoinsWrapper = styled.div`
    border-radius: 19px;
    border: double 2px transparent;
    background-image: linear-gradient(#191B1F, #191B1F),  linear-gradient(180deg, rgba(60,60,60,1) 0%, rgba(30,30,30,1) 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    margin-top: 5rem;
`

export const EachCoinWrapper = tw.div`
    w-11/12
    flex
    flex-row
    items-center
    border-b-2
    text-white
    h-20
    ml-2
    pl-10

`

export const EachCoinMap = tw.div`
    flex 
    flex-col 
    items-center
`
export const CoinTitle = tw.div`

`

export const CoinHeader = tw.div`
    m-5
    text-sm
`

export const CoinName = tw.button`
    flex
    flex-row
    justify-center
    items-center
    text-sm
    ml-8
`

export const CoinImage = tw.img`
    w-8
    h-8
    mr-2
`

export const CoinBar = styled.div`
    height: 5px;
    width: 150px;
    background-color: white;
    margin: 0.5rem;
    margin-top: 0px;
    border-radius: 10px;
`

export const Last7DGraph = tw.div`
    w-40
    h-20
    mr-1
    flex
    flex-row
    justify-center
    items-center
    ml-auto

`

export const CoinBarWrapper = tw.div`
    flex
    flex-col
`

export const CoinBarLabel = tw.div`
    flex
    flex-row
    ml-2
`

export const CoinBarLeft = styled.div`
    width: ${(props) => {
        return `${props.percentageOwned * 1.5}px`
    }};
    height: 5px;
    background-color: green;
    border-radius: 5px;
`

export const LabelRight = tw.div`
    ml-auto
    mr-2
`

export const EachCoinSelection = tw.button`
    flex
    flex-row
`
