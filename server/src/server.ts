import fastify, {
  type FastifyInstance,
  type FastifyPluginAsync
} from 'fastify';
import 'graphql-import-node';
import mercurius from 'mercurius';
import { printSchema } from 'graphql';
import dotenv from 'dotenv';
import { schema, resolvers } from './schema/schema';
import fastifyCors, { type FastifyCorsOptions } from '@fastify/cors';
import mongoose from 'mongoose';

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

  const uri = process.env.MONGO_URI;
  console.log(uri);
  if (uri === undefined) throw new Error('MONGO_URI is not defined');

  mongoose
    .connect(uri)
    .then(() => {
      console.log('MongoDB Connected');
    })
    .catch(err => {
      console.log(err);
    });

  const { Schema } = mongoose;

  const messageSchema = new Schema({
    message: String
  });

  const Message = mongoose.model('Message', messageSchema);

  mongoose.set('debug', function (collectionName, method, query, doc) {
    console.log(`${collectionName}.${method}`, JSON.stringify(query), doc);
  });

  server.route({
    method: 'GET',
    url: '/api/hello',
    handler: async (request, reply) => {
      try {
        const doc = await mongoose.model('Message').findOne({});
        console.log('All Doc:', doc);

        return { message: doc.message };
      } catch (error) {
        console.error(error);
        // Ideally, return a more structured error response for the client
        return await reply.code(500).send({ message: 'Internal server error' });
      }
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
