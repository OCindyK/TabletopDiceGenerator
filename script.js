function rollDice() {
  const dice = document.getElementById("dice");
  const dots = dice.getElementsByClassName("dot");

  // Hide all dots initially
  for (let dot of dots) {
    dot.style.display = "none";
  }

  // Generate a random number between 1 and 6
  const randomNumber = Math.floor(Math.random() * 6) + 1;

  // Get the dot positions based on the random number
  const dotPositions = {
    1: [ [50, 50] ],
    2: [ [25, 25], [75, 75] ],
    3: [ [25, 25], [50, 50], [75, 75] ],
    4: [ [25, 25], [25, 75], [75, 25], [75, 75] ],
    5: [ [25, 25], [25, 75], [50, 50], [75, 25], [75, 75] ],
    6: [ [25, 25], [25, 50], [25, 75], [75, 25], [75, 50], [75, 75] ]
  };

  // Get the dot positions based on the random number
  const positions = dotPositions[randomNumber];

  // Display the appropriate dots based on the dot positions
  for (let i = 0; i < positions.length; i++) {
    const [x, y] = positions[i];
    dots[i].style.top = `${y}%`;
    dots[i].style.left = `${x}%`;
    dots[i].style.display = "block";
  }
}

// Attach the rollDice function to the click event of the roll button
document.getElementById('rollButton').addEventListener('click', rollDice);
