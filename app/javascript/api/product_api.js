import axios from '../custom_axios';
import { axiosHeaders, snakeCase } from '../utils'

class ProductApi {
  static loadProducts(params = {}) {
    return axios.get(`/api/v1/products`, snakeCase(params), axiosHeaders())
  }

  static loadProduct(productId, params = {}) {
    return axios.get(`/api/v1/products/${productId}`, snakeCase(params), axiosHeaders())
  }
}

export default ProductApi;
export { ProductApi };
