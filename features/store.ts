import { configureStore } from '@reduxjs/toolkit'
import marker from '@/features/slices/predictions/marker'
import user from '@/features/slices/auth/login'
import movingAverage from '@/features/slices/predictions/movingAverage'
import predicting from '@/features/slices/predictions/predicting'
import timer from '@/features/slices/predictions/timer'
const store = configureStore({
  reducer: {
    user,
    timer,
    predicting,
    marker,
    movingAverage
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
