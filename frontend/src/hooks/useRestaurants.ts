import { useState, useEffect } from 'react';
import { getRestaurants, getRestaurantById } from '../services/api';
import { Restaurant } from '../types/Restaurant';

export const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        setLoading(true);
        const data = await getRestaurants();
        setRestaurants(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch restaurants');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return { restaurants, loading, error };
};

export const useRestaurantDetail = (id: string) => {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurantDetail = async () => {
      try {
        setLoading(true);
        const data = await getRestaurantById(id);
        setRestaurant(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch restaurant details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRestaurantDetail();
    }
  }, [id]);

  return { restaurant, loading, error };
};
