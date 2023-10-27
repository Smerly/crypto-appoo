import { persistReducer, persistStore } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import { portfolioSlice } from './portfolioSlice'
import portfolioReducer from './portfolioSlice'

const persistedReducer = persistReducer({
    key: 'root',
    storage: storage,
}, portfolioReducer)

const store = configureStore({
    reducer: {
        portfolio: persistedReducer
    }
})

export default store;
export const persistor = persistStore(store)