import calculate from "../logic/calculate";

test('test function for key AC', () => {
    const obj = {
        total: null,
        next: null,
        operation: null,
      }
    const buttonName = 'AC'
    expect(calculate(obj, buttonName)).toBe({total: null, next: null, operation: null})
});
