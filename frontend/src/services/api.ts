import axios from 'axios';
import { Restaurant } from '../types/Restaurant';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await api.get<Restaurant[]>('/restaurants');
  return response.data;
};

export const getRestaurantById = async (id: string): Promise<Restaurant> => {
  const response = await api.get<Restaurant>(`/restaurants/${id}`);
  return response.data;
};

export default api;
