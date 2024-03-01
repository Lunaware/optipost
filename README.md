# Optipost
**Optipost** is a wrapper for Express.js that allows you to seamlessly communicate ROBLOX projects with a Web API in Javascript and Typescript.

### Features
\- Requests that do not have the User-Agent `Roblox/WinInet` will be ignored.<br>
\- In future, this will be paired with a LUA package for you to import into your projects.

```ts
/**
 * @module Optipost
 * @version 2.0.0
 * @author methamphetqmine
 * 
 * @description A wrapper for Express.js that allows you to create endpoints that can only be accessed by Roblox's WinInet user-agent.
 */
```

### Development Roadmap
\- Add custom authorization to add extra security.<br>
\- Support deployment to a Heroku project.<br>

### Build Instructions
```
node install
npx tsc build
```
The module will be outputted inside of the `./out` directory.

### Usage
```ts
import Optipost from <PATH_TO_MODULE>
const API = new Optipost()

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