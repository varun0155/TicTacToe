
let boardstate = [["", "", ""],
["", "", ""],
["", "", ""]
]


let currentPlayer = "X";

let winner = "none";

let activePlayer = document.querySelector("#activePlayer");

function getIndex(id) {
  let ind = parseInt(id);
  ind--;

  let row = Math.floor(ind / 3);
  let col = ind % 3;

  return [row, col];
}

function checkStatus() {

  // row
  for (let i = 0; i < boardstate.length; i++) {
    let cnt = 1;
    for (let j = 1; j < boardstate[i].length; j++) {
      if (boardstate[i][j] != "" && boardstate[i][j - 1] != "" && boardstate[i][j] == boardstate[i][j - 1]) {
        cnt++;
      }
    }
    if (cnt == 3)
      return true;
  }

  // column
  for (let i = 0; i < boardstate.length; i++) {
    let cnt = 1;
    for (let j = 1; j < boardstate[i].length; j++) {
      if (boardstate[j][i] != "" && boardstate[j - 1][i] != "" && boardstate[j][i] == boardstate[j - 1][i]) {
        cnt++;
      }
    }
    if (cnt == 3)
      return true;
  }

  // down diagonal
  let i = 1, j = 1, cnt = 1;
  while (i != boardstate.length) {
    if (boardstate[i][j] != "" && boardstate[i - 1][j - 1] != "" && boardstate[i][j] == boardstate[i - 1][j - 1]) {
      cnt++;
    }
    i++; j++;
  }
  if (cnt == 3)
    return true;

  cnt = 1;
  // up diagonal
  i = 1; j = 1;
  while (i >= 0) {
    if (boardstate[i][j] != "" && boardstate[i + 1][j - 1] != "" && boardstate[i][j] == boardstate[i + 1][j - 1]) {
      cnt++;
    }
    i--; j++;
  }
  if (cnt == 3)
    return true;


  return false;
}

function finalMessage() {
  winner = currentPlayer;
  alert(`${winner} won`);
  clearBoard();
}

function play(event) {

  if (winner != "none") {
    alert("Start a new game");
    return;
  }

  let ind = getIndex(event.id);
  let r = ind[0], c = ind[1];

  if (boardstate[r][c] != "") {
    return;
  }

  boardstate[r][c] = currentPlayer;
  event.innerText = currentPlayer;
  
  let chk = checkStatus(); // checking row, col, and diagonal have all element equal

  if (chk) {
    finalMessage();
    return;
  }

  currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
  activePlayer.innerText = currentPlayer;
}

function clearBoard() {
  boardstate = [["", "", ""],
  ["", "", ""],
  ["", "", ""]
  ]
  currentPlayer = "X";
  winner = "none";
  activePlayer.innerText = currentPlayer;

  cell_list = document.querySelectorAll(".cell");

  for (let i = 0; i < cell_list.length; i++) {
    console.log(cell_list);
    cell_list[i].innerText = "";
  }
}
