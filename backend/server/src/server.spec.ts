import fetch from 'node-fetch'
import 'd'

describe('GraphQL Server Tests', () => {
  it('should fetch data from the GraphQL endpoint', async () => {
    const query = `
      query {
        product(name: "ExampleProductName") {
          name
          price
        }
      }
    `

    const response = await fetch(
      `http://localhost:${process.env.PORT}/graphql`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      }
    )

    const data = await response.json()

    expect(response.status).toBe(200) // Or other relevant status code
    expect(data).toHaveProperty('data.product.name', 'ExampleProductName')
    // More assertions as needed
  })
})
