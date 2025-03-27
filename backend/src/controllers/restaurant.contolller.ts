import { FastifyReply, FastifyRequest } from 'fastify';
import { Restaurant, RestaurantParams } from '../types/restaurant.types';
import {
  fetchAllRestaurants,
  fetchRestaurantById,
} from '../services/googlePlaces.services';

export const getNearbyRestaurants = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  try {
    const restaurants: Restaurant[] = await fetchAllRestaurants();
    reply.status(200).send(restaurants);
  } catch (error) {
    request.log.error(error);
    reply.status(500).send({ error: 'Failed to fetch restaurants' });
  }
};

export const getRestaurantDetail = async (
  request: FastifyRequest<{ Params: RestaurantParams }>,
  reply: FastifyReply
): Promise<void> => {
  const { id } = request.params;

  try {
    const restaurant: Restaurant | null = await fetchRestaurantById(id);
    if (restaurant) {
      reply.send(restaurant);
    } else {
      reply.status(404).send({ error: 'Restaurant not found' });
    }
  } catch (error) {
    request.log.error(error);
    reply.status(500).send({ error: 'Failed to fetch restaurant details' });
  }
};
