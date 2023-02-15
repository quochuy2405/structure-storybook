import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
  photo?: string | null
  name?: string | null
  email?: string | null
}

const initialState: IUserState = {
  photo: '',
  name: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.photo = initialState.photo
      state.name = initialState.name
      state.email = initialState.email
    },
    setUser: (state, actions: PayloadAction<IUserState>) => {
      state.photo = actions.payload.photo
      state.name = actions.payload.name
    }
  }
})

export const { setUser, resetUser } = userSlice.actions

export default userSlice.reducer
