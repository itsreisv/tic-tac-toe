// Creates gameboard as 3 arrays inside of an object
const Gameboard = (() => {
    let gameBoard = [['','',''],['','',''],['','','']];

    
    const resetBoard = () => {
      document.querySelector('.restart').addEventListener('click', () => {
       location.reload();
      })}

  return {gameBoard, resetBoard};
})();



// Creates game logic for placing X or O inside of array or "squares on gameboard"
let gameController = (() => {
     
  let playerOneTurn = true;
  let playerTwoTurn = false;

  const displayInfo = () => {
    let display = document.querySelector('.display-info');
    document.querySelectorAll('.field').forEach((button) => {
    button.addEventListener('click', () => {
      if(playerOneTurn === true && playerTwoTurn === false) {
        display.textContent = userTwo.name + '\'s Turn!';
      } else if (playerOneTurn === false && playerTwoTurn === true) {
        display.textContent = userOne.name + '\'s Turn!';
      }
    }
    )}
)}

  const alternate = () => {
    document.querySelectorAll('.field').forEach((button) => {
      button.addEventListener('click', () => {
        if(playerOneTurn === true && playerTwoTurn === false) {
          playerOneTurn = false;
          playerTwoTurn = true;
        } else if (playerOneTurn === false && playerTwoTurn === true) {
          playerOneTurn = true;
          playerTwoTurn = false;
        }})})}

  const placeTop = () => {
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
        }})})}

  const placeMid = () => {
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
      }})})}
  
  const placeBot = () => {
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
        }})})}

  const gameOver = () => {
    let display = document.querySelector('.display-info');
    document.querySelectorAll('.field').forEach((button) => {
      button.addEventListener('click', () => {
    if((Gameboard.gameBoard[0][0] === 'X' && Gameboard.gameBoard[1][1] === 'X' && Gameboard.gameBoard[2][2] === 'X') ||
    (Gameboard.gameBoard[0][2] === 'X' && Gameboard.gameBoard[1][1] === 'X' && Gameboard.gameBoard[2][0] === 'X') ||
    (Gameboard.gameBoard[0][0] === 'X' && Gameboard.gameBoard[0][1] === 'X' && Gameboard.gameBoard[0][2] === 'X') ||
    (Gameboard.gameBoard[1][0] === 'X' && Gameboard.gameBoard[1][1] === 'X' && Gameboard.gameBoard[1][2] === 'X') ||
    (Gameboard.gameBoard[2][0] === 'X' && Gameboard.gameBoard[2][1] === 'X' && Gameboard.gameBoard[2][2] === 'X') ||
    (Gameboard.gameBoard[0][0] === 'X' && Gameboard.gameBoard[1][0] === 'X' && Gameboard.gameBoard[2][0] === 'X') ||
    (Gameboard.gameBoard[0][1] === 'X' && Gameboard.gameBoard[1][1] === 'X' && Gameboard.gameBoard[2][1] === 'X') ||
    (Gameboard.gameBoard[0][2] === 'X' && Gameboard.gameBoard[1][2] === 'X' && Gameboard.gameBoard[2][2] === 'X')) {
    display.textContent = userOne.name + ' ' + 'Wins!';
   return;
   
} else if ((Gameboard.gameBoard[0][0] === 'O' && Gameboard.gameBoard[1][1] === 'O' && Gameboard.gameBoard[2][2] === 'O') ||
    (Gameboard.gameBoard[0][2] === 'O' && Gameboard.gameBoard[1][1] === 'O' && Gameboard.gameBoard[2][0] === 'O') ||
    (Gameboard.gameBoard[0][0] === 'O' && Gameboard.gameBoard[0][1] === 'O' && Gameboard.gameBoard[0][2] === 'O') ||
    (Gameboard.gameBoard[1][0] === 'O' && Gameboard.gameBoard[1][1] === 'O' && Gameboard.gameBoard[1][2] === 'O') ||
    (Gameboard.gameBoard[2][0] === 'O' && Gameboard.gameBoard[2][1] === 'O' && Gameboard.gameBoard[2][2] === 'O') ||
    (Gameboard.gameBoard[0][0] === 'O' && Gameboard.gameBoard[1][0] === 'O' && Gameboard.gameBoard[2][0] === 'O') ||
    (Gameboard.gameBoard[0][1] === 'O' && Gameboard.gameBoard[1][1] === 'O' && Gameboard.gameBoard[2][1] === 'O') ||
    (Gameboard.gameBoard[0][2] === 'O' && Gameboard.gameBoard[1][2] === 'O' && Gameboard.gameBoard[2][2] === 'O')) {
   display.textContent = userTwo.name + ' ' + 'Wins!'
   return;
   
} else if ((Gameboard.gameBoard[0][0] === 'X' || Gameboard.gameBoard[0][0] === 'O') && (Gameboard.gameBoard[0][1] === 'X' || Gameboard.gameBoard[0][1] === 'O') && (Gameboard.gameBoard[0][2] === 'X' || Gameboard.gameBoard[0][2] === 'O')
          && (Gameboard.gameBoard[1][0] === 'X' || Gameboard.gameBoard[1][0] === 'O') && (Gameboard.gameBoard[1][1] === 'X' || Gameboard.gameBoard[1][1] === 'O') && (Gameboard.gameBoard[1][2] === 'X' || Gameboard.gameBoard[1][2] === 'O')
          && (Gameboard.gameBoard[2][0] === 'X' || Gameboard.gameBoard[2][0] === 'O') && (Gameboard.gameBoard[2][1] === 'X' || Gameboard.gameBoard[2][1] === 'O') && (Gameboard.gameBoard[2][2] === 'X' || Gameboard.gameBoard[2][2] === 'O')) {
 display.textContent = 'Its a Draw!';
}
  }
    )})}

  const setPlayers = () => {
    document.querySelector('#submit').addEventListener('click', () => {
      userOne = Player(document.querySelector('#nameOne').value);
      userTwo = Player(document.querySelector('#nameTwo').value);
      document.getElementById('modal').style.display = 'none';
      return;
    })}

  const appendPage = () => {
    const header = document.querySelector('.header');
    const head = document.querySelector('.head');
    const addName = document.createElement('h2');
    const addNameTwo = document.createElement('h2');
    const addSymbol = document.createElement('h3');
    const addSymbolTwo = document.createElement('h3');
    document.querySelector('#submit').addEventListener('click', () => {
      addName.textContent = document.querySelector('#nameOne').value;
      addSymbol.textContent = 'X';
      addName.appendChild(addSymbol);
      header.insertBefore(addName, head);
      addNameTwo.textContent = document.querySelector('#nameTwo').value;
      addSymbolTwo.textContent = 'O';
      addNameTwo.appendChild(addSymbolTwo);
      header.appendChild(addNameTwo);
      return;
  })}
  
        
        return {alternate, placeTop, placeMid, placeBot, gameOver, displayInfo, setPlayers, appendPage};
})();

gameController.setPlayers();
gameController.appendPage();
gameController.displayInfo();
gameController.placeTop();
gameController.placeMid();
gameController.placeBot();
gameController.alternate();
gameController.gameOver();
Gameboard.resetBoard();


const Player = (name) => {
      this.name = name;
      return {name}
    }
