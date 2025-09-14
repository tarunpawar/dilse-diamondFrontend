import axios from 'axios';

const axiosClient = axios.create({
   baseURL: 'https://dilsejewels.com/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

export default axiosClient;