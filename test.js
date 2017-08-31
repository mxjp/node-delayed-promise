'use strict';

const assert = require('assert');
const delayPromise = require('.');

function wait(ms) {
	return new Promise(r => setTimeout(r, ms));
}

async function waitAndThrow(ms) {
	await wait(ms);
	throw 'some error';
}

async function test() {
	let resolving = delayPromise(wait(100));
	await wait(200);
	await resolving();

	try {
		let rejecting = delayPromise(waitAndThrow(100));
		await wait(200);
		await rejecting();
		throw new Error('Did not reject.');
	} catch(err) {
		assert(err === 'some error');
	}
}

test().catch(err => {
	console.error(err);
	process.exit(1);
});
