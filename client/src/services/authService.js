import http from "./httpService";
import config from "./config.json";
import { useNavigate } from 'react-router-dom';

const apiEndPoint = config.apiUrl + "/auth";

function signUp (email ,password) {
    return http.post(apiEndPoint + "/signup" , {email , password });

    console.log(apiEndPoint + "/signup");
}

function login (email ,password) {
    return http.post(apiEndPoint + "/login" , {email, password});
}

function logout() {
    localStorage.removeItem("user");
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
}

export  {
    signUp,
    login,
    logout,
    getCurrentUser
};


