# Kusion API Client SDK

A TypeScript SDK for interacting with the Kusion Server API.

## Installation

Using npm:
```bash
npm install @kusionstack/kusion-api-client-sdk
```

Using yarn:
```bash
yarn add @kusionstack/kusion-api-client-sdk
```

## Quick Start

```typescript
import { client, SourceService } from '@kusionstack/kusion-api-client-sdk';

// Configure the client
client.setConfig({
    baseUrl: 'http://localhost:80'
});

// Use the SDK
async function example() {
    try {
        const sources = await SourceService.listSource();
        console.log('Sources:', sources.data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

## Features

- 🔒 Type-safe API interactions
- 🚀 Promise-based async operations
- ⚡️ Modern TypeScript support
- 🛠 Built-in error handling

## Documentation

Visit our [API documentation](https://kusionstack.github.io/kusion-typescript-sdk/)
For examples, please refer to:

- [Example Usage](examples/)

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## License

This project is licensed under the [Apache License 2.0](LICENSE).

## Support

If you encounter any issues or have questions:
- Open an [issue](https://github.com/KusionStack/kusion/issues)
- Join our community discussions
- Check our [documentation](docs/)

## Related Projects

- [Kusion](https://github.com/KusionStack/kusion) - The main Kusion project
- [KusionStack](https://github.com/KusionStack) - The KusionStack organization
