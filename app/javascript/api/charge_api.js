import axios from '../custom_axios';
import { axiosHeaders, snakeCase } from '../utils'

class ChargeApi {
  static createCharge(params = {}) {
    return axios.post(`/api/v1/charges`, snakeCase(params), axiosHeaders())
  }
}

export default ChargeApi;
export { ChargeApi };
