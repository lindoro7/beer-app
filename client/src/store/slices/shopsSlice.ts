import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IShop} from '../../interfaces'

interface ShopsState {
    loading: boolean
    error: string
    shops: IShop[]
  
  }

  const initialState: ShopsState = {
    loading: false,
    error: '',
    shops: []
  }

export const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {
      fetching(state) {
        state.loading = true
      },
      fetchSuccess(state, action: PayloadAction<IShop[]>) {
        state.loading = false 
        state.shops = action.payload
        state.error = ''
      },
      createSuccess(state, action: PayloadAction<IShop>) {
        state.loading = false 
        state.shops.push(action.payload)
        state.error = ''
      },
      updateSuccess(state, action: PayloadAction) {
        state.loading = false 
        state.error = ''
      },
      deleteSuccess(state, action: PayloadAction<string>) {
        state.loading = false 
        state.shops = state.shops.filter((s) => Number(s.id) !== Number(action.payload))
        state.error = ''
      },
      fetchError(state, action: PayloadAction<Error>) {
        state.loading = false
        state.error = action.payload.message
      }
    }
  })
  
  export const { fetching, fetchSuccess, fetchError, createSuccess, deleteSuccess, updateSuccess } = shopsSlice.actions
  export default shopsSlice.reducer