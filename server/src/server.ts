import 'graphql-import-node';
import fastify, {
  type FastifyInstance,
  type FastifyPluginAsync
} from 'fastify';
import { printSchema } from 'graphql';
import mercurius from 'mercurius';
import { schema, resolvers } from './schema/schema';
import fastifyCors, { type FastifyCorsOptions } from '@fastify/cors';
import dotenv from 'dotenv';

dotenv.config();
const isDevelopment = process.env.NODE_ENV === 'development';
console.log('Is development node env: ', isDevelopment);

export const createServer = async function (): Promise<FastifyInstance> {
  const server = await fastify({ logger: true });

  const corsOptions: FastifyCorsOptions = isDevelopment
    ? {
        // Development
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
      }
    : {
        // Production
        origin: ['https://sang-logium.com'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
      };

  await server.register(fastifyCors as FastifyPluginAsync, corsOptions);
  await server.register(mercurius, {
    schema: printSchema(schema),
    resolvers
  });

  return server;
};

const configureServer = async function (): Promise<void> {
  const server = await createServer();
  const port = 8443;
  server.route({
    method: 'GET',
    url: '/api/hello',
    handler: async (request, reply) => {
      return {
        message:
          'Hello, World from the server! If you see this text right here, it means that the server is working! Test change 3. Test change 4.'
      };
    }
  });

  server.listen({ port, host: '0.0.0.0' }, err => {
    if (err !== null) {
      console.error(err);
      process.exit(1);
    }
    console.log(`server listening on ${port}.`);
  });
};

if (require.main === module) {
  void configureServer();
}
