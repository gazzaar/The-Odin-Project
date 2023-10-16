const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const winner = document.getElementById("winner");
const yourScore = document.getElementById("u-score");
const computerScore = document.getElementById("computer-score");
const buttons = document.getElementById("buttons");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];

  const randomChoice = Math.floor(Math.random() * choices.length);

  return choices[randomChoice];
}

getComputerChoice();

let playerSelection;

let youWin = 0;
let computerWin = 0;

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  // both equal
  if (playerSelection === computerSelection) {
    youWin++;
    computerWin++;
    yourScore.innerText++;
    computerScore.innerText++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore.innerText++;

    computerWin++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    yourScore.innerText++;

    youWin++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    yourScore.innerText++;

    youWin++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore.innerText++;

    computerWin++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore.innerText++;

    computerWin++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    yourScore.innerText++;

    youWin++;
  }
  if (youWin === 5) {
    winner.innerText = `Congrats you won🥳`;
    youWin = yourScore.innerText = 0;
    computerWin = computerScore.innerText = 0;
  }
  if (computerWin === 5) {
    winner.innerText = `Sorry for you lost😔`;
    youWin = yourScore.innerText = 0;
    computerWin = computerScore.innerText = 0;
  }
  if (youWin === 5 && computerWin === 5) {
    winner.innerText = `No Winner🧐`;
    youWin = yourScore.innerText = 0;
    computerWin = computerScore.innerText = 0;
  }
}

// Event Listeners
buttons.addEventListener("click", (e) => {
  winner.innerText = "";
  if (e.target.classList.contains("button")) {
    if (e.target.classList.contains("button-rock")) {
      playerSelection = "rock";
      playRound(playerSelection, getComputerChoice());
    }
    if (e.target.classList.contains("button-paper")) {
      playerSelection = "paper";
      playRound(playerSelection, getComputerChoice());
    }
    if (e.target.classList.contains("button-scissors")) {
      playerSelection = "scissors";
      playRound(playerSelection, getComputerChoice());
    }
  }
});
