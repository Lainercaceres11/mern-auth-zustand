import axios from "axios";
import { useAuthStore } from "../store/auth";

const authApi = axios.create({
  baseURL: "http://localhost:8080/"
});

authApi.interceptors.request.use(
	config => {
		const authToken = useAuthStore.getState().token;
		if (authToken) {
			config.headers.Authorization = `Bearer ${authToken}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

export default authApi;
