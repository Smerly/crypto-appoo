

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { AddAssetsModal, AddAssetModalBox, ModalLabel, AddAssetModalOverlay, CoinSelectionBox, TempCoinIconBox, SelectionFields, DropdownSelection, FormButtons, CloseButton, SubmitButton, EditAssetButton, CoinImage, CoinNameSelectionWrapper, CoinNameInput, CoinNameLabel  } from "../Assets.style"
import EditAmount from "./EditAmount"
import EditDate from "./EditDate"
import { updateCurrency } from "redux/portfolioSlice"
import { handleAwaitPrim } from "utils/handleAwait"
import { roundToHundredth } from "utils/roundToHundredth"

function EditAsset(props) {
    const currencyType = useSelector((state) => state.persist.currency)

    const { currentCoin, historyCoinPrice, reduxAsset } = props

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)

    // For CurrencySelection

    const [currencyAmount, setCurrencyAmount] = useState(`$${roundToHundredth(reduxAsset.amountOfCoin * handleAwaitPrim(historyCoinPrice, 'usd'))}`)

    // For DateTimeSelection

    const [date, setDate] = useState(new Date(reduxAsset.datePurchased))

    const currencyAsNumber = Number(currencyAmount.slice(1).replace(/,/g, ''))

    useEffect(() => {
        setCurrencyAmount(`$${roundToHundredth(reduxAsset.amountOfCoin * handleAwaitPrim(historyCoinPrice, 'usd'))}`)
    }, [historyCoinPrice, reduxAsset])

    const handleSubmit = () => {
        dispatch(updateCurrency({    
            id: reduxAsset.id,
            amountOfCoin: currencyAsNumber / handleAwaitPrim(historyCoinPrice, 'usd'),
            datePurchased: String(date),
        }))
        setShow(false)
    }
    return (
        <div>
            <EditAssetButton onClick={() => setShow(!show)}>
                Edit
            </EditAssetButton>

            <AddAssetModalOverlay show={show} onClick={() => setShow(false)} />

            
            <AddAssetsModal show={show}>
                <AddAssetModalBox>
                    <ModalLabel>Select Coin</ModalLabel>
                    <CoinSelectionBox>

                        <TempCoinIconBox>
                            <CoinImage src={handleAwaitPrim(currentCoin, 'image')} />
                            {handleAwaitPrim(currentCoin, 'name')}
                        </TempCoinIconBox>

                        <SelectionFields>
                            <CoinNameSelectionWrapper>
                                <CoinNameLabel type="text" value={handleAwaitPrim(currentCoin, 'name')} placeholder='Coin'/>
                            </CoinNameSelectionWrapper>

                            <EditAmount currentCoin={currentCoin} currencyAmount={currencyAmount} setCurrencyAmount={setCurrencyAmount} />

                            <EditDate currentCoin={currentCoin} date={date} setDate={setDate} />
                        </SelectionFields>

                    </CoinSelectionBox>
                    
                    <FormButtons>
                        <CloseButton onClick={() => setShow(false)}>
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