import typeDefs from 'schema.graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

const resolvers = {
  Query: {
    products: () => {}
  }
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
