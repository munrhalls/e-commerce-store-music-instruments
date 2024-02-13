// test('Valid Query { products { name, price } } returns 200', async () => {
//   const response = await server.inject({
//     method: 'POST',
//     url: '/graphql',
//     payload: {
//       query: '{products {name, price}}'
//     }
//   });

//   expect(response.statusCode).toEqual(200);
// });

// test('Not valid Query: non-existing field returns 400 ({products {name, BLABLA, price}})', async () => {
//   const response = await server.inject({
//     method: 'POST',
//     url: '/graphql',
//     payload: {
//       query: '{products {name, blabla, price}}'
//     }
//   });

//   expect(response.statusCode).toEqual(400);
// });
