import axios from "axios";
import { toast } from "react-toastify";

function setAuthHeader() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return {"x-auth-token": user.accessToken};
    // axios.defaults.headers.common["x-auth-token"] = user.accessToken;
  }else{
    return {};
  }
} 

axios.interceptors.response.use(null, (error) => {
  //UnExpected Error
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("Loggin the error ", error);
    toast.error("an unExpected Error occurred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setAuthHeader,
};
