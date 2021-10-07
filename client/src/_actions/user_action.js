import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

export function loginUser(dataTosubmit) {
  const request = axios
    .post("/api/users/login", dataTosubmit)
    .then((res) => res.data);

  // reducer로 보냄
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(dataTosubmit) {
  console.log(dataTosubmit);
  const request = axios
    .post("/api/users/register", dataTosubmit)
    .then((res) => res.data);

  console.log("user_action.js request : ", request);
  // reducer로 보냄
  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios.get("/api/users/auth").then((res) => res.data);

  // reducer로 보냄
  return {
    type: AUTH_USER,
    payload: request,
  };
}
