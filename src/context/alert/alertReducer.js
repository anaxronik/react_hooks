import { HIDE_ALERT, SHOW_ALERT } from '../actionTypes'

export const alertReducer = (state, action) => {
  switch (action.type) {
    default:
      return state

    case SHOW_ALERT:
      return action.payload

    case HIDE_ALERT:
      return null
  }
}
