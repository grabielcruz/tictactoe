const { prompt } = require('enquirer');
const boardUtils = require('./boardUtils');

const USERS = ["Luis", "Francis"]

const getPosition0to8 = async (user, board) => {
  while (true) {
    const response = await prompt({
      type: 'input',
      name: 'userPosition',
      message: `Enter position ${user}:`,
    });
    if (Number.parseInt(response.userPosition) >= 0 && Number.parseInt(response.userPosition) <= 8) {
      if (board[response.userPosition] === "X" || board[response.userPosition] === "O") {
        console.log("Position already taken, choose a different one")
        continue
      }
      return Number.parseInt(response.userPosition)
    }
    console.log('Wrong position. It should be a number between 0 and 8')
  }
};

const play = async (user, board, mark) => {
  const userPosition = await getPosition0to8(user, board)
  boardUtils.markBoard(board, userPosition, mark);
  console.log(board);

  if (boardUtils.check_winner(board, mark)) {
    console.log(`${user} wins!`);
    return true
  }

  if (boardUtils.checkGameOver(board)) {
    console.log("game over")
    return true
  }

  return false
}

const runGame = async () => {
  const BOARD = boardUtils.genBoard();
  while (true) {
    if (await play(USERS[0], BOARD, "X")) return 
    if (await play(USERS[1], BOARD, "O")) return
  }
};

runGame();