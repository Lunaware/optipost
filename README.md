# Optipost

Optipost is a basic wrapper for the Express.js library. It is designed to only accept incoming requests that have the `Roblox/WinInet` User-Agent and the `Roblox-Place-Id` header.

## Features

- Express.js wrapper
- User-Agent and header validation
- Debug mode
- Endpoint creation
- Server listening

## Build

To build Optipost, you can use tsc:

```bash
npm install
npx tsc
node ./out/index.js.
```

## Usage

Here is a basic example of how to use Optipost:

```typescript
import { Optipost } from './Optipost.js';

const server = new Optipost();

server.createEndpoint('get', '/test', (req, res) => {
    res.send('Hello, world!');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

In this example, we create a new instance of Optipost, create a GET endpoint at `/test` that responds with "Hello, world!", and start the server on port 3000.

## API

### `new Optipost()`

Creates a new instance of Optipost.

### `createEndpoint(method: string, url: string, callback: (request: Request, response: Response) => void)`

Creates a new endpoint with the specified method, URL, and callback function.

### `listen(port: number, callback?: () => void)`

Starts the server on the specified port. The optional callback function is called when the server starts.

## License

Optipost is licensed under `The GNU General Public License v3.0`.