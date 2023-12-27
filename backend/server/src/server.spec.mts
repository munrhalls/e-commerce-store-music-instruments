import fastify from 'fastify'
import { expect, test } from 'vitest'
import {
  getGraphQLParameters,
  processRequest,
  type Request,
  sendResult
} from 'graphql-helix'
import { schema } from './schema.mjs'

const server = fastify()
server.route({
  method: ['POST', 'GET'],
  url: '/graphql',
  handler: async (req, reply) => {
    const request: Request = {
      headers: req.headers,
      method: req.method,
      query: req.query,
      body: req.body
    }

    const { operationName, query, variables } = getGraphQLParameters(request)

    const result = await processRequest({
      request,
      schema,
      operationName,
      query,
      variables
    })

    await sendResult(result, reply.raw)
  }
})

test('GraphQL query test for products', async () => {
  const response = await server.inject({
    method: 'POST',
    url: '/graphql',
    payload: {
      query: `{ products { name price } }`
    }
  })

  expect(
    response.statusCode,
    'Response status should be 200 indicating a successful query'
  ).toBe(200)

  // Asserting response structure
  const jsonResponse = response.json()
  expect(
    jsonResponse,
    'Response should contain a data field with the expected query structure'
  ).toHaveProperty('data')

  // Optionally, assert specific fields if needed
  // expect(jsonResponse.data.products, 'Products data should be an array').toBeInstanceOf(Array);

  await server.close()
})
