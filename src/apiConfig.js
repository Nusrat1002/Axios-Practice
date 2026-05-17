import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken =
      JSON.parse(localStorage.getItem("accessToken")) || "Hello World";
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    try{
        if(error.response.status === 401 && !originalRequest._retry){
        originalRequest._retry = true;
        const refreshToken = JSON.parse(localStorage.getItem("refreshToken"));
        if(!refreshToken){
            window.location.href = "/login";
            return Promise.reject(error);
        }
       const response = await  axios.post("https://dummyjson.com/auth/refresh", {
        refreshToken: refreshToken,
       })
       if (response.status === 201){
        localStorage.setItem("accessToken", JSON.stringify(response.accessToken))
        localStorage.setItem("refreshToken", JSON.stringify(response.refreshToken))
        originalRequest.headers.Authorization = `Bearer ${response.accessToken}`;
        api(originalRequest);
       }
    }
    }catch(error){
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(error);
    }
    return Promise.reject(error);
});

export default api;