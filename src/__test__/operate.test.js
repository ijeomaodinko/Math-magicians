import operate from '../logic/operate';

test('to test for addition operation', () => {
  expect(operate(1, 2, '+')).toEqual('3');
});

test('test for subtraction operation', () => {
  expect(operate(5, 4, '-')).toEqual('1');
});

test('to test for division operation', () => {
  expect(operate(6, 1, '÷')).toEqual('6');
});

test('test for multiplication operation', () => {
  expect(operate(2, 5, 'x')).toEqual('10');
});

test('to test for modulus operation', () => {
  expect(operate(5, 2, '%')).toEqual('1');
});
