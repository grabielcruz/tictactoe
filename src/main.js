const { prompt } = require('enquirer');
const boardUtils = require('./boardUtils');

const board = boardUtils.genBoard();
let winner_checked = {};
let response;
const runGame = async () => {
  while (true) {
    response = await prompt({
      type: 'input',
      name: 'user1position',
      message: 'Enter position user1:',
    });
    boardUtils.markBoard(board, response.user1position, 'X');
    winner_checked = boardUtils.check_winner(board, 'X');
    console.log(board);
    if (winner_checked.type === 'success') {
      console.log(winner_checked.value);
      break;
    }

    response = await prompt({
      type: 'input',
      name: 'user2position',
      message: 'Enter position user2:',
    });
    boardUtils.markBoard(board, response.user2position, 'O');
    winner_checked = boardUtils.check_winner(board, 'O');
    console.log(board);
    if (winner_checked.type === 'success') {
      console.log(winner_checked.value);
      break;
    }
  }
};

runGame();
