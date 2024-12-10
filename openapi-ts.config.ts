import { defineConfig, defaultPlugins } from '@hey-api/openapi-ts';

export default defineConfig({
  client: '@hey-api/client-fetch',
  input: './api/openapispec/swagger.yaml',
  output: {
    format: 'prettier',
    lint: 'eslint',
    path: './src/client',
  },
  plugins: [
    ...defaultPlugins,
    {
      dates: true,
      name: '@hey-api/transformers',
    },
    {
      enums: 'typescript',
      name: '@hey-api/typescript',
    },
    {
      asClass: true,
      name: '@hey-api/sdk',
    },
    {
      name: '@hey-api/schemas',
      type: 'json', 
    },
  ],
});
