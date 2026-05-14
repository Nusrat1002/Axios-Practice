import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
    withCredentials:true,
    timeout: 100000,
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export default api;