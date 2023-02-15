import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPredictingState {
  value: boolean
}

const initialState: IPredictingState = {
  value: false
}

export const predictingSlice = createSlice({
  name: 'predicting',
  initialState,
  reducers: {
    setPredicting: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    }
  }
})

export const { setPredicting } = predictingSlice.actions

export default predictingSlice.reducer
