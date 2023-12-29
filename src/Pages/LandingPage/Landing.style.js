import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const LandingPageWrapper = styled.div`
    border-top: 0px black solid;
    min-height: 100vh;
    padding: 20px;
`

export const CustomContainer = styled.div`
    margin-left: 8vw;
    margin-right: 8vw;
`

export const LandingNavbar = tw.ul`
    flex
    flex-row
    justify-center
    items-center
    rounded-2xl
    bg-secondaryTransparent
    w-80
    mt-10
    mb-20
`

export const CoinsButton = tw.button`
    hover:bg-primary
    ${(props) => props.tab === 'coins' ? 'bg-primary' : ''}
    m-4
    text-lg
    text-white
    p-2
    pl-5
    pr-5
    rounded-full
    duration-200
    font-semibold
`

export const ConverterButton = tw.button`
    hover:bg-primary
    ${(props) => props.tab === 'converter' ? 'bg-primary' : ''}
    m-4
    text-lg
    text-white
    p-2
    pl-5
    pr-5
    rounded-full
    duration-200
    font-semibold
`