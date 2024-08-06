import axios from 'axios'
import { authRequestMiddleware, authResponseMiddleware } from '../auth/authMiddleware';

const axiosInstance = axios.create({ baseURL: 'https://localhost:7251/api' })

// axiosInstance.interceptors.request.use(authRequestMiddleware)
// axiosInstance.interceptors.response.use(authResponseMiddleware)

export default axiosInstance;

