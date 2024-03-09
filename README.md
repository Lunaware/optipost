# Optipost
**Optipost** is a wrapper for Express.js that allows you to seamlessly communicate ROBLOX projects with a Web API in Javascript and Typescript.

### Features
\- Requests that do not have the User-Agent `Roblox/WinInet` will be ignored.<br>
\- In future, this will be paired with a LUA package for you to import into your projects.

```ts
/**
 * @module Optipost
 * @author methamphetqmine, nbitzz
 */
```

### Development Roadmap
\- Support deployment to a Heroku project.<br>

### Build Instructions
```
npm install
npx tsc build
```
The module will be outputted inside of the `./out` directory.

### Usage
```ts
import Optipost from <PATH_TO_MODULE>
const API = new Optipost()

API.createEndpoint("GET", "/", (request, response) => {
    response.send("Hello, world!");
})

API.listen(80, () => {
    console.log('Optipost is now listening at http://localhost:80`)
})
```

### Requirements
\- `typescript` (required)<br>
\- `express` (required)<br>
\- `@types/express` (optional)

### License
\- Licensed under `GNU General Public License v3.0`. Modifications of this repository must be shared.