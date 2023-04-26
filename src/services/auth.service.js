import axios from "axios";

//register user
export const registerUser = (payload) => axios.post("/api/register", payload);

//login user
export const loginUser = (payload) => axios.post("/api/login", payload);

//set user in local storage
export const setUserToLocalStorage = (payload) =>
  localStorage.setItem("donutsUser", JSON.stringify(payload));

//remove user from local storage
export const removeUserToLocalStorage = () =>
  localStorage.removeItem("donutsUser");

//set token in local storage
export const setTokenToLocalStorage = (token) =>
  localStorage.setItem("donuts_token", token);

//activate account
export const activateAccount = (id) =>
  axios.put(`/api/user/activateAccount/${id}`);
