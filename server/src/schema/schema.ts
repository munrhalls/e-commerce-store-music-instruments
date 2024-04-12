import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import path from 'path';

interface Product {
  name: string;
  price: number;
  // other properties...
}

interface Args {
  $searchTerm: string;
}

const rndProds: Product[] = [
  { name: 'some fucking product 1', price: 49 },
  { name: 'some fucking product 2', price: 59 },
  { name: 'some fucking product 3', price: 69 }
];

const resolvers = {
  Query: {
    products: (_: any, args: Args) => {
      const { $searchTerm } = args;
      return rndProds.filter(product =>
        product.name.split(' ').includes($searchTerm)
      );
    }
  }
};

// Load and merge .graphql files
const schema = loadSchemaSync(path.join(__dirname, './**/*.graphql'), {
  loaders: [new GraphQLFileLoader()]
});

export { schema, resolvers };
