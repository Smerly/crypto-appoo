import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { AddAssetsButton, AssetsModal, AssetModalBox, ModalLabel, AssetModalOverlay, CoinSelectionBox, TempCoinIconBox, SelectionFields, DropdownSelection, FormButtons, CloseButton, SubmitButton, CoinImage } from "../Assets.style"
import SelectionFieldsComp from "./SelectionFieldsComp"
import { getAllCoinsWithImagesNoPage } from "helpers/getCoin"
import { addCurrency } from "redux/portfolioSlice"

function AddAsset() {
    const currencyType = useSelector((state) => state.persist.currency)

    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const [coinPrices, setCoinPrices] = useState([])
    
    // For CoinNameSelection

    const [coinSearch, setCoinSearch] = useState('')
    const [coinNames, setCoinNames] = useState([])
    const [coinImages, setCoinImages] = useState('')
    const [chosenCoin, setChosenCoin] = useState('')
    const [selectedCoinImage, setSelectedCoinImage] = useState('')

    // For CurrencySelection

    const [currency, setCurrency] = useState('$0')

    // For DateTimeSelection

    const [date, setDate] = useState(new Date())

    const selectCoinProps = {
        coinSearch: coinSearch,
        setCoinSearch: setCoinSearch,
        currency: currency,
        setCurrency: setCurrency,
        date: date,
        setDate, setDate,
        coinNames: coinNames,
        coinImages: coinImages,
        setCoinImages: setCoinImages,
        chosenCoin, chosenCoin,
        setChosenCoin: setChosenCoin,
        selectedCoinImage: selectedCoinImage,
        setSelectedCoinImage: setSelectedCoinImage
    }
    useEffect(() => {
        getAllCoinsWithImagesNoPage(currencyType.currency).then((res) => {
            setCoinNames(res.map((each) => [each.name, each.id]))
            setCoinImages(res.map((each) => [each.image, each.id]))
            setCoinPrices(res.map((each) => [each.current_price, each.id]))
        }).catch((err) => {
            return err
        })
    }, [])

    const currencyAsNumber = Number(currency.slice(1).replace(/,/g, ''))
    const coinName = chosenCoin[0]


    const handleSubmit = () => {
        dispatch(addCurrency({    
            id: chosenCoin[1],
            amountOfCoin: currencyAsNumber / coinPrices.filter((each) => each[1] === chosenCoin[1])[0][0],
            datePurchased: String(date),
        }))
        setShow(false)
        setChosenCoin('')
        setSelectedCoinImage('')
        setCurrency('$0')
        setDate(new Date())
    }

    const handleClose = () => setShow(false)
    const toggleModal = () => setShow(!show)
    
    return (
        <div>
            <AddAssetsButton onClick={toggleModal}>
                Add Asset
            </AddAssetsButton>

            <AssetModalOverlay show={show} onClick={handleClose} />

            
            <AssetsModal show={show}>
                <AssetModalBox>
                    <ModalLabel>Select Coin</ModalLabel>
                    <CoinSelectionBox>

                        <TempCoinIconBox>
                            <CoinImage src={selectedCoinImage} />
                            {coinName}
                        </TempCoinIconBox>
                        
                        <SelectionFieldsComp selectCoinProps={selectCoinProps} />

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

export default AddAsset