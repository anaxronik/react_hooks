import React, { useReducer } from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../actionTypes'
import { AlertContext } from './alertContext'
import { alertReducer } from './alertReducer'

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null)

  const show = (text, type = 'secondary') =>
    dispatch({ type: SHOW_ALERT, payload: { type, text } })

  const hide = () => dispatch({ type: HIDE_ALERT })

  return (
    <AlertContext.Provider value={{ hide, show, alert: state }}>
      {children}
    </AlertContext.Provider>
  )
}
