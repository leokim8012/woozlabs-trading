import axios from "axios";
// import store from "store/index";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://us-central1-woozlabs.cloudfunctions.net/"
      : "http://localhost:5001/woozlabs/us-central1/",
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

instance.interceptors.request.use(
  function (config) {
    if (config.headers) {
      config.headers.authorization = "token";
      return config;
    }
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
