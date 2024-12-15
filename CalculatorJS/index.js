// Function to add two numbers
function add() {
  // Get the input values
  const num1 = parseFloat(document.getElementById("num1").value); // Parse the first input value to a number
  const num2 = parseFloat(document.getElementById("num2").value); // Parse the second input value to a number

  // Calculate the sum and display the result
  const sum = num1 + num2; // Add the two numbers
  document.getElementById("result").innerText = `Result: ${sum}`; // Update the result div
}

// Function to subtract two numbers
function subtract() {
  // Get the input values
  const num1 = parseFloat(document.getElementById("num1").value); // Parse the first input value to a number
  const num2 = parseFloat(document.getElementById("num2").value); // Parse the second input value to a number

  // Calculate the difference and display the result
  const difference = num1 - num2; // Subtract the second number from the first
  document.getElementById("result").innerText = `Result: ${difference}`; // Update the result div
}

// Function to multiply two numbers
function multiply() {
  // Get the input values
  const num1 = parseFloat(document.getElementById("num1").value); // Parse the first input value to a number
  const num2 = parseFloat(document.getElementById("num2").value); // Parse the second input value to a number

  // Calculate the product and display the result
  const product = num1 * num2; // Multiply the two numbers
  document.getElementById("result").innerText = `Result: ${product}`; // Update the result div
}

// Function to divide two numbers
function divide() {
  // Get the input values
  const num1 = parseFloat(document.getElementById("num1").value); // Parse the first input value to a number
  const num2 = parseFloat(document.getElementById("num2").value); // Parse the second input value to a number

  // Handle division by zero
  if (num2 === 0) {
    // Check if the second number is 0
    document.getElementById(
      "result"
    ).innerText = `Error: Division by zero is not allowed!`; // Display an error message
    return; // Exit the function
  }

  // Calculate the quotient and display the result
  const quotient = num1 / num2; // Divide the first number by the second
  document.getElementById("result").innerText = `Result: ${quotient}`; // Update the result div
}
