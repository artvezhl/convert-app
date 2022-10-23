import { configureStore } from '@reduxjs/toolkit'
import appReducer from './appSlice'
import { currencyApi } from './currency'

export const store = configureStore({
    reducer: {
        app: appReducer,
        [currencyApi.reducerPath]: currencyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(currencyApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
