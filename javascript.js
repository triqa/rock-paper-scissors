function getComputerChoice() {
  // Randomly return either: rock, papers, or scissors

  // Get a num either: 0 (rock), 1 (paper), 2 (scissors)
  randNum = Math.floor(Math.random() * 3);

  switch (randNum) {
    case 0:
      result = "rock";
      break;
    case 1:
      result = "paper";
      break;
    case 2:
      result = "scissors";
      break;
  }

  console.log(`${randNum}: ${result}`);
}

getComputerChoice();
