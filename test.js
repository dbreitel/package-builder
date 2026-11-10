import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countChars } from './index.js';

test('ascii', () => {
  assert.deepEqual(countChars('ab12 !'), { alpha: 2, numeric: 2, other: 2, total: 6 });
});

test('unicode letters, digits, emoji, combining marks', () => {
  assert.deepEqual(countChars('שéé٣👍🏽'), { alpha: 3, numeric: 1, other: 1, total: 5 });
});

test('empty and non-string', () => {
  assert.deepEqual(countChars(''), { alpha: 0, numeric: 0, other: 0, total: 0 });
  assert.throws(() => countChars(123), TypeError);
});
