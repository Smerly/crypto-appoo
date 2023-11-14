import { createSlice } from '@reduxjs/toolkit'

const initialState = 'usd'

export const currencySlice = createSlice({
    name: 'currency',
    initialState: initialState,
    reducers: {
        changeCurrency: (currentState, action) => {
            currentState = action.payload
        }
    }
})

export const { changeCurrency } = currencySlice.actions

export default currencySlice.reducer;
