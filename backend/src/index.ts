import Fastify from 'fastify';
import dotenv from 'dotenv';
import restaurantRoutes from './routes/resturants.routes';

import cors from '@fastify/cors';

dotenv.config();

const fastify = Fastify();

// Register CORS
fastify.register(cors, {
  origin: true, // Allow all origins in development
  // Set specific origins in production:
  // origin: ['http://localhost:5173', 'http://yourdomain.com']
});

fastify.register(restaurantRoutes);


const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: '0.0.0.0' });
    console.log('Server is running on http://localhost:4000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
