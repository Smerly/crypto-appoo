import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currency: 'usd'
}

export const currencySlice = createSlice({
    name: 'currency',
    initialState: initialState,
    reducers: {
        changeCurrency: (currentState, action) => {
            currentState.currency = action.payload.currency
        }
    }
})

export const { changeCurrency } = currencySlice.actions

export default currencySlice.reducer;