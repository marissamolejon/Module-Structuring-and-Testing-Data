function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
// pad will be called 3 times. 
// pad is used once for hours, once for minutes, and once for seconds
// in the return statement.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// num is 0
// pad is first called with totalHours, which evaluates to 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// "00"
// 0 is converted to the string "0", then padStart(2, "0")
// adds a leading zero, resulting in "00".

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// num is 1
// The last call to pad is for remainingSeconds,
// which is 1 when formatTimeDisplay is called with 61.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// "01"
// The number 1 is converted to the string "1" and padStart(2, "0")
// adds a leading zero, producing "01".