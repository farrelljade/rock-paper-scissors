function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
};

const commentary = document.querySelector(".commentary");
const scores = document.querySelector(".scores");
const winner = document.querySelector(".winner");

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
rock.textContent = "rock";
rock.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  if (computerSelection === "rock") {
    commentary.textContent = `It's a tie! You chose rock. computer chose ${computerSelection}.`;
  } else if (computerSelection === "paper") {
    computerScore += 1;
    commentary.textContent = "You lose! paper beats rock.";
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  } else {
    playerScore += 1;
    commentary.textContent = "You win! rock beats scissors.";
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  }
  if (playerScore === 5) {
    winner.textContent = "You win!";
  } else if (computerScore === 5) {
    winner.textContent = "You lose!";
  }
});

const paper = document.querySelector("#paper");
paper.textContent = "paper";
paper.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  if (computerSelection === "paper") {
    commentary.textContent = `It's a tie! You chose paper. computer chose ${computerSelection}.`;
  } else if (computerSelection === "rock") {
    playerScore += 1;
    commentary.textContent = "You win! paper beats rock.";
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  } else {
    computerScore += 1;
    commentary.textContent = "You lose! scissors beats paper.";
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  }
  if (playerScore === 5) {
    winner.textContent = "You win!";
  } else if (computerScore === 5) {
    winner.textContent = "You lose!";
  }
});

const scissors = document.querySelector("#scissors");
scissors.textContent = "scissors";
scissors.addEventListener("click", () => {
  let computerSelection = getComputerChoice();
  if (computerSelection === "scissors") {
    commentary.textContent = `It's a tie! You chose scissors. computer chose ${computerSelection}.`;
  } else if (computerSelection === "rock") {
    computerScore += 1;
    commentary.textContent = "You lose! rock beats scissors.";
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  } else {
    playerScore += 1;
    commentary.textContent = "You win! scissors beats paper.";
    scores.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
  }
  if (playerScore === 5) {
    winner.textContent = "You win!";
  } else if (computerScore === 5) {
    winner.textContent = "You lose!";
  }
});