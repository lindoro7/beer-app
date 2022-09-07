import {AppDispatch} from '../index'
import { shopsSlice } from '../slices/shopsSlice'

type shopCreateProps = {
  name: string
  addres: string
  contact: string
  userId: string
  salesId: string
  technikId: string
}

type shopUpdateProps = {
  id: string | undefined
  name: string
  addres: string
  contact: string
  userId: string
  salesId: string
  technikId: string
}


export const fetchShops = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(shopsSlice.actions.fetching)
      let response = await fetch('api/shops')
      let data = await response.json()
      dispatch(shopsSlice.actions.fetchSuccess(data))
    } catch (error) {
      dispatch(shopsSlice.actions.fetchError(error as Error))
    }
  }
}

export const nullShop = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(shopsSlice.actions.fetching())
      dispatch(shopsSlice.actions.fetchSuccess([]))
    } catch (error) {
      dispatch(shopsSlice.actions.fetchError(error as Error))
    }
  }
}

export const createShop = ({name, addres, contact, userId, technikId, salesId}: shopCreateProps) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(shopsSlice.actions.fetching())
      const response = await fetch('/api/shops',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, addres, contact, userId, salesId, technikId }),
      })
      const data = await response.json()
      dispatch(shopsSlice.actions.createSuccess(data))
    } catch (error) {
      dispatch(shopsSlice.actions.fetchError(error as Error))
    }
  }
}

export const deleteShop = (id: string | undefined) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(shopsSlice.actions.fetching())
      const response = await fetch(`/api/shops/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json()
      dispatch(shopsSlice.actions.deleteSuccess(data))
    } catch (error) {
      dispatch(shopsSlice.actions.fetchError(error as Error))
    }
  }
}

export const updateShop = ({id, name, addres, contact, salesId, technikId, userId}: shopUpdateProps) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(shopsSlice.actions.fetching())
      await fetch(`/api/shops/${id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, addres, contact, userId, salesId, technikId }),
      })
      dispatch(shopsSlice.actions.updateSuccess())
    } catch (error) {
      dispatch(shopsSlice.actions.fetchError(error as Error))
    }
  }
}


  
