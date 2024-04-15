import axios from "axios";

const loginUser = (email, password) => {
  return axios.post("http://localhost:8080/api/v1/login", {
    email,
    password,
  });
};
export { loginUser };
