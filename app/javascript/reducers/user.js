import constants from '../constants'

var currentUserReducer = function (state = {}, action) {
  console.log(action.type == constants.LOAD_USER)
  switch (action.type) {
    case constants.LOAD_USER:
      return action.user;
    case constants.CLEAR_USER:
      return {};
    default:
      return state;
  }
}

export { currentUserReducer };
export default currentUserReducer;