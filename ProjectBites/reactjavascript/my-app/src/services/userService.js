// import axios from "axios";
import axios from "../setup/axios";
const loginUser = (email, password) => {
  return axios.post("/api/v1/login", {
    email,
    password,
  });
};
export { loginUser };
