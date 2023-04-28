// Creates gameboard as 3 arrays inside of an object
const Gameboard = (() => {
    let gameBoard = [['','',''],['','',''],['','','']];

        
  return {gameBoard};
})();



// Creates game logic for placing X or O inside of array or "squares on gameboard"
let gameController = (() => {
  let playerOneTurn = true;
  let playerTwoTurn = false;



})();


// Creates players and what symbol they chose
const Player = (name, symbol) => {
this.name = name;
this.symbol = symbol;
return {name, symbol};
}


function placeTop() {
  document.querySelectorAll('.top').forEach((button, index) => {
    button.addEventListener('click', () => {
      if(Gameboard.gameBoard[0][index] === 'X' || Gameboard.gameBoard[0][index] === 'O') {
        alert('Choose a different square');
      } else if (playerOneTurn === true && playerTwoTurn === false) {
        Gameboard.gameBoard[0].splice(index, 1, 'X');
        button.textContent = Gameboard.gameBoard[0][index];
      } else if (playerOneTurn === false && playerTwoTurn === true) {
        Gameboard.gameBoard[0].splice(index, 1, 'O');
        button.textContent = Gameboard.gameBoard[0][index];
      }
})})}

function placeMid() {
  document.querySelectorAll('.mid').forEach((button, index) => {
    button.addEventListener('click', () => {
      if(Gameboard.gameBoard[1][index] === 'X' || Gameboard.gameBoard[1][index] === 'O') {
        alert('Choose a different square');
    } else if (playerOneTurn === true && playerTwoTurn === false) {
      Gameboard.gameBoard[1].splice(index, 1, 'X');
      button.textContent = Gameboard.gameBoard[1][index];
    } else if (playerOneTurn === false && playerTwoTurn === true) {
      Gameboard.gameBoard[1].splice(index, 1, 'O');
      button.textContent = Gameboard.gameBoard[1][index];
    }
})})}

function placeBot() {
  document.querySelectorAll('.bot').forEach((button, index) => {
    button.addEventListener('click', () => {
      if(Gameboard.gameBoard[2][index] === 'X' || Gameboard.gameBoard[2][index] === 'O') {
        alert('Choose a different square');
      } else if (playerOneTurn === true && playerTwoTurn === false) {
        Gameboard.gameBoard[2].splice(index, 1, 'X');
        button.textContent = Gameboard.gameBoard[2][index];
      } else if (playerOneTurn === false && playerTwoTurn === true) {
        Gameboard.gameBoard[2].splice(index, 1, 'O');
        button.textContent = Gameboard.gameBoard[2][index];
      }
})})}


placeTop();
placeMid();
placeBot();
alternate();

let playerOneTurn = true;
let playerTwoTurn = false;

function alternate () {
  document.querySelectorAll('.field').forEach((button) => {
    button.addEventListener('click', () => {
      if(playerOneTurn === true && playerTwoTurn === false) {
        playerOneTurn = false;
        playerTwoTurn = true;
      } else if (playerOneTurn === false && playerTwoTurn === true) {
        playerOneTurn = true;
        playerTwoTurn = false;
      }
    }
  )}
)}