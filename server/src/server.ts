import 'graphql-import-node';
import {
  fastify,
  type FastifyInstance,
  type FastifyPluginAsync
} from 'fastify';
import { printSchema } from 'graphql';
import mercurius from 'mercurius';
import { schema, resolvers } from './schema/schema';
import fastifyCors from 'fastify-cors';

export const createServer = async function (): Promise<FastifyInstance> {
  const server = fastify();

  await server.register(fastifyCors as FastifyPluginAsync, {});

  await server.register(mercurius, {
    schema: printSchema(schema),
    resolvers
  });

  return await server;
};

const configureServer = async function () {
  const server = createServer();
  const port = 8443;
  await server.route({
    method: 'GET',
    url: '/hello',
    handler: async (request, reply) => {
      return { message: 'Hello, World!' };
    }
  });

  server.listen({ port }, err => {
    if (err !== null) {
      console.error(err);
      process.exit(1);
    }
    console.log(`server listening on ${port}.`);
  });
};

if (require.main === module) {
  try {
    await configureServer();
  } catch (err) {
    console.error(err);
  }
}
