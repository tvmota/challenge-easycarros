import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:8181/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export default Api;
