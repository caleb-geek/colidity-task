let str= "13 DUP 4 POP 5 DUP + DUP + -"

//let str = '3 DUP 5 - -';

function solution(str) {
  let strArr = str.split(' ');
  let stack = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'DUP') {
      // DUPLICATE PREVIOUS IN STACK
      if (emptyArray(stack)) {
        return -1;
      } else {
        let last = stack[stack.length - 1];
        stack.push(last);
      }
    } else if (strArr[i] === 'POP') {
      if (emptyArray(stack)) {
        return -1;
      } else {
        stack.pop(stack[stack.length - 1]);
      }
      // pop the last  element in the stack
    } else if (strArr[i] === '+') {
      //check stack if single element
      if (emptyArray(stack) || checkSingleElement(stack)) {
        return -1;
      } else {
        // add
        let sum = stack[stack.length - 1] + stack[stack.length - 2];
        // slice
        stack.splice(stack.length - 2, 2);
        // push array
        stack.push(sum);
      }
      // add current and previous
    } else if (strArr[i] === '-') {
      //check stack if single element
      // current-previous
      if (emptyArray(stack) || checkSingleElement(stack)) {
        return -1;
      } else {
        // add
        let sub = stack[stack.length - 1] - stack[stack.length - 2];
        if (sub < 0) {
          return -1;
        }
        // slice
        stack.splice(stack.length - 2, 2);
        // push array
        stack.push(sub);
      }
    } else {
      if (checkifInteger(strArr[i])) {
        stack.push(parseInt(strArr[i]));
      } else {
        return -1;
      }
    }
  }

  return emptyArray(stack) ? -1 : stack[stack.length - 1];
}

// check empty
function emptyArray(arr) {
  return arr.length > 0 ? false : true;
}

//check single lement
function checkSingleElement(arr) {
  return arr.length === 1 ? true : false;
}

function checkifInteger(i) {
  return (
    Number.isInteger(parseInt(i)) &&
    parseInt(i) >= 0 &&
    parseInt(i) < Math.pow(2, 20)
  );
}

console.log(solution(str));