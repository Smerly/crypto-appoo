import { styled } from "styled-components";
import tw from "tailwind-styled-components";

export const BorderWrapper = styled.div`
    border-radius: 19px;
    border: double 2px transparent;
    background-image: linear-gradient(#191B1F, #191B1F),  linear-gradient(180deg, rgba(60,60,60,1) 0%, rgba(30,30,30,1) 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;

    width: 45%;
    height: 14rem;
`

export const ConverterWrapper = tw.div`
    flex
    flex-row
    justify-around
    items-center
    w-auto
    h-96
    m-20
    text-white
`

export const CoinFieldBox = tw.div`
    rounded-3xl
    flex
    flex-col
    items-center
    bg-primary
    h-3/4
    w-auto
    m-5
`

export const CoinOutputBox = tw.div`
    flex
    flex-row
    justify-start
    items-center
    border-b-solid
    border-b
    border-b-white
    bg-transparent
    w-full
    h-15
    m-3
    mt-auto
    ml-3
    pl-4
    pb-4
    text-lg
    mt-auto
`
export const CoinInputBox = tw.div`
    flex
    flex-row
    justify-start
    items-center
    border-b-solid
    border-b    
    border-b-white
    bg-transparent
    w-full
    h-15
    m-3
    mt-auto
    pb-4
    text-lg
`

export const CoinInput = tw.input`
    text-white
    text-2xl
    bg-transparent
    h-10
    mt-auto
    p-2
    w-40
`

export const CoinAmountInput = tw.input`
    text-white
    bg-transparent
    h-10
    mt-auto
    p-2
    w-24
    ml-auto
`

export const CoinOutput = tw.input`
    text-white
    text-2xl
    bg-transparent
    h-10
    mt-auto
    p-2
    w-40    
`

export const CoinAmountOutput = tw.h2`
    text-white
    bg-transparent
    h-10
    mt-auto
    p-2
    w-24
    ml-auto
`

export const ConverterLabel = tw.label`
    text-sm
    text-gray-400
    mr-auto
`

export const ChosenCoinBox = tw.div`
    flex
    flex-row
    items-center
`

export const ChosenCoinImage = tw.img`
    w-7
    h-7
    mr-3
`
export const CurrentCoin = tw.h2`

`

export const FilteredList = tw.ul`
    absolute
    flex
    flex-col
    bg-primary
    h-40
    w-60
    ml-5
    mt-52
    z-10
    overflow-y-scroll
`

export const EachFilteredCoin = tw.li`
    flex
    flex-row
    justify-center
    items-center
    cursor-pointer
`

export const CoinQueryListImage = tw.img`
    w-5
    h-5
    mr-3
`

export const ConvertButton = tw.button`
    w-10
    h-10
    m-2
    bg-primary
    rounded-full
    hover:bg-secondary
    duration-200
`

export const PriceInfoWrapper = tw.div`
    relative
    flex
    flex-col
    mr-auto
    text-gray-400
`