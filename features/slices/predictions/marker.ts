import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IMarkerState {
  value: boolean
}

const initialState: IMarkerState = {
  value: false
}

export const markerSlice = createSlice({
  name: 'marker',
  initialState,
  reducers: {
    visualizeMarker: (state) => {
      state.value = true
    },
    inVisualizeMarker: (state) => {
      state.value = false
    },
    setVisualizeMarker: (state, actions: PayloadAction<boolean>) => {
      state.value = actions.payload
    }
  }
})

export const { visualizeMarker, inVisualizeMarker, setVisualizeMarker } =
  markerSlice.actions

export default markerSlice.reducer
