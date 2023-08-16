

function getComputerChoice() {
    const choice = ["Rock", "Paper", "scissors"]
    return choice[Math.floor(Math.random() * choice.length)];
  
  }
  
  console.log(getComputerChoice())
  
  
  
  function playRound() {
  
    let playerSelection = "choose rock, paper, or scissors";
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
  
  console.log(playRound());
  
  
const body = document.querySelector("body")  
const divForbuttons = document.createElement ("div");

const rock = document.createElement("button");
rock.textContent ="Rock";

const paper = document.createElement("button");
paper.textContent = "paper";

const scissors = document.createElement("button");
scissors.textContent = "scissors";


rock.addEventListener()


divForbuttons.appendChild(rock);
divForbuttons.appendChild(paper);
divForbuttons.appendChild(scissors);

body.appendChild(divForbuttons);