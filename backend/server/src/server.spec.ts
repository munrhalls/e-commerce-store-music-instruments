import { describe, it } from 'mocha';
import { expect } from 'chai';
import server from './server';

describe('GraphQL Fastify Server Tests', () => {
  it('should respond to a GraphQL query', async () => {
    const query = `
      {products {name, price}}
    `;

    const response = await server.inject({
      method: 'POST',
      url: '/graphql',
      payload: {
        query
      }
    });

    expect(response.statusCode).to.equal(200);
  });
  // Rest of the code...

  server.close();
});
