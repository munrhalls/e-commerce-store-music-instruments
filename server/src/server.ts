import 'graphql-import-node';
import { fastify, type FastifyInstance } from 'fastify';
import { printSchema } from 'graphql';
import mercurius from 'mercurius';
import { schema, resolvers } from './schema/schema';

export const createServer = function (): FastifyInstance {
  const server = fastify();

  void server.register(mercurius, {
    schema: printSchema(schema),
    resolvers
  });

  return server;
};

if (require.main === module) {
  const server = createServer();
  const port = 8443;

  server.listen({ port }, err => {
    if (err !== null) {
      console.error(err);
      process.exit(1);
    }
    console.log(`server listening on ${port}.`);
  });
}
