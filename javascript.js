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
  function displayWinScreen(humanScore, computerScore, resultsDisplay) {
    // Hide the buttons as someone has won
    optionButtons.removeChild(rockButton);
    optionButtons.removeChild(paperButton);
    optionButtons.removeChild(scissorsButton);

    if (humanScore > computerScore) {
      resultsDisplay.style.color = "green";
      resultsDisplay.textContent = "The winner is... YOU! :)";
    } else if (humanScore < computerScore) {
      resultsDisplay.style.color = "red";
      resultsDisplay.textContent = "The winner is the Computer :(";
    }
  }

  function playRound(humanChoice) {
    let computerChoice = getComputerChoice();

    // User wins
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore += 1;
      scoreDisplay.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}\n`;
      resultsDisplay.textContent = `You chose: ${capitalise(humanChoice)},
       Computer chose: ${capitalise(computerChoice)}
       ... You win!`;
    } else if (humanChoice === computerChoice) {
      scoreDisplay.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}\n`;
      resultsDisplay.textContent = `You chose: ${capitalise(humanChoice)},
       Computer chose: ${capitalise(computerChoice)}
       ... You draw! `;
    } else {
      computerScore += 1;
      scoreDisplay.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}\n`;
      resultsDisplay.textContent = `You chose: ${capitalise(humanChoice)}, 
      Computer chose: ${capitalise(computerChoice)}
      ... You lose!`;
    }

    // Display win screen if someone has now won
    if (humanScore === 5 || computerScore === 5) {
      displayWinScreen(humanScore, computerScore, resultsDisplay);
    }
  }

  let humanScore = 0;
  let computerScore = 0;

  // Display the scores
  const scoreDisplay = document.createElement("div");
  main.appendChild(scoreDisplay);
  scoreDisplay.style.whiteSpace = "pre-line"; // preserve newlines
  scoreDisplay.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

  // Display the rock/paper/scissors buttons for user choice
  const rockButton = document.createElement("button");
  const paperButton = document.createElement("button");
  const scissorsButton = document.createElement("button");
  rockButton.textContent = "Rock";
  paperButton.textContent = "Paper";
  scissorsButton.textContent = "Scissors";

  // Display the result of the current round: win/lose/draw
  const resultsDisplay = document.createElement("div");
  main.appendChild(resultsDisplay);
  resultsDisplay.style.whiteSpace = "pre-line"; // preserve newlines

  optionButtons.appendChild(rockButton);
  optionButtons.appendChild(paperButton);
  optionButtons.appendChild(scissorsButton);

  // Allow player to press button to choose rock/paper/scissors to play a round
  rockButton.addEventListener("click", () => playRound("rock"));
  paperButton.addEventListener("click", () => playRound("paper"));
  scissorsButton.addEventListener("click", () => playRound("scissors"));
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
