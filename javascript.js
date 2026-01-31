// const { createElement } = require("react");

function getComputerChoice() {
  // Randomly return either: rock, papers, or scissors

  // Get a num either: 0 (rock), 1 (paper), 2 (scissors)
  let randNum = Math.floor(Math.random() * 3);

  switch (randNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function playGame() {
  function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    console.log("humanChoice: " + humanChoice);
    console.log("computerChoice: " + computerChoice);

    // User wins
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      resultsDisplay.textContent = `You chose: ${capitalise(humanChoice)},
       Computer chose: ${capitalise(computerChoice)}
       ... You win!`;
    } else if (humanChoice === computerChoice) {
      resultsDisplay.textContent = `You chose: ${capitalise(humanChoice)},
       Computer chose: ${capitalise(computerChoice)}
       ... You draw! `;
    } else {
      computerScore += 1;
      resultsDisplay.textContent = `You chose: ${capitalise(humanChoice)}, 
      Computer chose: ${capitalise(computerChoice)}
      ... You lose!`;
    }
  }

  // Create the rock/paper/scissors buttons for the human choice
  const rockButton = document.createElement("button");
  const paperButton = document.createElement("button");
  const scissorsButton = document.createElement("button");
  rockButton.textContent = "Rock";
  paperButton.textContent = "Paper";
  scissorsButton.textContent = "Scissors";

  // Create div to display the results
  const resultsDisplay = document.createElement("div");
  main.appendChild(resultsDisplay);
  resultsDisplay.style.whiteSpace = "pre-line"; // preserve newlines

  rockButton.addEventListener("click", () => {
    console.log("Pressed ROCK");
    choice = "rock";
    playRound(choice);
  });

  paperButton.addEventListener("click", () => {
    choice = "paper";
    console.log("Pressed PAPER");
    playRound(choice);
  });

  scissorsButton.addEventListener("click", () => {
    choice = "scissors";
    console.log("Pressed SCISSORS");
    playRound(choice);
  });

  optionButtons.appendChild(rockButton);
  optionButtons.appendChild(paperButton);
  optionButtons.appendChild(scissorsButton);

  let humanScore = 0;
  let computerScore = 0;

  if (humanScore > computerScore) {
    console.log("The winner is... YOU! :)");
  } else if (humanScore < computerScore) {
    console.log("The winner is the Computer :(");
  } else {
    console.log("It was a draw...");
  }
}

const main = document.querySelector("main");
const optionButtons = document.querySelector("#option-buttons");
const startGameBtn = document.querySelector("#start-game");

// Press the start button to play the game
startGameBtn.addEventListener("click", () => {
  console.log("Game screen opened.");
  optionButtons.removeChild(startGameBtn);
  playGame();
});
