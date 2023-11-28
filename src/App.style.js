import { styled } from 'styled-components'
import tw from 'tailwind-styled-components'

export const PrimaryComponentWrapper = tw.div`
    bg-secondary
    p-20
    border-t-0
    border-8
    border-primary
    bofder-solid
`

export const Title = tw.h1`
    text-3xl 
    mt-20 
    text-white
`

export const Background = styled.div`
    background: linear-gradient(rgba(31, 33, 40, 0.1) 0%, rgba(31, 33, 40, 1) 30%), linear-gradient(90deg, rgba(96,54,54,1) 0%, rgba(121,41,61,1) 11%, rgba(144,44,69,1) 20%, rgba(152,45,72,1) 27%, rgba(58,30,110,1) 51%, rgba(43,44,114,1) 61%, rgba(30,87,126,1) 74%, rgba(62,106,161,1) 90%, rgba(48,62,62,1) 100%);
    border-top: 0px black solid;
`

export const MidCol = tw.div`
    flex
    flex-col
    items-center
`

export const MidRow = tw.div`
    flex
    flex-row
    items-center
`