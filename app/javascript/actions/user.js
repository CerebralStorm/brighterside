import { UserApi } from '../api/user_api'
import { logAndDispatchError } from '../utils'
import constants from '../constants'

var signUp = function (params = {}) {
  return function (dispatch) {
    return UserApi.loadProducts(params)
      .then(response => {
        dispatch({ type: constants.LOAD_USER, user: response.data.data })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to sign up.')
      })
  }
}

var login =  function (params) {
  return function (dispatch) {
    return UserApi.login(params)
      .then(response => {
        dispatch({ type: constants.LOAD_USER, user: response.data.data })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to login.')
      })
  }
}

var signOut =  function (params) {
  return function (dispatch) {
    return UserApi.signOut(params)
      .then(response => {
        dispatch({ type: constants.CLEAR_USER })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to logout.')
      })
  }
}

export { signUp, login, signOut };