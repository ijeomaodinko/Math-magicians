import calculate from '../logic/calculate';

test('when clicked the "AC" button', () => {
  const obj = {
    total: null,
    next: null,
    operation: null,
  };
  const buttonName = 'AC';
  expect(calculate(obj, buttonName)).toEqual({ total: null, next: null, operation: null });
});

test('when clicked the = button on calculator', () => {
  const result = calculate({ total: '70', next: '75', operation: 'x' }, '=');
  expect(result).toStrictEqual({ total: '5250', next: null, operation: null });
});

test('When clicked the +/- button on calculator', () => {
  const plusMinus = calculate({ total: '90', next: null, operation: null }, '+/-');
  expect(plusMinus).toStrictEqual({ total: '-90', next: null, operation: null });
});

test('When clicked the dot button on calculator', () => {
  let dotSymbol = calculate({ total: null, next: null, operation: null }, '9');
  dotSymbol = calculate(dotSymbol, '.');
  dotSymbol = calculate(dotSymbol, '1');
  expect(dotSymbol).toStrictEqual({ total: null, next: '9.1' });
});

test('When clicked the - button on calculator', () => {
  const minus = calculate({ total: '70', next: '90', operation: '-' }, 'x');
  expect(minus).toStrictEqual({ total: '-20', next: null, operation: 'x' });
});

test('When clicked the + button on calculator', () => {
  const plus = calculate({ total: '70', next: '90', operation: '+' }, '+');
  expect(plus).toStrictEqual({ total: '160', next: null, operation: '+' });
});

test('When clicked the ÷ button calculator', () => {
  const divide = calculate({ total: '90', next: '9', operation: '÷' }, '=');
  expect(divide).toStrictEqual({ total: '10', next: null, operation: null });
});

test('When clicked the % button on calculator', () => {
  const percentage = calculate({ total: 'null', next: '12', operation: null }, '%');
  expect(percentage).toStrictEqual({ total: '12', next: null, operation: '%' });
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
