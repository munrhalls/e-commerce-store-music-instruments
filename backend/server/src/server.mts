import 'graphql-import-node';
import fastify from 'fastify';
import {
  getGraphQLParameters,
  processRequest,
  Request,
  sendResult,
  shouldRenderGraphiQL,
  renderGraphiQL
} from 'graphql-helix';
import { schema } from './schema.mts';

const app = fastify();

app.route({
  method: ['POST', 'GET'],
  url: '/graphql',
  handler: async (req, reply) => {
    const request: Request = {
      headers: req.headers,
      method: req.method,
      query: req.query,
      body: req.body
    };

    if (shouldRenderGraphiQL(request)) {
      await reply.header('Content-Type', 'text/html');

      await reply.send(
        renderGraphiQL({
          endpoint: '/graphql'
        })
      );

      return;
    }

    const { operationName, query, variables } = getGraphQLParameters(request);

    const result = await processRequest({
      request,
      schema,
      operationName,
      query,
      variables
    });

    await sendResult(result, reply.raw);
  }
});

function build(opts = {}) {
  const app = fastify(opts);
  app.get('/', async function (request, reply) {
    return { hello: 'world' };
  });

  return app;
}

export default build;
