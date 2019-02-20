import { UserApi } from '../api/user_api'
import { logAndDispatchError } from '../utils'
import constants from '../constants'

var signUp = function (params = {}) {
  return function (dispatch) {
    return UserApi.loadProducts(params)
      .then(response => {
        dispatch({ type: constants.LOAD_PRODUCTS, products: response.data.products })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to load products.')
      })
  }
}

var login =  function (params) {
  return function (dispatch) {
    return UserApi.login(params)
      .then(response => {
        dispatch({ type: constants.LOAD_PRODUCTS, products: response.data.products })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to load products.')
      })
  }
}

var signOut =  function (params) {
  return function (dispatch) {
    return UserApi.signOut(params)
      .then(response => {
        dispatch({ type: constants.LOAD_PRODUCTS, products: response.data.products })
      })
      .catch(error => {
        logAndDispatchError(dispatch, error, 'An error occurred while attempting to load products.')
      })
  }
}

export { signUp, login };