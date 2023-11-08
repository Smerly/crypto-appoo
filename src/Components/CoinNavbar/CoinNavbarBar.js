import { CoinNavbarBarWrapper, CoinNavbarBarFilled } from "./CoinNavbar.style";

function CoinNavbarBar(props) {
    const { fraction, total } = props

    return (
        <CoinNavbarBarWrapper>
            <CoinNavbarBarFilled fraction={JSON.stringify(fraction)} total={JSON.stringify(total)} />
        </CoinNavbarBarWrapper>
    )
}

export default CoinNavbarBar