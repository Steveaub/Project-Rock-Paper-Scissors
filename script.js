

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"]
  return choice[Math.floor(Math.random() * choice.length)];

}





function playRound(userChoice) {

  


  let playerSelection = userChoice;
  let computerSelection = getComputerChoice();

 

  let playerScore = 0;
  let computerScore = 0;
  playerPoint.textContent = `Player Score ${playerScore}`;
  computerPoint.textContent = `Computer Score ${computerScore}`;


  if (playerSelection === computerSelection) {
    gameResults.textContent = "its a tie!"
    return 0

  } else if (playerSelection === "rock" && computerSelection === "paper" ||
    playerSelection === "paper" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "rock") {

    roundResults.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
    computerScore++
    computerPoint.textContent = `Computer Score ${computerScore}`;
  
  } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissors" && computerSelection === "paper") {

    roundResults.textContent =`You win! ${playerSelection} beats ${computerSelection}.`;
    playerScore++ ;
    playerPoint.textContent = `Player Score${playerScore}`;
  
  } 


  if (playerScore >= 5 || computerScore >= 5) {
    if (playerScore > computerScore) {
      winnerWinner.textContent = `Congratulations! You win! Player beats computer.`;
      console.log("Player wins the game!");
    } else {
      winnerWinner.textContent = `Oh Spaghettios! You lose! Computer beats player.`;
      console.log("Computer wins the game!");
    }

}
}



  



const roundResults = document.getElementById("gameResult");
const winnerWinner = document.getElementById("gameWinner")

const gameScore = document.getElementById("gameScore");
const computerPoint = document.getElementById("computerPoint");
const playerPoint = document.getElementById("playerPoint");



const rock = document.getElementById("rock").addEventListener("click",()=>playRound("rock"));
const paper = document.getElementById("paper").addEventListener("click",()=>playRound("paper"));;
const scissors = document.getElementById("scissors").addEventListener("click",()=>playRound("scissors"));;








