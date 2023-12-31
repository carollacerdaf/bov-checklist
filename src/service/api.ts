import { AppError } from '@utils/AppError';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://challenge-front-end.bovcontrol.com'
});

api.interceptors.response.use(response => response, error => {
    if (error.response && error.response.data) {
        return Promise.reject(new AppError(error.response.data.message));
    } else {
        return Promise.reject(error)
    }
});

export { api };