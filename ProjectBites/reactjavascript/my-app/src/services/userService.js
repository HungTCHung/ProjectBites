// import axios from "axios";
import axios from "../setup/axios";
const loginUser = (email, password) => {
  return axios.post("/api/v1/login", {
    email,
    password,
  });
};
const getUserAccount = () => {
  return axios.post("/api/v1/account", {});
};
export { loginUser, getUserAccount };
