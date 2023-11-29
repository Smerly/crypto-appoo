import { useEffect, useRef, useState } from "react"
import { BorderWrapper, ChosenCoinBox, ChosenCoinImage, CoinAmountInput, CoinAmountOutput, CoinFieldBox, CoinInput, CoinInputBox, CoinOutput, CoinOutputBox, CoinQueryListImage, ConvertButton, ConverterLabel, ConverterWrapper, CurrentCoin } from "./Converter.style"
import { getAllCoinsWithImagesNoPage } from "helpers/getCoin"
import { useSelector } from "react-redux"
import { returnOnCondition } from "utils/returnOnCondition"
import FilteredOptions from "./FilteredOptions"
import { MidRow } from "App.style.js"
import PriceInformation from "./PriceInformation"
import { roundToHundredth } from "utils/roundToHundredth"

function Converter() {
    const currencyType = useSelector((state) => state.persist.currency.currency)

    const [coinInput, setCoinInput] = useState('')
    const [coinOutput, setCoinOutput] = useState('')
    const [amountOfCoin, setAmountOfCoin] = useState(0)
    const [amountOfCoinOutput, setAmountOfCoinOutput] = useState()
    const [chosenBeforeCoin, setChosenBeforeCoin] = useState({coinId: '', coinName: '', coinImage: '', coinPrice: 0})
    const [chosenAfterCoin, setChosenAfterCoin] = useState({coinId: '', coinName: '', coinImage: '', coinPrice: 0})
    const [coinList, setCoinList] = useState([])
    const [ifSelected, setIfSelected] = useState(false)
    const [resultIfSelected, setResultIfSelected] = useState(false)

    const filteredOptionsDataInput = {
        coinList: coinList,
        coinInput: coinInput,
        setCoinInput: setCoinInput,
        setChosenCoin: setChosenBeforeCoin
    }

    const filteredOptionsDataOutput = {
        coinList: coinList, 
        coinInput: coinOutput,
        setCoinInput: setCoinOutput, 
        setChosenCoin: setChosenAfterCoin
    }

    const handleFocused = () => {
        setTimeout(() => {
            setIfSelected(true)
        }, 100);
    }
    const handleBlurred = () => { 
        setTimeout(() => {
            setIfSelected(false)
        }, 100);
    }

    const handleFocusedAfter = () => {
        setTimeout(() => {
            setResultIfSelected(true)
        }, 100);
    }

    const handleBlurredAfter = () => {
        setTimeout(() => {
            setResultIfSelected(false)
        }, 100);
    }
    
    const returnCoinImage = (coin) => coin.coinImage ? <ChosenCoinImage src={coin.coinImage}/> : ''

    useEffect(() => {
        async function getAllCoinsFiltered() {
            try {
                const allCoinsWithImages = await getAllCoinsWithImagesNoPage(currencyType)
                setCoinList(allCoinsWithImages.map((each) => {
                    return { id: each.id, name: each.name, image: each.image, current_price: each.current_price }
                }))
            } catch (err) {
                console.log(err)
            }
        }
        getAllCoinsFiltered()
    }, [])

    const convertCurrency = () => {
        setAmountOfCoinOutput((chosenBeforeCoin.coinPrice * amountOfCoin) / chosenAfterCoin.coinPrice)
    }
    return (
        <ConverterWrapper>

            <BorderWrapper>
                <CoinFieldBox>
                    <ConverterLabel> You Sell </ConverterLabel>
                    <CoinInputBox>
                        <ChosenCoinBox>
                                <MidRow className="w-96 flex flex-row items-center justify-center">
                                    {returnCoinImage(chosenBeforeCoin)}
                                    <CoinInput type='text' placeholder='Coin..' onFocus={handleFocused} onBlur={handleBlurred} value={coinInput} onChange={(e) => setCoinInput(e.target.value)} />
                                    <CoinAmountInput type='number' placeholder="Amount.." onChange={(e) => setAmountOfCoin(e.target.value)}/>
                                </MidRow>
                                {returnOnCondition(<FilteredOptions filteredOptionsData={filteredOptionsDataInput}/>, () => ifSelected)}
                        </ChosenCoinBox>
                    </CoinInputBox>
                    <PriceInformation chosenCoin={chosenBeforeCoin}/>
                </CoinFieldBox>
            </BorderWrapper>

            <ConvertButton onClick={convertCurrency}> C </ConvertButton>

            <BorderWrapper>
                <CoinFieldBox>
                    <ConverterLabel> You Buy </ConverterLabel>
                    <CoinOutputBox>
                        <ChosenCoinBox>
                                <MidRow className="w-96">
                                    {returnCoinImage(chosenAfterCoin)}
                                    <CoinOutput type='text'  placeholder='Coin..' onFocus={handleFocusedAfter} onBlur={handleBlurredAfter} value={coinOutput} onChange={(e) => setCoinOutput(e.target.value)}/>
                                    <CoinAmountOutput>{roundToHundredth(amountOfCoinOutput)}</CoinAmountOutput>
                                </MidRow>
                                {returnOnCondition(<FilteredOptions filteredOptionsData={filteredOptionsDataOutput} />, () => resultIfSelected)}
                        </ChosenCoinBox>
                    </CoinOutputBox>
                    <PriceInformation chosenCoin={chosenAfterCoin}/>
                </CoinFieldBox>
            </BorderWrapper>
        </ConverterWrapper>
    )
}

export default Converter