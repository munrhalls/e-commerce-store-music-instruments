module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    },
    {
      files: ['*routing.module.ts'],
      rules: {
        '@typescript-eslint/promise-function-async': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },

  rules: {
    '@typescript-eslint/consistent-type-imports': 'off'
  },
  ignorePatterns: ['*.txt']
}
