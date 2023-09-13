function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

getComputerChoice();

let userSelection;

let youWin = 0;
let computerWin = 0;

function playRound(playerSelection, computerSelection) {
  userSelection = prompt("Please type a rule ").trim().toLocaleLowerCase();

  // both equal
  if (playerSelection === computerSelection) {
    console.log(`${playerSelection}:`, `${computerSelection}:`, "equal");
    youWin++;
    computerWin++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log(
      `${playerSelection}:`,
      `${computerSelection}:`,
      "one for computer"
    );
    computerWin++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`${playerSelection}:`, `${computerSelection}:`, "one for you");
    youWin++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`${playerSelection}:`, `${computerSelection}:`, "one for you");
    youWin++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log(
      `${playerSelection}:`,
      `${computerSelection}:`,
      "one for computer"
    );
    computerWin++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log(
      `${playerSelection}:`,
      `${computerSelection}:`,
      "one for computer"
    );
    computerWin++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`${playerSelection}:`, `${computerSelection}:`, "one for you");
    youWin++;
  }
}

function game() {
  let n = 5;
  for (let i = 0; i <= n; i++) {
    playRound(userSelection, getComputerChoice());
  }

  if (youWin === computerWin) {
    console.log("equal");
  } else if (youWin < computerWin) {
    console.log("computers won");
  } else if (youWin > computerWin) {
    console.log("you won");
  }
}

game();
