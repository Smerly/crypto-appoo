import { AssetsWrapper } from "./Assets.style"
import EachAsset from "./EachAsset"


function Assets() {
    return (
        <AssetsWrapper>
            {/* Temporary array for testing */}
            {[{
                id: 0, name: 'coin1', image:'https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756', current_price: 23467, price_change_percentage_24h: 2000, market_cap: 10000000000, total_volume: 20000000000, circulating_supply: 5000000000, total_supply: 7000000000
            }, 
            {
                id: 1, name: 'coin2', image:'https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756', current_price: 23467, price_change_percentage_24h: 2000, market_cap: 10000000000, total_volume: 20000000000, circulating_supply: 5000000000, total_supply: 7000000000
            },
            {
                id: 2, name: 'coin3', image:'https://assets.coingecko.com/coins/images/4128/large/solana.png?1696504756', current_price: 23467, price_change_percentage_24h: 2000, market_cap: 10000000000, total_volume: 20000000000, circulating_supply: 5000000000, total_supply: 7000000000
            }].map((each) => {
                return <EachAsset key={each.id} asset={each} /> 
            })}
        </AssetsWrapper>
    )
}

export default Assets
