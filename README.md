# Optipost

```ts
/**
 * @module Optipost
 * @version 2.0.0
 * @author methamphetqmine
 * 
 * @description A wrapper for Express.js that allows you to create endpoints that can only be accessed by Roblox's WinInet user-agent.
 */
```

### Build Instructions
```
node install
npx tsc build
```
The module will be outputted inside of the `./out` directory.

### Usage
```js
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
Licensed under `GNU General Public License v3.0`. Modifications of this repository must be shared.