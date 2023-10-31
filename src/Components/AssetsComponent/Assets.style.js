import { styled } from "styled-components";
import tw from 'tailwind-styled-components'

export const AssetsWrapper = tw.div`
    flex
    flex-col
    border-2
    border-solid
    border-green-200
    w-full
    h-auto
    p-20
    m-20
`

export const EachAssetWrapper = tw.div`
    flex
    flex-row
    h-auto
`

export const AssetName = tw.h1`
    text-lg
    mt-4
`

export const AssetImage = tw.img`
    flex
    flex-row 
    w-20
    h-20
`

export const AssetInfoBoxes = tw.div`
    flex
    flex-col
    justify-center
    items-center
    w-full
    ml-10
`
export const AssetInfoBoxLabel = tw.h1`
    text-lg
`

export const CoinLabelBox = tw.div`
    flex
    flex-col
    justify-center
    items-center
    bg-primary
    w-48
    h-48
    p-10
    m-5
`

export const MarketPriceContainer = tw.div`
    flex
    flex-col
    justify-center
    items-center
    w-full
`

export const YourCoinContainer = tw.div`
    flex
    flex-col
    justify-center
    items-center
    w-full
`

export const MarketPriceBox = tw.div`
    flex
    flex-row
    h-10
    p-10
    bg-primary
    rounded-lg
    w-full
`

export const YourCoinBox = tw.div`
    flex
    flex-row
    h-10
    p-10
    bg-primary
    rounded-lg
    w-full
`