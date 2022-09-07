import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import shopsReducer from './slices/shopsSlice'

const rootReducer = combineReducers({
  user: userReducer,
  shops: shopsReducer
})

export function setupStore() {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>  
export type AppDispatch = AppStore['dispatch']