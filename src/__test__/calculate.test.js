import calculate from '../logic/calculate';

describe ('test calculate.js functionalities', () => {
  test('when clicked the "AC" button', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const buttonName = 'AC';
    expect(calculate(obj, buttonName)).toEqual({ total: null, next: null, operation: null });
  });

  test('when the button is a number', () => {
    const obj = {
      total: null,
      next: 10,
      operation: '+',
    };
    const buttonName = 9;
    expect(calculate(obj, buttonName)).toEqual({ total: null, next: 19, operation: '+' });
  });

  test('when clicked the "." button', () => {
    const obj = {
      total: null,
      next: 10,
      operation: null,
    };
    const buttonName = '.';
    expect(calculate(obj, buttonName)).toEqual({ total: null, next: '10.', operation: null });
  });

  test('when clicked the "=" button', () => {
    const obj = {
      total: 12,
      next: 10,
      operation: '-',
    };
    const buttonName = '.';
    expect(calculate(obj, buttonName)).toEqual({ total: 2, next: null, operation: null });
  });

  test('when clicked the "+/-" button', () => {
    const obj = {
      total: null,
      next: -5,
      operation: null,
    };
    const buttonName = '+/-';
    expect(calculate(obj, buttonName)).toEqual({ total: null, next: 5, operation: null });
  });

  test('to save the operation and shift next into total', () => {
    const obj = {
      total: null,
      next: 20,
      operation: null,
    };
    const buttonName = 'x';
    expect(calculate(obj, buttonName)).toEqual({ total: 20, next: null, operation: 'x' });
  });
});

