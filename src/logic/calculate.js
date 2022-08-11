import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

/**
 *Given a button name and a calculator data object, return an updated
 *calculator data object.
 * 
 * to make the following in the calculator represent:
 * total: string, the running total;
 * next:  string, the next number to be operated;
 * operation:  string, operators such as +, 
 */

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {};
    }
    // to update next if there is an operation
    if (obj.operation) {
      if (obj.next && obj.next !== '0') {
        return { ...obj, next: obj.next + buttonName };
      }
      return { ...obj, next: buttonName };
    }

    // to add function when there is no operation - update next and clear the values.
    if (obj.next && obj.next !== '0') {
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

  // to add function when clicked the '.' button
  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj };
      }
      return { ...obj, next: `${obj.next}.` };
    }
    if (obj.operation) {
      return { ...obj, next: '0.' };
    }
    if (obj.total) {
      if (obj.total.includes('.')) {
        return {};
      }
      return { ...obj, next: `${obj.total}.` };
    }
    return { ...obj, next: '0.' };
  }

  // to add function to the = button and return to do if operation, obj next and total is empty
  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }

  // to add function to the +/- button
  if (buttonName === '+/-') {
    if (obj.next) {
      return { ...obj, next: (-1 * parseFloat(obj.next)).toString() };
    }
    if (obj.total) {
      return { ...obj, total: (-1 * parseFloat(obj.total)).toString() };
    }
  }

  // user pressed an oppression after pressing =

  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName };
  }

  // to press an operation when there is existing operation
  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName };
    }
    if (!obj.total) {
      return { total: 0, operation: buttonName };
    }
    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName,
    };
  }

  // to add function for periods when the user hasn't pressed anything else- save the operation
  if (!obj.next) {
    return { operation: buttonName };
  }

  // to save the operation and  shift next into total
  return {
    total: obj.next,
    next: null,
    operation: buttonName,
  };
}
