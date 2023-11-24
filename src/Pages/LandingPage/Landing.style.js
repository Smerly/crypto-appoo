import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const LandingPageWrapper = styled.div`
    border-top: 0px black solid;
    min-height: 200vh;
    padding: 20px;
`

export const CustomContainer = styled.div`
    margin-left: 10vw;
    margin-right: 10vw;
`

export const LandingNavbar = tw.ul`
    flex
    flex-row
    justify-center
    items-center
    rounded-2xl
    bg-secondaryTransparent
    w-80
`

export const LandingNavLink = tw.li`
    hover:bg-primary
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

// margin: 10px;
// font-size: 20px;
// text-decoration: none;
// color: white;

// padding: 5px;
// padding-left: 30px;
// padding-right: 30px;
// border-radius: 100px;
// transition: 0.2s;
// font-weight: 600;