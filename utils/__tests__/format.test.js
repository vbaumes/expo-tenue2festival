const format = require('../format');

test('formats product price', () => {
    expect(format(1200)).toBe('12,00€');
})

