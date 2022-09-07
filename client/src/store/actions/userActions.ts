import { IUser } from '../../interfaces'
import {AppDispatch} from '../index'
import { userSlice } from '../slices/userSlice'

type userLoginProps = {
  login: string
  password: string
}

type userRegisterProps = {
  login: string
  password: string
  name?: string
  contact?: string
}

type userUpdateProps = {
  id: string | undefined
  name: string
  role: string
  contact: string
}


export const userLogin = ({login, password}: userLoginProps) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching())
      const response = await fetch('api/auth/login',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      })
      let data = await response.json()
      if(!data.user) {
        data.user = {
          id: '',
          name: '',
          role: '',
          login: '',
          contact: ''
        }
      }
      if(!data.errors) {
        data.errors = []
      }
      if(!data.users) {
        data.users = []
      }
      dispatch(userSlice.actions.fetchSuccess(data))
    } catch (error) {
      dispatch(userSlice.actions.fetchError([error as Error]))
    }
  }
}

export const userRegistration = ({login, password, name = '', contact = ''}: userRegisterProps) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching())
      const response = await fetch('api/auth/register',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password, name, contact }),
      })
      let data = await response.json()
      if(data.errors) {
        return dispatch(userSlice.actions.fetchError(data))
      }

      dispatch(userSlice.actions.fetchSuccess(data))
      
    } catch (error) {
      dispatch(userSlice.actions.fetchError([error as Error]))
    }
  }
}

export const userLogout = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching())
      const response = await fetch('api/auth/logout',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
      let data = await response.json()
      dispatch(userSlice.actions.fetchSuccess(data))
    } catch (error) {
      dispatch(userSlice.actions.fetchError([error as Error]))
    }
  }
}

export const userUpdate = ({id, name, role, contact}: userUpdateProps) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching())
      const response = await fetch('api/user', {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({id, name, role, contact}),
      })
      let data = await response.json()
      dispatch(userSlice.actions.fetchSuccess(data))

    } catch (error) {
      dispatch(userSlice.actions.fetchError([error as Error]))
    }
  }
}

export const fetchUsers = (user: IUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userSlice.actions.fetching())
      const response = await fetch('api/user',{
        headers: {
          "Content-Type": "application/json",
        },
      })
      
      let data = await response.json()
      data.user = user
      dispatch(userSlice.actions.fetchSuccess(data))
    } catch (error) {
      dispatch(userSlice.actions.fetchError([error as Error]))
    }
  }
}

