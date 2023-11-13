import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { portfolioSlice } from './portfolioSlice'
import portfolioReducer from './portfolioSlice'
import { currencySlice } from './currencySlice';
import currencyReducer from './currencySlice'

const rootReducer = combineReducers({currency: currencyReducer, portfolio: portfolioReducer})

const persistedReducer = persistReducer({
    key: 'root',
    storage: storage,
}, rootReducer)

const store = configureStore({
    reducer: {
        persist: persistedReducer
    }
})

export default store;
export const persistor = persistStore(store)