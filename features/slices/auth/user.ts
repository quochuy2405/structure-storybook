import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUserState {
  photo?: string | null
  name?: string | null
  email?: string | null
  token?: string | null
}

const initialState: IUserState = {
  photo: '',
  name: '',
  email: '',
  token: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    resetUser: (state) => {
      state.photo = initialState.photo
      state.name = initialState.name
      state.email = initialState.email
      state.token = initialState.token
    },
    setUser: (state, actions: PayloadAction<IUserState>) => {
      state.photo = actions.payload.photo
      state.name = actions.payload.name
      state.email = actions.payload.email
      state.token = actions.payload.token
    }
  }
})

export const { setUser, resetUser } = userSlice.actions

export default userSlice.reducer
