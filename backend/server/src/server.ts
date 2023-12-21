import 'graphql-import-node'
import fastify from 'fastify'
import {
  getGraphQLParameters,
  processRequest,
  type Request,
  sendResult,
  shouldRenderGraphiQL,
  renderGraphiQL
} from 'graphql-helix'
import { schema } from './schema'

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

    if (shouldRenderGraphiQL(request) === true) {
      await reply.header('Content-Type', 'text/html')

      await reply.send(
        renderGraphiQL({
          endpoint: '/graphql'
        })
      )

      return
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

server.listen({ port: 8443 }, (err, address) => {
  if (err !== null) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
