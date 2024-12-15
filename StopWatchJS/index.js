// Variables to hold the time and state of the stopwatch
let hours = 0; // To track hours
let minutes = 0; // To track minutes
let seconds = 0; // To track seconds
let intervalId = null; // To store the interval ID for the timer

// Reference the HTML elements
const timeDisplay = document.getElementById("time"); // Element to show the stopwatch time
const startBtn = document.getElementById("start-btn"); // Start button
const stopBtn = document.getElementById("stop-btn"); // Stop button
const resetBtn = document.getElementById("reset-btn"); // Reset button

  // Function to update the displayed time
  function updateTime() {
    // Format the time to always show two digits (e.g., 02:05:07)
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    // Update the time display
    timeDisplay.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

 // Function to start the stopwatch
 function startStopwatch() {
    // If the stopwatch is already running, do nothing
    if (intervalId !== null) return;

    // Start an interval that increments the time every second
    intervalId = setInterval(() => {
      seconds++; // Increment seconds

      // If seconds reach 60, reset to 0 and increment minutes
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      // If minutes reach 60, reset to 0 and increment hours
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      // Update the display each second
      updateTime();
    }, 1000);
  }

  // Function to stop the stopwatch
  function stopStopwatch() {
    // If the stopwatch is running, clear the interval and set intervalId to null
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // Function to reset the stopwatch
  function resetStopwatch() {
    // Stop the stopwatch if it's running
    stopStopwatch();

    // Reset all time values to 0
    hours = 0;
    minutes = 0;
    seconds = 0;

    // Update the time display to reflect the reset
    updateTime();
  }

  // Attach event listeners to the buttons
  startBtn.addEventListener("click", startStopwatch); // Start stopwatch when Start button is clicked
  stopBtn.addEventListener("click", stopStopwatch);   // Stop stopwatch when Stop button is clicked
  resetBtn.addEventListener("click", resetStopwatch); // Reset stopwatch when Reset button is clicked

  // Initialize the time display to 00:00:00
  updateTime();
