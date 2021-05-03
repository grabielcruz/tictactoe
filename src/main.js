const { prompt } = require('enquirer');
const boardUtils = require('./boardUtils');

const getPosition0to8 = async (user, board) => {
  while (true) {
    const response = await prompt({
      type: 'input',
      name: 'userPosition',
      message: `Enter position ${user}:`,
    });
    if (Number(response.userPosition) >= 0 && Number(response.userPosition <= 8)) {
      if (board[response.userPosition] === "X" || board[response.userPosition] === "O") {
        console.log("Position already taken, choose a different one")
        continue
      }
      return response.userPosition
    }
    console.log('Wrong position. It should be a number between 0 and 8')
  }
};

const board = boardUtils.genBoard();
let winner_checked = {};

const runGame = async () => {
  while (true) {
    const user1Position = await getPosition0to8("user1", board)
    boardUtils.markBoard(board, user1Position, 'X');
    winner_checked = boardUtils.check_winner(board, 'X');
    console.log(board);
    if (winner_checked.type === 'success') {
      console.log(winner_checked.value);
      break;
    }

    const user2Position = await getPosition0to8("user2", board)
    boardUtils.markBoard(board, user2Position, 'O');
    winner_checked = boardUtils.check_winner(board, 'O');
    console.log(board);
    if (winner_checked.type === 'success') {
      console.log(winner_checked.value);
      break;
    }
  }
};

runGame();
