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
  console.log('||||||||||Prevous Value||||||||||')
  console.log('access-token:', Cookies.get('access-token'))
  console.log('uid:', Cookies.get('uid'))
  console.log('client:', Cookies.get('client'))
  console.log('expiry:', Cookies.get('expiry'))

  console.log('||||||||||New Value||||||||||')
  console.log('access-token', response.headers['access-token'])
  console.log('uid', response.headers['uid'])
  console.log('client', response.headers['client'])
  console.log('expiry', response.headers['expiry'])

  Cookies.set('uid', response.headers['uid'])
  Cookies.set('client', response.headers['client'])
  Cookies.set('access-token', response.headers['access-token'])
  Cookies.set('expiry', response.headers['expiry'])

  console.log('||||||||||Saved Value||||||||||')
  console.log('access-token:', Cookies.get('access-token'))
  console.log('uid:', Cookies.get('uid'))
  console.log('client:', Cookies.get('client'))
  console.log('expiry:', Cookies.get('expiry'))
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