// TODO A:file-2 distinguish server build from server app, and modify tests to accomodate it

import { createServer } from './server';

const server = createServer();

afterAll(async () => {
  await server.close();
});

test('GraphQL Query { products { name, price } } should return status code 200', async () => {
  const response = await server.inject({
    method: 'POST',
    url: '/graphql',
    payload: {
      query: '{products {name, price}}'
    }
  });

  expect(response.statusCode).toEqual(200);
});
