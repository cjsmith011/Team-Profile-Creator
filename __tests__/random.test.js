const checkIfEqual = require('../lib/random.js');

test('check to see if 10 equals 10', () => {
    expect(checkIfEqual(10, 10)).toBe(true);
});