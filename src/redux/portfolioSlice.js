import { createSlice } from '@reduxjs/toolkit'

    // currencies interface:
// {
//      id: 1,
//      recordedCurrencyInfo: {currency from api},
//      amountPurchased: 2,
//      priceTotalCurrency: $200,
// }

const initialState = {
    currencies: []
}

export const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: initialState,
    reducers: {
        addCurrency: (currentState, action) => {
            currentState.currencies = [...currentState.currencies, action.payload]
        },
        updateCurrency: (currentState, action) => {
            const currencyId = action.payload.id
            let index = 0;
            currentState.forEach((each) => {
                if (each.id === currencyId) {
                    currentState.currencies[index] = action.payload
                }
            })
            index += 1
        },
        sellCurrency: (currentState, action) => {
            const currencyId = action.payload.id
            let index = 0
            currentState.forEach((each) => {
                if (each.id === currencyId) {
                    currentState.currencies.splice(index, 1)
                }
                index += 1
            });
        }
    }
})

export const { addCurrency, sellCurrency } = portfolioSlice.actions

export default portfolioSlice.reducer;