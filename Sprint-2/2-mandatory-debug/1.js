// Predict and explain first...
//  =============> write your prediction here
// The output will be "The sum of 10 and 32 is undefined" because the
// function returns before the addition is evaluated.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//The `return` statement immediately exits the function.
//The expression `a + b` is never executed because it appears after
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);