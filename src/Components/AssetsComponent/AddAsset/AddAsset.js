import { useEffect, useState } from "react"
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { AddAssetsButton, AddAssetsModal, AddAssetModalBox, ModalLabel, AddAssetModalOverlay, CoinSelectionBox, TempCoinIconBox, SelectionFields, DropdownSelection, FormButtons, CloseButton, SubmitButton } from "../Assets.style"
import { CoinImage } from "../Assets.style"
import SelectionFieldsComp from "./SelectionFieldsComp"
import { getAllCoinsWithImages } from "helpers/getCoin"
import { addCurrency } from "redux/portfolioSlice"

function AddAsset() {
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
        getAllCoinsWithImages().then((res) => {
            setCoinNames(res.map((each) => [each.name, each.id]))
            setCoinImages(res.map((each) => [each.image, each.id]))
            setCoinPrices(res.map((each) => [each.current_price, each.id]))
        }).catch((err) => {
            return err
        })
    }, [])

    const currencyAsNumber = Number(currency.slice(1).replace(/,/g, ''))


    const handleSubmit = () => {
        dispatch(addCurrency({    
            id: chosenCoin[1],
            name: chosenCoin[0],
            image: selectedCoinImage,
            amountInCurrency: currencyAsNumber,
            priceOfEach: coinPrices.filter((each) => each[1] === chosenCoin[1])[0][0],
            amountOfCoin: currencyAsNumber / coinPrices.filter((each) => each[1] === chosenCoin[1])[0][0],
            datePurchased: date,
        }))
        setShow(false)
        setChosenCoin('')
        setSelectedCoinImage('')
        setCurrency('$0')
        setDate(new Date())
    }
    return (
        <div>
            <AddAssetsButton onClick={() => setShow(!show)}>
                Add Asset
            </AddAssetsButton>

            <AddAssetModalOverlay show={show} onClick={() => setShow(false)} />

            
            <AddAssetsModal show={show}>
                <AddAssetModalBox>
                    <ModalLabel>Select Coin</ModalLabel>
                    <CoinSelectionBox>

                        <TempCoinIconBox>
                            <CoinImage src={selectedCoinImage} />
                            {chosenCoin[0]}
                        </TempCoinIconBox>
                        
                        <SelectionFieldsComp selectCoinProps={selectCoinProps} />

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

export default AddAsset