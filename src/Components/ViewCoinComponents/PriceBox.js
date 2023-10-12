import { GreenText, PriceBoxWrapper, PriceDisplays, SmHeader, Xl3Header } from 'Pages/ViewCoin/ViewCoin.style'

function PriceBox(props) {
    const { currentPrice, priceChange24Percent, ath, atl, athDate, atlDate } = props

    const friendlifyDate = (date) => {
        const tempDate = new Date(date)
        return `${tempDate.getMonth()+1}/${tempDate.getDate()}/${tempDate.getFullYear()}`
    }

    const arrow = () => {
        return priceChange24Percent > 0 ? <div className='text-green-400'>▲</div> : <div className='text-red-600'>▼</div>
    }

    return (
        <PriceBoxWrapper>
            <PriceDisplays>
                <Xl3Header>${currentPrice}</Xl3Header>
                <header className={`flex flex-row ml-3 ${priceChange24Percent > 0 ? 'text-green-400' : 'text-red-600'}`}>{arrow()}&nbsp;{priceChange24Percent}%</header>
            </PriceDisplays>
            <PriceDisplays>
                <header>Profit:</header>
                <GreenText className='ml-2'> $</GreenText>
            </PriceDisplays>
            <div className='flex flex-col'>
                <SmHeader>
                    Highest:&nbsp;
                    <GreenText>
                        ${ath}
                    </GreenText>
                    &nbsp;
                    <h2>
                        | {friendlifyDate(athDate)}
                    </h2>
                </SmHeader>
                <SmHeader>
                    Lowest:&nbsp;
                    <GreenText>
                        ${atl}
                    </GreenText>
                    &nbsp;
                    <h2>
                        | {friendlifyDate(atlDate)}
                    </h2>
                </SmHeader>
            </div>
        </PriceBoxWrapper>
    )
}

export default PriceBox