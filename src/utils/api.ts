import Axios from 'axios';
import {BASE_URL} from './constants';

const axios = Axios.create({
  baseURL: BASE_URL,
  timeout: 80000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    // config.headers['x-access-token'] = this.userToken;
    return config;
  },
  error => {
    // Do something with response error
    console.log('API ERR:', error.message);
    return Promise.reject(error);
  },
);

// Add a response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    // Do something with response error
    console.log('API ERR:', error.message);
    // return error.response;
    return Promise.reject(error);
  },
);

interface user {
  email: string;
  password: string;
}

export const login = async (data: user) => {
  try {
    return await axios.post('/login', data);
  } catch (err) {
    return err;
  }
};
