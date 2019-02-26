import { UserApi } from '../api/user_api'
import { logAndDispatchError, setHeaders } from '../utils'
import constants from '../constants'

var parseUser = function (response) {
  return response.data.data || {};
}

var signUp = function (params = {}) {
  return function (dispatch) {
    return UserApi.loadProducts(params)
      .then(response => {
        setHeaders(response)
        dispatch({ type: constants.LOAD_USER, user: parseUser(response) })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to sign up.')
      })
  }
}

var currentUser =  function (params) {
  return function (dispatch) {
    return UserApi.currentUser(params)
      .then(response => {
        setHeaders(response)
        dispatch({ type: constants.LOAD_USER, user: parseUser(response) })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to get the current user.')
      })
  }
}

var login =  function (params) {
  return function (dispatch) {
    return UserApi.login(params)
      .then(response => {
        console.log(response)
        setHeaders(response)
        dispatch({ type: constants.LOAD_USER, user: parseUser(response) })
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
        setHeaders(response)
        dispatch({ type: constants.CLEAR_USER })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to logout.')
      })
  }
}

export { signUp, currentUser, login, signOut };