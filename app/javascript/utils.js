import { constants } from './constants'
import Cookies from 'js-cookie'

const logAndDispatchError = function(dispatch, error, message) {
  if(process.env.NODE_ENV == 'development'){
    console.error(error);
  }
  dispatch({
    type: constants.DISPLAY_FLASH_MESSAGE,
    messageType: 'error',
    message: message
  })
}

const setHeaders = function(response) {
  Cookies.set('uid', response.headers['uid'])
  Cookies.set('client', response.headers['client'])
  Cookies.set('access-token', response.headers['access-token'])
  Cookies.set('expiry', response.headers['expiry'])
}

const axiosHeaders = function(response) {
  return {
    headers: {
      'X-CSRF-Token': ENV.csrf_token,
      'access-token': Cookies.get('access-token'),
      'uid': Cookies.get('uid'),
      'client': Cookies.get('client'),
      'expiry': Cookies.get('expiry')
    }
  }
}

const snakeCase = function(params = {}) {
  let result = {};
  Object.keys(params).forEach(function (param) {
    let newParam = param.replace(/\.?([A-Z]+)/g, function (x,y) { return "_" + y.toLowerCase() }).replace(/^_/, "")
    result[newParam] = params[param]
  });
  return result;
}

export{ logAndDispatchError, setHeaders, axiosHeaders, snakeCase };