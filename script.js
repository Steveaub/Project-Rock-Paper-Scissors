

function getComputerChoice() {
  const choice = ["Rock", "Paper", "scissors"]
  return choice[Math.floor(Math.random() * choice.length)];

}

console.log(getComputerChoice())



function playRound(userChoice) {

  let playerSelection = userChoice;
  let computerSelection = getComputerChoice();



  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie!";
    return 0

  } else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {

      result.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    return -1

  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {

      result.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;

  } else {
    result.textContent = "Invalid Entry. Please chose rock, paper, or scissors.";
  }

}









const rock = document.getElementById("rock").addEventListener("click",()=> playRound("rock"));
const paper = document.getElementById("paper").addEventListener("click",()=> playRound("paper"));
const scissors = document.getElementById("scissors").addEventListener("click",()=> playRound("scissors"));


// select/create parent
// select/create child 
// content 
// append

const result = document.getElementById("gameResults");






