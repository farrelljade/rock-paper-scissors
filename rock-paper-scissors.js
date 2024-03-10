function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice() {
    let choice = prompt("Choose:\nrock\npaper\nscissors");
    return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(`It's a tie!\nYou chose: ${playerSelection}\ncomputer chose: ${computerSelection}`);
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log("You lose! Paper beats Rock");
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log("You win! Rock beats Scissors");
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log("You win! Paper beats Rock");
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log("You lose! Scissors beats Paper");
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log("You lose! Rock beats Scissors");
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log("You win! Scissors beats Paper");
  }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);