import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {IUser} from '../../interfaces'

// Define a type for the slice state
interface UserState {
  loading: boolean
  errors: any[] 
  message: string
  user: IUser
  users: IUser[]
}

export interface ServerResponse {
  user: IUser
  users: IUser[]
  message: string
  errors: any[]
}


// Define the initial state using that type
const initialState: UserState = {
  loading: false,
  errors: [],
  message: '',
  user: {
    id: '',
    name: '',
    role: '',
    login: '',
    contact: ''
  },
  users: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    fetchSuccess(state, action: PayloadAction<ServerResponse>) {
      state.loading = false 
      state.user = action.payload.user
      state.message = action.payload.message
      state.errors = action.payload.errors
      state.users = action.payload.users
    },
    fetchError(state, action: PayloadAction<Error[]>) {
      state.loading = false
      state.errors = action.payload
      
    }
  }
})

export const { fetching, fetchSuccess, fetchError } = userSlice.actions
export default userSlice.reducer