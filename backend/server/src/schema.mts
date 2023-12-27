import typeDefs from './schema.graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

const rndProds = [
  { name: 'some fucking product 1', price: 49 },
  { name: 'some fucking product 2', price: 59 },
  { name: 'some fucking product 3', price: 69 }
]

const resolvers = {
  Query: {
    products: () => {
      return rndProds
    }
  }
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
