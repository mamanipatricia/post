import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    console.log("request**", request);
    //   first, edit request config before you return it. you can add headers
    return request; // always return this  (otherwise you are blocking the request)
  },
  (error) => {
    // whe the request send fails
    console.log("error", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
