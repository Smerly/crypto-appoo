import InfiniteScroll from 'react-infinite-scroll-component'
import { useEffect, useState } from 'react'
import { Coins, CoinsWrapper, EachCoinWrapper, CoinTitle, CoinHeader, CoinName, EachCoinMap } from 'Components/CoinListComponent/CoinList.style'
import { getAllCoins, getCoin, getAllCoinsWithImages } from 'helpers/getCoin'
import EachCoin from './EachCoin'


function CoinList () {
    const [coins, setCoins] = useState('hi')
    const [renderedCoin, setRenderedCoin] = useState([])

    // This is for features later down the road
    const updateCoinSort = (sortType) => {
        setRenderedCoin(renderedCoin.sort((a, b) => {
            return b[sortType] - a[sortType]
        }))
    }
    useEffect(() => {
        getAllCoinsWithImages().then((res) => {
            setCoins(res)
            setRenderedCoin(res.slice(0, 10))
        }).catch((err) => {
            return err
        })
    }, [])

    const getMoreData = () => {
        setRenderedCoin([...renderedCoin, ...coins.slice(renderedCoin.length, renderedCoin.length + 5)])
    }

    return (
        <Coins>
            <InfiniteScroll
                dataLength={renderedCoin.length} //This is important field to render the next data
                hasMore={true}
                next={getMoreData}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                pullDownToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                    <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                }
                >
                
                {/* Legend Header */}
             

                 <EachCoinMap>
                    <EachCoinWrapper>
                        <CoinHeader>#</CoinHeader>
                        <CoinName>Name</CoinName>
                        <CoinHeader className='ml-20'>Price</CoinHeader>
                        <CoinHeader>1h%</CoinHeader>
                        <CoinHeader>24h%</CoinHeader>
                        <CoinHeader>7h%</CoinHeader>
                        <CoinHeader className='m-16'>24h Volume/Market Cap</CoinHeader>
                        <CoinHeader className='mr-16'>Circulating/Total Supply</CoinHeader>
                        <CoinHeader>Last 7d</CoinHeader>
                    </EachCoinWrapper>
                 </EachCoinMap>
                 


                {renderedCoin.map((eachCoin, i) => {
                return (
                    <EachCoinMap className='overflow-x-scroll'>
                        <EachCoin coin={eachCoin} index={i+1}/>
                    </EachCoinMap>
                )
            })}
            </InfiniteScroll>
        </Coins>
    )
}

export default CoinList