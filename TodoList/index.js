  // Select the input field, add button, and the list where tasks will be displayed
  const todoInput = document.getElementById("todo-input");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");

  // Event listener to add a new task when the "Add" button is clicked
  addBtn.addEventListener("click", function () {
    const taskText = todoInput.value.trim(); // Get the input value and remove extra spaces

    if (taskText === "") { // Check if the input is empty
      alert("Task cannot be empty!"); // Show an alert if the input is empty
      return; // Stop the function here
    }

    // Call a function to create a new task and pass the task text
    createTask(taskText);
    todoInput.value = ""; // Clear the input field after adding the task
  });

  // Function to create a new task
  function createTask(taskText) {
    const li = document.createElement("li"); // Create a new <li> element
    li.className = "todo-item"; // Add a class for styling

    // Add the task text and buttons for edit and delete
    li.innerHTML = `
      <span>${taskText}</span>
      <div>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    // Add the new task to the list
    todoList.appendChild(li);

    // Add functionality to the edit and delete buttons
    const editBtn = li.querySelector(".edit-btn"); // Select the "Edit" button
    const deleteBtn = li.querySelector(".delete-btn"); // Select the "Delete" button

    // Add an event listener for the "Edit" button
    editBtn.addEventListener("click", function () {
      const newTaskText = prompt("Edit your task:", taskText); // Prompt the user to edit the task
      if (newTaskText !== null && newTaskText.trim() !== "") { // Check if the input is not empty
        li.querySelector("span").textContent = newTaskText.trim(); // Update the task text
      } else {
        alert("Task cannot be empty!"); // Show an alert if the input is invalid
      }
    });

    // Add an event listener for the "Delete" button
    deleteBtn.addEventListener("click", function () {
      todoList.removeChild(li); // Remove the task from the list
    });
  }