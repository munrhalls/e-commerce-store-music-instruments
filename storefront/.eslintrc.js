module.exports = {
  plugins: ['graphql'],
  rules: {
    'graphql/template-strings': [
      'error',
      {
        env: 'literal',
        schemaJsonFilepath: path.resolve(
          __dirname,
          './path/to/your/schema.json',
        ),
      },
    ],
  },
};
