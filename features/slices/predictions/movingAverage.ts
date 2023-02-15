import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMarkerState {
  value: boolean
}

const initialState: IMarkerState = {
  value: false
}

export const markerSlice = createSlice({
  name: 'movingAverage',
  initialState,
  reducers: {
    visualizeMovingAverage: (state) => {
      state.value = true
    },
    inVisualizeMovingAverage: (state) => {
      state.value = false
    },
    setVisualizeMovingAverage: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    }
  }
})

export const {
  visualizeMovingAverage,
  inVisualizeMovingAverage,
  setVisualizeMovingAverage
} = markerSlice.actions

export default markerSlice.reducer
