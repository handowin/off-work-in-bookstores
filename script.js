const cells = document.querySelectorAll('.cell');
const rollButton = document.getElementById('roll-dice');
const diceResult = document.getElementById('dice-result');
const currentPlayerSpan = document.getElementById('current-player');
const dialogBox = document.getElementById('dialog-box');
const dialogText = document.getElementById('dialog-text');
const closeDialog = document.getElementById('close-dialog');

let positions = [0, 0, 0, 0]; // four players
let currentPlayer = 0; // 0-3

rollButton.addEventListener('click', () => {
  const dice = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = dice;

  positions[currentPlayer] += dice;
  if (positions[currentPlayer] >= cells.length) {
    positions[currentPlayer] = cells.length - 1;
    alert(`Player ${currentPlayer + 1} reached the end!`);
  }

  highlightPlayer(currentPlayer);
  checkDialog(currentPlayer);

  currentPlayer = (currentPlayer + 1) % 4;
  currentPlayerSpan.textContent = currentPlayer + 1;
});

closeDialog.addEventListener('click', () => {
  dialogBox.classList.add('hidden');
});

function highlightPlayer(player) {
  cells.forEach(cell => cell.classList.remove(`player${player + 1}`));
  const pos = positions[player];
  if (cells[pos]) {
    cells[pos].classList.add(`player${player + 1}`);
  }
}

// Optional: color players
const style = document.createElement('style');
style.textContent = `
  .player1 { background-color: #ff9999; }
  .player2 { background-color: #99ff99; }
  .player3 { background-color: #9999ff; }
  .player4 { background-color: #ffff99; }
`;
document.head.appendChild(style);

function checkDialog(player) {
  const pos = positions[player];
  const cell = cells[pos];
  if (cell.dataset.dialog) {
    dialogText.textContent = cell.dataset.dialog;
    dialogBox.classList.remove('hidden');
  }
}
