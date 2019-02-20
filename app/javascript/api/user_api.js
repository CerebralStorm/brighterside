import axios from '../custom_axios';

class UserApi {
  static updateUser(userId, params = {}) {
    return axios.put(`/api/v1/users/${userId}`, params)
  }

  static signUp(params = {}) {
    return axios.post(`/auth`, params)
  }

  static login(params = {}) {
    return axios.post('/auth/sign_in', params)
  }

  static signOut(params = {}) {
    return axios.delete('/auth/sign_out', params)
  }
}

export default UserApi;
export { UserApi };
