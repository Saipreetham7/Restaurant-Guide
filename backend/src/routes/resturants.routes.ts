import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import {
  getNearbyRestaurants,
  getRestaurantDetail,
} from '../controllers/restaurant.contolller';

const restaurantRoutes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.get('/restaurants', getNearbyRestaurants);
  fastify.get('/restaurants/:id', getRestaurantDetail);
};

export default restaurantRoutes;
