'use strict';

function wrap(value) {
	if (value instanceof Promise) {
		const wrapper = new Promise(resolve => value.then(
			retv => resolve([false, retv]),
			err => resolve([true, err])));

		return () => new Promise((resolve, reject) => {
			wrapper.then(([isError, value]) => (isError ? reject : resolve)(value));
		});
	}
	return () => Promise.resolve(value);
}

module.exports = wrap;
