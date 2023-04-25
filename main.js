// Creates gameboard as 3 arrays inside of an object
const Gameboard = (() => {

  let gameBoard = [['','',''],['','',''],['','','']];
  
  const renderBoard = () => {
    const container = document.getElementById('container');
    for(let i = 0; i < Gameboard.gameBoard.length; i++) {
      for(let j = 0; j < Gameboard.gameBoard[i].length; j++) {
        const boxContainer = document.createElement('button');
        const itemContainer = document.createElement('p');
        boxContainer.classList.add('field')
        itemContainer.textContent = Gameboard.gameBoard[i][j];
        container.appendChild(boxContainer);
        boxContainer.appendChild(itemContainer);
  }}}
  return {gameBoard, renderBoard};
})();
Gameboard.renderBoard();

// Creates game logic for placing X or O inside of array or "squares on gameboard"
let gameController = (() => {

})();


// Creates players and what symbol they chose
const Player = (name, symbol) => {
this.name = name;
this.symbol = symbol;
return {name, symbol};
}

function placeSymbol () {

  const boxes = document.querySelectorAll('.field')
  let array = Array.from(boxes);

  array.forEach((button, index) => {
    button.addEventListener('click', function() {
      for(let j = 0; j < Gameboard.gameBoard.length; j++){
        for(let i = 0; i < Gameboard.gameBoard[j].length; i++) {
      Gameboard.gameBoard[i].splice(index, 1, 'X');
      
      return;
    }
  }
  }
  )}
)}



placeSymbol();
