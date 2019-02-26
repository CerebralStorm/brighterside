import axios from '../custom_axios';
import { axiosHeaders, snakeCase } from '../utils'

class UserApi {
  static updateUser(userId, params = {}) {
    return axios.put(`/api/v1/users/${userId}`, snakeCase(params), axiosHeaders)
  }

  static currentUser(params = {}) {
    return axios.get(`/api/v1/users/show_current_user`, snakeCase(params), axiosHeaders)
  }

  static signUp(params = {}) {
    return axios.post(`/api/v1/auth`, snakeCase(params))
  }

  static login(params = {}) {
    return axios.post('/api/v1/auth/sign_in', snakeCase(params))
  }

  static signOut(params = {}) {
    return axios.delete('/api/v1/auth/sign_out', snakeCase(params), axiosHeaders)
  }
}

export default UserApi;
export { UserApi };
