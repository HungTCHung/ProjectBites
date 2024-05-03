// import axios from "axios";
import http from "axios";
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
const uploadImage = (formdata) => {
  return axios
    .post("http://localhost:8080/upload", formdata)
    .then((res) => {
      if (res && res.data.EC === 0) {
        console.log("Success");
      } else {
        console.log("Failed");
      }
    })
    .catch((err) => console.log(err));
};
const getImage = () => {
  return axios.get("/get-image");
};
const createPost = (textContent, htmlContent) => {
  return axios.post("/create-post");
};

// const FileUploadService = {
//   upload,
//   getFiles,
// };
export { loginUser, getUserAccount, uploadImage, getImage, createPost };
