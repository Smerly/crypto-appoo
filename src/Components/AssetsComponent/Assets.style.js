import { keyframes, styled } from "styled-components";
import tw from 'tailwind-styled-components'
import { returnPercentage } from "utils/returnPercentage";

export const AssetsWrapper = tw.div`
    flex
    flex-col
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

export const CoinLabelBox = tw.div`
    flex
    flex-col
    justify-center
    items-center
    bg-primary
    rounded-3xl
    w-48
    h-48
    p-10
    m-5
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
    mr-auto
    ml-2
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
    mb-auto
`

export const MarketPriceBox = tw.div`
    flex
    flex-row
    items-center
    justify-start
    h-20
    p-5
    px-10
    bg-primary
    rounded-lg
    w-full
`

export const YourCoinBox = tw.div`
    flex
    flex-row
    items-center
    justify-start
    h-20
    p-5
    px-10
    bg-primary
    rounded-lg
    w-full
`

export const InfoText = tw.p`
    flex
    flex-row
    justify-center
    items-center
    text-white
    mx-2
    w-56
`

export const AddAssetsButton = tw.button`
    flex
    flex-row
    bg-green-500
    p-10
    m-10
    text-lg
    rounded-3xl
    w-80
    justify-center
    items-center
`

const appear = keyframes`
    0% {
        opacity: 0
    }
    100% {
        opacity: 100
    }
`

export const AddAssetsModal = styled.div`
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    transition: 0.5s;
    width: 40%;
    height: 40%;
    visibility: ${(props) => props.show ? 'visible' : 'hidden'};
    opacity: ${(props) => props.show ? '1' : '0'};
`

export const AddAssetModalBox = tw.div`
    flex
    flex-col
    items-center
    justify-around
    p-5
    w-100
    h-88
    bg-secondary
`

export const ModalLabel = tw.div`
    mb-auto

`

export const AddAssetModalOverlay = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top:0%;
    left:0%;
    transition: 0.5s;
    visibility: ${(props) => props.show ? 'visible' : 'hidden'};
    opacity: ${(props) => props.show ? '0.3' : '0'};
`
export const CoinSelectionBox = tw.div`
    flex
    flex-row
    items-center
    justify-around
    h-auto
    w-full
    m-2
`

export const TempCoinIconBox = tw.div`
    flex
    flex-col
    justify-center
    items-center
    rounded-3xl
    bg-primary
    p-3
    w-40
    h-40
`

export const SelectionFields = tw.div`
    flex
    flex-col
    w-64
    h-auto
`

export const DropdownSelection = tw.button`
    flex
    flex-row
    p-2
    m-2
    bg-primary
    rounded-2xl
    w-full
    h-10
`

export const FormButtons = tw.div`
    flex
    flex-row
    h-auto
    w-full
    justify-evenly
    items-center
    p-2
    m-3
`

export const CloseButton = tw.button`
    flex
    flex-row
    justify-center
    items-center
    h-9
    rounded-3xl
    w-56
    bg-white
    hover:bg-slate-200
    duration-200
    text-black
    font-medium
`

export const SubmitButton = tw.button`
    flex
    flex-row
    justify-center
    items-center
    h-9
    rounded-3xl
    w-56
    bg-green-500
    hover:bg-green-400
    duration-200
    text-white
    font-medium
`

export const CoinNameInput = tw.input`
    flex
    flex-row
    p-4
    m-2
    bg-primary
    rounded-2xl
    w-full
    h-10
`

export const SearchOutput = tw.div`
    absolute
    flex
    flex-col
    bg-primary
    h-40
    w-60
    ml-5
    overflow-y-scroll
`

export const CoinNameSelectionWrapper = tw.div`

`

export const CurrencySelectionWrapper = tw.input`
    flex
    flex-row
    p-4
    m-2
    bg-primary
    rounded-2xl
    w-full
    h-10
`

export const DateTimeSelectionWrapper = tw.input`
    flex
    flex-row
    p-4
    m-2
    bg-primary
    rounded-2xl
    w-full
    h-10
    theme-dark
`

export const CoinBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100px;
    height: 20px;
    background-color: #1F2128;
    border-radus: 20px;
`

export const CoinBarFilled = styled.div`
    display: flex;
    flex-direction: row;
    width: ${(props) => `${returnPercentage(props.fraction, props.total)}%`};
    height: 100%;
    background-color: green;
    border-radus: 20px;
`
export const CoinImage  = tw.img`
    w-8
    h-8
    mb-2
`