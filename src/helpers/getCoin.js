

export async function getCoin(coin) {
    const desiredCoin = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}`)
    const temp = await desiredCoin.json()
    return temp
}

export async function getAllCoins() {
    const desiredCoin = fetch(`https://api.coingecko.com/api/v3/coins/list`).then((res) => {
            return res
        }).catch((err) => {
            console.log(err)
        })
        return desiredCoin
}