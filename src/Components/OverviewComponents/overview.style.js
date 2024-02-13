import tw from "tailwind-styled-components";
import styled from 'styled-components'

export const MainChartWrapper = styled.div`
    border-radius: 19px;
    border: double 2px transparent;
    background-image: linear-gradient(#191B1F, #191B1F),  linear-gradient(180deg, rgba(60,60,60,1) 0%, rgba(30,30,30,1) 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
`

export const MainChart = tw.div`
    flex
    flex-row
    justify-center
    items-center
    bg-primary
    m-5
`

export const OverviewTitle = tw.div`
    text-3xl 
    text-white
    mt-5
    ml-5
`

export const GraphRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 10vh;
`

export const GraphBox = styled.div`
    width: 34vw;
    height: 40vh;
`

export const ChartLabelWrapper = tw.div`
    m-6
    ml-8
`

export const ChartLabelHeader = tw.h2`
    text-gray-200
`

export const ChartLabel = tw.h2`
    text-white-200
    text-2xl
    font-semibold
`