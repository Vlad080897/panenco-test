import axios from 'axios';

export const instance = axios.create({
  withCredentials: false,
  baseURL: 'https://www.balldontlie.io/api/v1/',
});
