const test = require('node:test');
const assert = require('node:assert/strict');
const { createMessage } = require('./index');

test('returns a greeting for the supplied name', () => {
  assert.equal(
    createMessage('Nina'),
    'Hello, Nina! CI/CD is ready.'
  );
});

test('uses a default name when no name is supplied', () => {
  assert.equal(
    createMessage(),
    'Hello, Cloud Student! CI/CD is ready.'
  );
});

test('handles an empty name without changing the message format', () => {
  assert.equal(
    createMessage(''),
    'Hello, ! CI/CD is ready.'
  );
});

test('supports a Thai name', () => {
  assert.equal(
    createMessage('นักเรียนคลาวด์'),
    'Hello, นักเรียนคลาวด์! CI/CD is ready.'
  );
});