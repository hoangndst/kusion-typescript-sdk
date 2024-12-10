import { client } from '@kusionstack/kusion-api-client-sdk';

client.setConfig({
  baseUrl: 'http://localhost:80',
});

export { client };
