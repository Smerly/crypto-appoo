import tw from "tailwind-styled-components"
export const MoreInfoList = tw.header`
    text-md
    font-semibold
    flex
    flex-row
    justify-center
    items-center
`

export const IfSmallerWindow = tw.div`
    flex
    flex-row
    lg:flex-col
`