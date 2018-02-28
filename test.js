'use strict';

const test = require('ava');
const delayPromise = require('.');

test('resolving promise', async t => {
	t.is(await delayPromise(Promise.resolve(42))(), 42);
});

test('rejecting promise', async t => {
	await t.throws(delayPromise(Promise.reject(new Error('test')))(), 'test');
});

test('rejecting delayed', async t => {
	const unwrap = delayPromise(Promise.reject(new Error('test')));
	await new Promise(resolve => setTimeout(resolve, 50));
	await t.throws(unwrap(), 'test');
});

test('non promise value', async t => {
	t.is(await delayPromise(7)(), 7);
});
