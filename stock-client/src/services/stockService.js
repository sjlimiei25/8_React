// src/services/stockService.js
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL

const api = axios.create({
  baseURL: BASE_URL,
});


export const getStockByName = async (name) => {
  const response = await api.get('/api/stock?name=' + name);
  return response.data;
}
