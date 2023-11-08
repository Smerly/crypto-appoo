import { CoinNavbarBarWrapper, CoinNavbarBarFilled } from "./CoinNavbar.style";

<<<<<<< HEAD
function CoinNavbarBar(props) {
    const { fraction, total } = props

    return (
        <CoinNavbarBarWrapper>
            <CoinNavbarBarFilled fraction={JSON.stringify(fraction)} total={JSON.stringify(total)} />
=======

function CoinNavbarBar() {
    return (
        <CoinNavbarBarWrapper>
            <CoinNavbarBarFilled />
>>>>>>> MainChartsLandingDev
        </CoinNavbarBarWrapper>
    )
}

export default CoinNavbarBar