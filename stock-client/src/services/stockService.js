// src/services/stockService.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL
const SPRING_SERVER = process.env.REACT_APP_API_SPRING_SERVER

const api = axios.create({
  // baseURL: BASE_URL,
  baseURL: SPRING_SERVER,
});


export const getStockByName = async (name) => {
  const response = await api.get('/api/stock?name=' + name);
  return response.data;
}
