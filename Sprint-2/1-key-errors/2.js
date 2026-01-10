
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// An error will occur because `3` is not a valid function parameter name.
// Function parameters must be variable names, not literal values.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: return not in function

// =============> explain this error message here
// JavaScript expects function parameters to be identifiers (variable names).
// Using a number instead of a variable name causes a syntax error before
// the code can run. Additionally, `num` is not defined anywhere in the function.


// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(3));

