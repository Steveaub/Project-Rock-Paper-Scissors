

function getComputerChoice() {
  const choice = ["Rock", "Paper", "scissors"]
  return choice[Math.floor(Math.random() * choice.length)];

}

console.log(getComputerChoice())



function playRound() {

  let playerSelection = prompt("choose rock, paper, or scissors");
  let computerSelection = getComputerChoice();

  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    console.log("its a tie!");
    return 0

  } else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {

    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return -1

  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {

    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    return 1

  } else {
    return console.log ("Invalid Entry. Please chose rock, paper,scissors")

  }

}

// console.log(playRound());


function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let result = playRound();




    if (result === 1) {
      playerScore++

    } else if (result === -1) {
      computerScore++
    } else if (typeof result === "string") {
      i--;
    }

    
  }

  if (playerScore > computerScore) {
    return "Player wins!"
  } else if (playerScore < computerScore) {
    return "Computer Wins!"
  } else {
    return "ohh ohh Its a tie!"
  }

}
console.log(game());