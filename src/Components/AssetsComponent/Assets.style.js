import { styled } from "styled-components";
import tw from 'tailwind-styled-components'

export const AssetsWrapper = tw.div`
    flex
    flex-col
    border-2
    border-solid
    border-green-200
    w-full
    p-20
`

export const EachAssetWrapper = tw.div`
    flex
    flex-row
`

export const AssetImage = tw.image`
    flex
    flex-row 
`