// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

console.assert(formatAs12HourClock("00:00") === "12:00 am", "Midnight failed");
console.assert(formatAs12HourClock("01:00") === "01:00 am", "Early morning failed");
console.assert(formatAs12HourClock("08:00") === "08:00 am", "Morning failed");
console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Noon failed");
console.assert(formatAs12HourClock("13:00") === "01:00 pm", "Afternoon failed");
console.assert(formatAs12HourClock("23:00") === "11:00 pm", "Late night failed");
console.assert(formatAs12HourClock("12:30") === "12:30 pm", "12:30 pm failed");
console.assert(formatAs12HourClock("00:45") === "12:45 am", "12:45 am failed");
console.assert(formatAs12HourClock("09:15") === "09:15 am", "09:15 am failed");

