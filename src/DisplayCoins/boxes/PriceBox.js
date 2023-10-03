
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
        <div className='important-box m-20 lg:m-0  flex flex-col justify-center items-center w-96 h-80'>
            <div className='row'>
                <h1 className='text-4xl'>${currentPrice}</h1>
                <header className={`flex flex-row ml-3 ${priceChange24Percent > 0 ? 'text-green-400' : 'text-red-600'}`}>{arrow()}&nbsp;{priceChange24Percent}%</header>
            </div>
            <div className='flex flex-row'>
                <header>Profit: </header>
                <h2 className='text-green-400 ml-2'> $</h2>
            </div>
            <div className='flex flex-col'>
                <header className='text-sm flex flex-row'>Highest:&nbsp;<h2 className='text-green-400'>${ath}</h2>&nbsp;<h2>| {friendlifyDate(athDate)}</h2></header>
                <header className='text-sm flex flex-row'>Lowest:&nbsp;<h2 className='text-green-400'>${atl}</h2>&nbsp;<h2>| {friendlifyDate(atlDate)}</h2></header>
            </div>
        </div>
    )
}

export default PriceBox