import tw from 'tailwind-styled-components'

export const MoreInfoWrapper = tw.div`
    bg-primary 
    rounded-5xl 
    flex 
    m-20 
    lg:m-0 
    flex-col 
    items-start 
    justify-center 
    p-10 
    w-96 
    h-80
`


export const MoreInfoList = tw.header`
    text-md
    font-semibold
    flex
    flex-row
    justify-center
    items-center
`

export const PriceBoxWrapper = tw.div`
    bg-primary 
    rounded-5xl 
    m-20 
    lg:m-0 
    flex 
    flex-col 
    justify-center 
    items-center 
    w-96 
    h-80
`

export const PriceDisplays = tw.div`
    flex
    flex-row
`

export const Xl3Header = tw.div`
    text-4xl
    text-white
`

export const SmHeader = tw.div`
    text-sm 
    text-white
    flex 
    flex-row
`

export const GreenText = tw.h2`
    text-green-400
`

export const IfSmallerWindow = tw.div`
    flex
    flex-row
    lg:flex-col
    width-full
    m-0
    p-0
`


export const DescriptionBox = tw.div`
    bg-primary
    rounded-3xl
    p-16
    m-20
    flex
    flex-col
`

export const DescriptionText = tw.p`
    text-white
`

export const ToggleDescriptionButton = tw.button`
    text-green-400
    mt-10
`

export const OpenLinkIcon = tw.img`
    w-3
`

export const LinkPageRef = tw.a`
    rounded-full
    hover:bg-lighterGray
    duration-200
    p-2
    mr-2
`

export const CopyLinkButton = tw.button`
    rounded-full
    hover:bg-lighterGray
    duration-200
    p-2
    ml-2
`

export const CopyLinkIcon = tw.img`
    w-3
`

export const LinkPageBox = tw.div`
    bg-primary 
    text-white 
    flex 
    flex-row 
    justify-center 
    items-center 
    rounded-full 
    h-10 
    p-7 
    mt-auto
`

export const TitleSquare = tw.div`
    flex
    flex-col
    items-center
    justify-center
    w-40
    h-40
    bg-primary
    rounded-3xl
    m-20 
    lg:m-0
`
export const LinksContainer = tw.div`
    flex
    flex-row
    items-center
`

export const SectionWrapper = tw.div`
    flex 
    lg:flex-row 
    flex-col 
    mt-40 
    justify-around 
    items-center
`

export const TitleBoxWrapper = tw.div`
    flex 
    m-20 
    lg:m-0 
    flex-col 
    h-80 
    items-center
`