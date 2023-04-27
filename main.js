// Creates gameboard as 3 arrays inside of an object
const Gameboard = (() => {

  let gameBoard = ['','','','','','','','',''];
  
  const renderBoard = () => {
    const container = document.getElementById('container');
    for(let i = 0; i < Gameboard.gameBoard.length; i++) {
      
        const boxContainer = document.createElement('button');
        const itemContainer = document.createElement('p');
        boxContainer.classList.add('field')
        itemContainer.textContent = Gameboard.gameBoard[i];
        container.appendChild(boxContainer);
        boxContainer.appendChild(itemContainer);
  }}
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

  const boxes = document.querySelectorAll('.field');

  boxes.forEach((button, index) => {
    button.addEventListener('click', function() {
      if(button.textContent === '') {
      for(let j = 0; j < Gameboard.gameBoard.length; j++){
      Gameboard.gameBoard.splice(index, 1, 'X');
      button.textContent = 'X';
      return;
    }
  }else if(button.textContent === 'X' || button.textContent ==='O') {
    alert('Choose a different square');
    return;

  }
}
  )}
  )}




placeSymbol();
