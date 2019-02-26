import axios from '../custom_axios';
import { axiosHeaders, snakeCase } from '../utils'

class MessageApi {
  static createMessage(params = {}) {
    return axios.post(`/api/v1/messages`, snakeCase(params), axiosHeaders())
  }
}

export default MessageApi;
export { MessageApi };
