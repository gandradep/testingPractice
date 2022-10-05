const strLength = require('./stringLength');
const revStr = require('./reverseString');
const calculator = require('./calculator');
const capStr = require('./capitalize');
test('Apple has 5 characters', () => {
  expect(strLength('apple')).toBe(5);
});
test('No string', () => {
  expect(strLength('')).toBe(0);
});
test('too big string', () => {
  expect(strLength('appleapplea')).toBe('too big');
});

test('Reverse apple is elppa', () => {
  expect(revStr('apple')).toBe('elppa');
});

test('capitalize string correct', () => {
  expect(capStr('apple')).toBe('Apple');
});

describe('add', () => {
  test('suma correct1', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test('suma correct2', () => {
    expect(calculator.add(10, 20)).toBe(30);
  });
  test('suma correct3', () => {
    expect(calculator.add(1111, 222)).toBe(1333);
  });
});

describe('substract', () => {
  test('substract correct1', () => {
    expect(calculator.substract(5, 2)).toBe(3);
  });
  test('substract correct2', () => {
    expect(calculator.substract(50, 20)).toBe(30);
  });
  test('substract correct3', () => {
    expect(calculator.substract(1400, 67)).toBe(1333);
  });
});

describe('multiply', () => {
  test('multiply correct1', () => {
    expect(calculator.multiply(5, 2)).toBe(10);
  });
  test('multiply correct2', () => {
    expect(calculator.multiply(50, 30)).toBe(1500);
  });
  test('multiply correct3', () => {
    expect(calculator.multiply(1400, 67)).toBe(93800);
  });
});

describe('divide', () => {
  test('divide correct1', () => {
    expect(calculator.divide(5, 2)).toBe(2.5);
  });
  test('divide correct2', () => {
    expect(calculator.divide(50, 30)).toBeCloseTo(1.666);
  });
  test('divide correct3', () => {
    expect(calculator.multiply(1400, 1)).toBe(1400);
  });
});
