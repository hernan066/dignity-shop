import { types } from "../types/types";
import axios from "axios";

export const starLogin = (email, password) => {
  return async (dispatch) => {
    try {
      //const res = await axios.post('https://dignity-shop.herokuapp.com/api/auth/login', {email, password});
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      //localStorage.setItem("token", res.data.accessToken);
      //localStorage.setItem("token-init-date", new Date().getTime());

      console.log(res.data);
      dispatch(loginSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(loginError());
    }
  };
};

const loginSuccess = (user) => ({
  type: types.authLoginSuccess,
  payload: user,
});
const loginError = () => ({
  type: types.authLoginError,
});
