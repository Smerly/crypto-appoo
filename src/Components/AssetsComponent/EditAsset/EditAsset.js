

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { AddAssetsModal, AddAssetModalBox, ModalLabel, AddAssetModalOverlay, CoinSelectionBox, TempCoinIconBox, SelectionFields, DropdownSelection, FormButtons, CloseButton, SubmitButton, EditAssetButton, CoinImage, CoinNameSelectionWrapper, CoinNameInput, CoinNameLabel  } from "../Assets.style"
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

    const name = handleAwaitPrim(currentCoin, 'name')
    const image = handleAwaitPrim(currentCoin, 'image')
    const calculatedCurrencyAmount = `$${roundToHundredth(reduxAsset.amountOfCoin * handleAwaitPrim(historyCoinPrice, 'usd'))}`

    const [show, setShow] = useState(false)
    const [currencyAmount, setCurrencyAmount] = useState(calculatedCurrencyAmount)
    const [date, setDate] = useState(new Date(reduxAsset.datePurchased))

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

            <AddAssetModalOverlay show={show} onClick={handleClose} />

            
            <AddAssetsModal show={show}>
                <AddAssetModalBox>
                    <ModalLabel>Select Coin</ModalLabel>
                    <CoinSelectionBox>

                        <TempCoinIconBox>
                            <CoinImage src={image} />
                            {name}
                        </TempCoinIconBox>

                        <SelectionFields>
                            <CoinNameSelectionWrapper>
                                <CoinNameLabel type="text" value={name} placeholder='Coin'/>
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
                    
                </AddAssetModalBox>
            </AddAssetsModal>
        </div>
    )
}

export default EditAsset