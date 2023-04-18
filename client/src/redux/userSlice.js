import { createSlice } from '@redux/toolkit'

const initialState = {
  name: '',
  email: '',
  password: '',
  picture: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {},
  },
})

export const { addUser } = userSlice.actions
export default userSlice.reducer
