import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});
instance.defaults.withCredentials = true;

//// Alter defaults after instance has been created
// instance.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (err) {
    const status = (err && err.response && err.response.status) || 500;
    // Do something with request error
    switch (status) {
      case 401: {
        return Promise.reject(err);
      }
      case 403: {
        return Promise.reject(err);
      }
      case 400: {
        return Promise.reject(err);
      }
      case 404: {
        return Promise.reject(err);
      }
      case 409: {
        return Promise.reject(err);
      }
      case 422: {
        return Promise.reject(err);
      }
      default: {
        return Promise.reject(err);
      }
    }
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;
