import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
// Portfolio
import { portfolioSlice } from './portfolioSlice'
import portfolioReducer from './portfolioSlice'
// Currency
import { currencySlice } from './currencySlice'
import currencyReducer from './currencySlice'

const rootReducer = combineReducers({
    portfolio: portfolioReducer,
    currency: currencyReducer
})

const persistedReducer = persistReducer({
    key: 'root',
    storage: storage,
}, rootReducer)

// const persistedCurrency = persistReducer({
//     key: 'root',
//     storage: storage,
// }, currencyReducer)

const store = configureStore({
    reducer: {
        // portfolio: persistedReducer,
        persist: persistedReducer,
        // currency: persistedCurrency
    }
})

export default store;
export const persistor = persistStore(store)