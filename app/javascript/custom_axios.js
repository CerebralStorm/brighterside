import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  headers: {
    'X-CSRF-Token': ENV.csrf_token,
    'access-token': Cookies.get('access-token'),
    'uid': Cookies.get('uid'),
    'client': Cookies.get('client'),
    'expiry': Cookies.get('expiry')
  }
});

export default instance