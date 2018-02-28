# delayed-promise

[![Travis](https://img.shields.io/travis/mpt0/node-delayed-promise.svg)]()
[![npm](https://img.shields.io/npm/v/delayed-promise.svg)]()
[![npm](https://img.shields.io/npm/l/delayed-promise.svg)]()

Utility for delayed promise rejection handling

<br/>



## Installation
```bash
npm install delayed-promise
```

<br/>



## Usage
```js
const wrap = require('delayed-promise');

async function example() {
	// Wrap a promise to retrieve it's state later:
	const unwrap = wrap(promise);

	// ...Other async code...

	// Unwrap the promise & retrieve it's state:
	await unwrap();
}
```

#### wrap(value)
Wraps a promise or a value to store it's state in the back.
+ value `<any>` - If a promise, it will be wrapped, if a value, the unwrap function will return a promise that resolves to this value.
+ returns `<function>` - The unwrapping function as described below.

#### unwrap()
Returns a promise that,
+ resolves when the wrapped promise resolves.
+ rejects when the wrapped promise rejects.
+ resolves to a value if the value passed to `wrap(..)` was not a promise.

<br/>



## Running tests
```bash
npm install
npm test
```
