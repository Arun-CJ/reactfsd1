import { GET_NAMES, GET_USER_NAME } from "../actions/actionTypes";

const instialState = {
  name: {},
  username: {},
};

export default function (state = instialState, actions) {
  switch (actions.type) {
    case GET_NAMES:
      return {
        ...state,
        name: actions.payload,
      };
    case GET_USER_NAME:
      return {
        ...state,
        username: actions.payload,
      };
    default:
      return state;
  }
}
