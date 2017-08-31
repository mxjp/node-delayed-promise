# delayed-promise

> [![Travis](https://img.shields.io/travis/mpt0/node-delayed-promise.svg)]()
> [![npm](https://img.shields.io/npm/v/delayed-promise.svg)]()
> [![npm](https://img.shields.io/npm/l/delayed-promise.svg)]()
>
> Utility for delayed promise rejection handling

<br/>



## Installation
```bash
npm install delayed-promise
```

<br/>



## Usage
```js
const delay = require('delayed-promise');

async function example() {

	// Wrap a promise to retrieve it's state later:
	let delayedPromise = delay(getPromise());

	// ...Other async code...

	// Unwrap the promise & retrieve it's state:
	await delayedPromise();
}
```

<br/>



## Running tests
In the package directory, type: `npm test`
