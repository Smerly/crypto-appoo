import { CoinBarWrapper, CoinBarFilled } from "./Assets.style"

function CoinBar(props) {
    const { fraction, total } = props
    return (
        <CoinBarWrapper>
            <CoinBarFilled fraction={fraction} total={total} />
        </CoinBarWrapper>
    )
}

export default CoinBar