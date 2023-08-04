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



function playRound(Playerselection) {
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  
  playerSelection.toLowerCase();
  computerSelection.toLowerCase();
  
  if ( playerSelection === "Rock" && computerSelection === "Rock") {
        return "its a tie!"
    } else if ( playerSelection === "rock" && computerSelection === "Scissors") {
         return "You win! rock beats scissors"
    } else (playerSelection === "rock" && computerSelection === "Paper") 
         return "You lose! paper beats rock"
    
         
  }


console.log(playRound());


function game() {
  console.log( playRound() );
  console.log( playRound() );
  console.log( playRound() );
  console.log( playRound() );
  console.log( playRound() );

  
  
}


console.log(game());



// const colors = [ "blue","green", "yellow", "red", "purple"];
// // for (let color = 0; color < colors.length; color++ ) {
// //   console.log(`${colors[color]} is my fav color`);
// // }