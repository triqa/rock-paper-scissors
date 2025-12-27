humanScore = 0;
computerScore = 0;

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

function getHumanChoice() {
  return prompt("Choice: ").toLowerCase();
}

function playRound() {
  let humanChoice = getHumanChoice();
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
    console.log(`You win! ${capitalise(humanChoice)} beats ${computerChoice}.`);
  } else if (humanChoice === computerChoice) {
    console.log(`You draw! `);
  } else {
    computerScore += 1;
    console.log(
      `You lose! ${capitalise(computerChoice)} beats ${humanChoice}.`
    );
  }
}

function capitalise(str) {
  return str[0].toUpperCase() + str.slice(1);
}

playRound();
