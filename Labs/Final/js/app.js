//Jake Muilenburg
//N220
//4/28/2023

const boardElement = document.getElementById("board");
const infoElement = document.getElementById("display");
const startSquares = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = 0;
let moveCount = 0;
let win = false;

function createSquares() {
  startSquares.forEach((_box, index) => {
    let squareElement = document.createElement('div')
    squareElement.classList.add('square')
    squareElement.id = index
    squareElement.addEventListener('click', addShape)
    boardElement.append(squareElement)
  })
}
createSquares();

function addCircle(event) {
  let circleElement = document.createElement('div');
  circleElement.classList.add('circle');
  event.target.append(circleElement);
  startSquares[event.target.id] = "O";
}
function addCross(event) {
  let crossElement = document.createElement('div');
  crossElement.classList.add('cross');
  event.target.append(crossElement);
  startSquares[event.target.id] = "X";
}

function addShape(event) {
  if (currentPlayer == 0 && startSquares[event.target.id] == "" && win == false) {
    addCross(event);
    currentPlayer = 1;
    moveCount += 1;
    checkForWin();
  } else if (currentPlayer == 1 && startSquares[event.target.id] == "" && win == false) {
    addCircle(event);
    currentPlayer = 0;
    moveCount += 1;
    checkForWin();
  }
}

function checkForWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ] 

  for (i = 0; i < 7; i++) {
    if (startSquares[winningCombos[i][0]] == 'X' && startSquares[winningCombos[i][1]] == 'X' && startSquares[winningCombos[i][2]] == 'X') {
      infoElement.innerHTML = "X Wins!";
      win = true;
    } else if (startSquares[winningCombos[i][0]] == 'O' && startSquares[winningCombos[i][1]] == 'O' && startSquares[winningCombos[i][2]] == 'O') {
      infoElement.innerHTML = "O Wins";
      win = true;
    } else if (moveCount == 9) {
      infoElement.innerHTML = "Draw"
    }
  }
}
