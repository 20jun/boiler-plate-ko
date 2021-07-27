import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_actions/types";

// state = {} : 현재 store에 있는 값이고
// action 인자값의 type이 맞으면 state를 변화시킴
export default function (state = {}, action) {
  console.log("user_reducer.js action : ", action);
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case REGISTER_USER:
      return { ...state, register: action.payload };
      break;

    case AUTH_USER:
      return { ...state, userData: action.payload };
      break;
    default:
      return state;
  }
}
