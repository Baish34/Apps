 // Step 1: Setup game state variables
 let currentPlayer = 'X'; // Player X always starts the game
 let gameBoard = ['', '', '', '', '', '', '', '', '']; // Array to represent the 3x3 grid

 // Step 2: Function to handle a cell click
 function handleCellClick(cellId) {
   // Find the index of the clicked cell in the gameBoard array
   const cellIndex = parseInt(cellId.split('-')[1]);

   // If the cell is already filled, do nothing (prevent further clicks on the same cell)
   if (gameBoard[cellIndex] !== '') return;

   // Step 3: Mark the cell with the current player's symbol (X or O)
   gameBoard[cellIndex] = currentPlayer;

   // Step 4: Update the cell's content on the webpage
   document.getElementById(cellId).textContent = currentPlayer;

   // Step 5: Check if the game is over
   if (checkWin()) {
     document.getElementById('message').textContent = `Player ${currentPlayer} wins!`;
     disableGame(); // Disable the game if someone wins
     return;
   }

   // Step 6: Check if the game is a draw (no empty cells left)
   if (gameBoard.every(cell => cell !== '')) {
     document.getElementById('message').textContent = "It's a draw!";
     return;
   }

   // Step 7: Switch players
   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
   document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
 }

 // Step 8: Check for a win condition (check all possible win combinations)
 function checkWin() {
   const winPatterns = [
     [0, 1, 2], // Row 1
     [3, 4, 5], // Row 2
     [6, 7, 8], // Row 3
     [0, 3, 6], // Column 1
     [1, 4, 7], // Column 2
     [2, 5, 8], // Column 3
     [0, 4, 8], // Diagonal 1
     [2, 4, 6], // Diagonal 2
   ];

   // Check each win pattern
   for (let pattern of winPatterns) {
     const [a, b, c] = pattern;
     if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
       return true; // Return true if a winning combination is found
     }
   }

   return false; // No win detected
 }

 // Step 9: Disable all cells (once the game is over)
 function disableGame() {
   const cells = document.querySelectorAll('.cell');
   cells.forEach(cell => {
     cell.style.pointerEvents = 'none'; // Disable clicks on all cells
   });
 }

 // Step 10: Add event listeners to all cells
 const cells = document.querySelectorAll('.cell');
 cells.forEach(cell => {
   cell.addEventListener('click', function () {
     handleCellClick(cell.id);
   });
 });