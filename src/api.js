import axios from "axios";

const API_URL = "https://connections-api.goit.global";
axios.defaults.baseURL = API_URL;

export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const clearAuthToken = () => {
  delete axios.defaults.headers.common["Authorization"];
};
