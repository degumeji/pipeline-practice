'use strict';
const assert = require('assert');

describe('Operaciones aritméticas', () => {
  it('La suma de 5 y 3 debe ser 8', () => {
    const a = 5;
    const b = 3;
    assert.strictEqual((a + b), 8);
  });

  it('La resta de 10 y 4 debe ser 6', () => {
    assert.strictEqual((10 - 4), 6);
  });
});
