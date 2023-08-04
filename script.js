// task- create a javascript program that will play rock paper scissors in against the computer.

// this will be done  in console no UI needed
// this user is going to need to pick rock, paper or scissors and the computer with also pick.
// the rock paper and scissors need to be compared and a winner determined

// define function That determines computer choice 
// define function that determines user choice
// compare computer and user choice than determine 


function getComputerChoice () {

  const choice = ["Rock","Paper","Scissors"];
  
  return choice [Math.floor(Math.random() * choice.length )];
  }
  
  console.log (getComputerChoice());
  
  
  
  function playRound() {
  
    let playerSelection = "rock";
    let computerSelection = getComputerChoice();
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
   
    
if ( playerSelection === "rock" && computerSelection === "rock") {
  return " It's a Tie!"
}   else if (playerSelection === "rock" && computerSelection === "paper") {
  return "You lose! paper beats rock."
}   else if (playerSelection === "rock" && computerSelection === "scissors") {
  return "You win! rock beats scissors."
}   else if (playerSelection === "paper" && computerSelection === "scissors"){
  return "You lose! scissors beats paper."
}   else if (playerSelection === "paper" && computerSelection === "paper") {
  return " It's a Tie!"
}  else if (playerSelection === "paper" && computerSelection === "rock") {
  return "You Win! paper beats rock."
}   else if (playerSelection === "scissors" && computerSelection === "rock"){
  return "You lose! rock beats scissors."
}   else if (playerSelection === "scissors" && computerSelection === "paper"){
  return "You win! scissors beats paper"
}   else if (playerSelection === "scissors" && computerSelection === "scissors"){
  return " It's a Tie!"
} 
    

    
    
  console.log(playRound());
  
}
 