import 'graphql-import-node';
import fastify, { type FastifyInstance } from 'fastify';
import { printSchema } from 'graphql';
import mercurius from 'mercurius';
import { schema, resolvers } from './schema/schema';
import fastifyCors from '@fastify/cors';
// test commit name
export const createServer = async function (): Promise<FastifyInstance> {
  const server = await fastify({ logger: true });

  await server.register(fastifyCors, {});

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
  void configureServer();
}
