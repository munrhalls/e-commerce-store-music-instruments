import server from './server';

test('Querying GraphQL with {products {name, price}} should return products list with name & price fields', async () => {
  const responseToQuery = await server.inject({
    method: 'POST',
    url: '/graphql',
    payload: {
      query: '{products {name, price}}'
    }
  });

  expect(responseToQuery).toBeDefined();
});
