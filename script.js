// task- create a javascript program that will play rock paper scissors in against the computer.

// this will be done  in console no UI needed
// this user is going to need to pick rock, paper or scissors and the computer with also pick.
// the rock paper and scissors need to be compared and a winner determined

// define function That determines computer choice 
// define function that determines user choice
// compare computer and user choice than determine 


function GetComputerChoice () {

const choice = ["Rock","Paper","Scissors"];

return choice [Math.floor(Math.random() * choice.length)];

}

console.log (GetComputerChoice())
console.log (GetComputerChoice())
console.log (GetComputerChoice())

