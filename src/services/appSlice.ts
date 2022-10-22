import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
    baseCurrency: string
}

const initialState: AppState = {
    baseCurrency: 'USD',
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        changeBaseCurrency: (state, action: PayloadAction<string>) => {
            state.baseCurrency = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeBaseCurrency } = appSlice.actions

export default appSlice.reducer
