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
  
    let playerSelection = prompt("Please enter your choice: rock, paper, or scissors");

    let computerSelection = getComputerChoice();
    
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
   
    
if ( playerSelection === computerSelection) {
  console.log("It's a tie!")
  return 0;
}   else if (playerSelection === "rock" && computerSelection === "paper") {
  console.log(  "You lose! paper beats rock.");
  return -1;
}   else if (playerSelection === "rock" && computerSelection === "scissors") {
  console.log("You win! rock beats scissors.")
  return 1;
}   else if (playerSelection === "paper" && computerSelection === "scissors"){
  console.log( "You lose! scissors beats paper.")
  return -1
// }   else if (playerSelection === "paper" && computerSelection === "paper") {
//   console.log("It's a tie!")
//   return 0;
}  else if (playerSelection === "paper" && computerSelection === "rock") {
  console.log ("You Win! paper beats rock.")
  return 1;
}   else if (playerSelection === "scissors" && computerSelection === "rock"){
  console.log( "You lose! rock beats scissors.")
  return -1;
}   else if (playerSelection === "scissors" && computerSelection === "paper"){
  console.log( "You win! scissors beats paper")
  return 1;
// }   else if (playerSelection === "scissors" && computerSelection === "scissors"){
//   console.log("It's a tie!")
//   return 0;
} else {
  return "Invalid entry. Choose from one of the three choices rock, paper, or scissors";
}

}

console.log(playRound());




// function game () {
  
//   let playerScore = 0;
//   let computerScore = 0;
 
// for (let i = 0; i < 5; i++) {
//   let result = playRound();
//   console.log(result);{

//   }
// }

// }


console.log(game());





function game() {
  let playerScore = 0;
  let computerScore = 0;
  
  for(let i = 0; i < 5; i++) {
      let result = playRound();

      if(result === 1) {
          playerScore++;
      } else if(result === -1) {
          computerScore++;
      } else if (typeof result === "string") {
          console.log(result);
          i--;  // repeat the round if invalid input was given
      }

      console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
  }

  if(playerScore > computerScore) {
      console.log("Player wins the game!");
  } else if (playerScore < computerScore) {
      console.log("Computer wins the game!");
  } else {
      console.log("The game is a tie!");
  }
}

game();
