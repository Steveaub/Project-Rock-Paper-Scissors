

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"]
  return choice[Math.floor(Math.random() * choice.length)];

}

let playerScore = 0;
  let computerScore = 0;



function playRound(userChoice) {

  


  let playerSelection = userChoice;
  let computerSelection = getComputerChoice();

 

  
  playerPoint.textContent = `Player Score ${playerScore}`;
  computerPoint.textContent = `Computer Score ${computerScore}`;


  if (playerSelection === computerSelection) {
    roundResults.textContent = "its a tie!"
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


  if (playerScore === 5 && computerScore < 5) {
    winnerWinner.textContent = "Congratulations!!!!!! Player wins the game!"

  } else if (playerScore > 5 && computerScore === 5){
    winnerWinner.textContent = "Oh Spaghettios! You lose! Computer beats player."
  }

  }






  



const roundResults = document.getElementById("roundResults");

const winnerWinner = document.getElementById("gameWinner")

const gameScore = document.getElementById("gameScore");
const computerPoint = document.getElementById("computerPoint");
const playerPoint = document.getElementById("playerPoint");



const rock = document.getElementById("rock").addEventListener("click",()=>playRound("rock"));
const paper = document.getElementById("paper").addEventListener("click",()=>playRound("paper"));;
const scissors = document.getElementById("scissors").addEventListener("click",()=>playRound("scissors"));;








