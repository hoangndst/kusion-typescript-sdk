import { client } from './client';
import { SourceService } from '@kusionstack/kusion-api-client-sdk';

async function example() {
  try {
    // Create a new source
    const newSource = await SourceService.createSource({
      client: client,
      body: {
        name: "openapi-ts-source",
        description: "Source description",
        remote: "https://github.com/hey-api/openapi-ts.git",
        sourceProvider: "github",
        owners: ["hey-api"],
        labels: ["openapi-ts"],
      }
    });
    console.log('Created source:', newSource.data);

    // List all sources
    const sources = await SourceService.listSource();
    console.log('All sources:', sources.data);
  } catch (error) {
    console.error('Error:', error);
  }
}

example();