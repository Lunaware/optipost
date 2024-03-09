# Optipost
**Optipost** is a wrapper for Express.js that allows you to seamlessly communicate ROBLOX projects with a Web API in Javascript and Typescript.

### Features
\- Requests that do not have the User-Agent `Roblox/WinInet` will be ignored.<br>
\- Now paired with a new repository, [optipost-lua](https://github.com/Lunaware/optipost-lua)

```ts
/**
 * @module Optipost
 * @author methamphetqmine, nbitzz
 */
```

### Build Instructions
```
npm install
npx tsc build
```
The module will be outputted inside of the `./out` directory.

### Usage
```ts
import Optipost from "./Optipost.js"
const API = new Optipost()

API.createEndpoint("GET", "/connect", (request, response) => {
    response.send("Hello, world!");
})

API.listen(80, () => {
    console.log(`Optipost is now listening at http://localhost:80`);
})
```

### License
\- Licensed under `GNU General Public License v3.0`. Modifications of this repository must be shared.