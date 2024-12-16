 // Explanation: 
    // The script below adds interactive functionality to the counter.

    // Step 1: Get references to the HTML elements.
    // `document.getElementById` is used to get the counter display.
    const counterDisplay = document.getElementById("counter"); // The div displaying the counter value.

    // `document.querySelector` is used to get the buttons.
    const increaseButton = document.querySelector(".increase"); // Button to increase the counter.
    const decreaseButton = document.querySelector(".decrease"); // Button to decrease the counter.
    const resetButton = document.querySelector(".reset"); // Button to reset the counter to zero.

    // Step 2: Initialize the counter value.
    // This variable stores the current counter value and will be updated based on user actions.
    let counterValue = 0;

    // Step 3: Define a function to update the displayed counter value.
    // Every time the counter changes, this function updates the HTML content of `counterDisplay`.
    function updateCounter() {
      counterDisplay.textContent = counterValue; // Set the text inside the `#counter` element to the current counter value.
    }

    // Step 4: Add event listeners to the buttons.
    // Event listeners respond to user actions, such as clicking the buttons.

    // When the "Increase" button is clicked, increment the counter by 1.
    increaseButton.addEventListener("click", function () {
      counterValue++; // Increment the counter value by 1.
      updateCounter(); // Update the displayed counter value.
    });

    // When the "Decrease" button is clicked, decrement the counter by 1.
    decreaseButton.addEventListener("click", function () {
      counterValue--; // Decrement the counter value by 1.
      updateCounter(); // Update the displayed counter value.
    });

    // When the "Reset" button is clicked, reset the counter to 0.
    resetButton.addEventListener("click", function () {
      counterValue = 0; // Reset the counter value to 0.
      updateCounter(); // Update the displayed counter value.
    });

    // Explanation:
    // The above functions ensure that the counter value is updated in real-time whenever the user interacts with the app.