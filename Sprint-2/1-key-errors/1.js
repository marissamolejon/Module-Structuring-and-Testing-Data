// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
//Declaring `decimalNumber` again with `const` causes a "Identifier has already been declared" error.
//An error will occur because `decimalNumber` is declared twice.
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// const cannot reuse the same name in the same scope
// Function parameters already exist

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));
