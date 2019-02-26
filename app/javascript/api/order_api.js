import axios from '../custom_axios';
import { axiosHeaders, snakeCase } from '../utils'

class OrderApi {
  static loadOrders(params = {}) {
    return axios.get(`/api/v1/orders`, snakeCase(params), axiosHeaders())
  }

  static loadOrder(orderId, params = {}) {
    return axios.get(`/api/v1/orders/${orderId}`, snakeCase(params), axiosHeaders())
  }
}

export default OrderApi;
export { OrderApi };
