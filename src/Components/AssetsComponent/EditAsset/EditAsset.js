

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { AssetsModal, AssetModalBox, ModalLabel, AssetModalOverlay, CoinSelectionBox, TempCoinIconBox, SelectionFields, DropdownSelection, FormButtons, CloseButton, SubmitButton, EditAssetButton, CoinImage, CoinNameSelectionWrapper, CoinNameInput, CoinNameLabel  } from "../Assets.style"
import EditAmount from "./EditAmount"
import EditDate from "./EditDate"
import { updateCurrency } from "redux/portfolioSlice"
import { handleAwaitPrim } from "utils/handleAwait"
import { roundToHundredth } from "utils/roundToHundredth"

function EditAsset(props) {
    const dispatch = useDispatch()
    const currencyType = useSelector((state) => state.persist.currency)

    const { currentCoin, historyCoinPrice, reduxAsset } = props

    // Vars

    const coinName = handleAwaitPrim(currentCoin, 'name')
    const image = handleAwaitPrim(currentCoin, 'image')
    const calculatedCurrencyAmount = `$${roundToHundredth(reduxAsset.amountOfCoin * handleAwaitPrim(historyCoinPrice, 'usd'))}`
    const datePurchased = new Date(reduxAsset.datePurchased)

    const [show, setShow] = useState(false)
    const [currencyAmount, setCurrencyAmount] = useState(calculatedCurrencyAmount)
    const [date, setDate] = useState(datePurchased)

    useEffect(() => {
        setCurrencyAmount(calculatedCurrencyAmount)
    }, [historyCoinPrice, reduxAsset])

    const handleSubmit = () => {
        const amountOfCoin = currencyAsNumber / handleAwaitPrim(historyCoinPrice, 'usd')
        dispatch(updateCurrency({    
            id: reduxAsset.id,
            amountOfCoin: amountOfCoin,
            datePurchased: String(date),
        }))
        setShow(false)
    }

    const handleClose = () => setShow(false)
    const toggleModal = () => setShow(!show)
    const currencyAsNumber = Number(currencyAmount.slice(1).replace(/,/g, ''))

    return (
        <div>
            <EditAssetButton onClick={toggleModal}>
                Edit
            </EditAssetButton>

            <AssetModalOverlay show={show} onClick={handleClose} />

            
            <AssetsModal show={show}>
                <AssetModalBox>
                    <ModalLabel>Select Coin</ModalLabel>
                    <CoinSelectionBox>

                        <TempCoinIconBox>
                            <CoinImage src={image} />
                            {coinName}
                        </TempCoinIconBox>

                        <SelectionFields>
                            <CoinNameSelectionWrapper>
                                <CoinNameLabel type="text" value={coinName} placeholder='Coin'/>
                            </CoinNameSelectionWrapper>

                            <EditAmount currentCoin={currentCoin} currencyAmount={currencyAmount} setCurrencyAmount={setCurrencyAmount} />

                            <EditDate currentCoin={currentCoin} date={date} setDate={setDate} />
                        </SelectionFields>

                    </CoinSelectionBox>
                    
                    <FormButtons>
                        <CloseButton onClick={handleClose}>
                            Close
                        </CloseButton>
                        <SubmitButton onClick={handleSubmit}>
                            Save and Continue
                        </SubmitButton>
                    </FormButtons>
                    
                </AssetModalBox>
            </AssetsModal>
        </div>
    )
}

export default EditAsset