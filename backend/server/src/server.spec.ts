import server from './server';

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

afterAll(async () => {
  await server.close();
});
