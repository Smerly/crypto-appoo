import { MoreInfoList, MoreInfoWrapper } from 'Pages/ViewCoin/ViewCoin.style';
import plus from 'images/Untitled/plus.png'
function MoreInfoBox(props) {
    const { marketCap, fullyDilutedValuation, totalVolume, slug, totalVolumeCurrency, circulatingSupply, maxSupply } = props

    // Helper Functions
    const removeCommasAndNum = (numberString) => {
        return Number(numberString.replaceAll(',', ''))
    }

    const volumeByCap = () => {
        const volByCap = removeCommasAndNum(totalVolume) / removeCommasAndNum(marketCap)
        return Math.round(volByCap * 100000) / 100000
    }

    return (
        <MoreInfoWrapper>
            <MoreInfoList> <img src={plus}  className='bg-blue-600 p-1.5 m-1'/> Market Cap: ${marketCap} </MoreInfoList>
            <MoreInfoList> <img src={plus}  className='bg-blue-600 p-1.5 m-1'/> Fully Diluted Valuation: ${fullyDilutedValuation}</MoreInfoList>
            <MoreInfoList> <img src={plus}  className='bg-blue-600 p-1.5 m-1'/> Volume 24h: ${totalVolume}</MoreInfoList>
            <MoreInfoList> <img src={plus}  className='bg-blue-600 p-1.5 m-1'/> Volume / Market Cap: {volumeByCap()}</MoreInfoList>

            <MoreInfoList className='mt-5'> <img src={plus}  className='bg-blue-600 p-1.5 m-1'/> Total Volume: {totalVolumeCurrency} BTC</MoreInfoList>
            <MoreInfoList> <img src={plus}  className='bg-blue-600 p-1.5 m-1'/> Circulating Supply: {circulatingSupply} BTC</MoreInfoList>
            <MoreInfoList> <img src={plus}  className='bg-blue-600 p-1.5 m-1'/> Max Supply: {maxSupply} BTC</MoreInfoList>
        </MoreInfoWrapper>
    )
}

export default MoreInfoBox