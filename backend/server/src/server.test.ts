import { describe, it, expect, afterAll } from 'vitest'
import server from './server.mts'

describe('GraphQL Fastify Server Tests', () => {
  it('should respond to a GraphQL query', async () => {
    const query = `
      {products {name, price}}
    `

    const response = await server.inject({
      method: 'POST',
      url: '/graphql',
      payload: {
        query
      }
    })

    expect(response.statusCode).toBe(200)
  })
  // Rest of the code...

  afterAll(async () => {
    await server.close()
  })
})
