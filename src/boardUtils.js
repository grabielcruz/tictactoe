const genBoard = () => {
  const board = new Array(9).fill('#');
  return board;
};

const markBoard = (board, position, mark) => {
  if (position > 8 || position < 0) return { type: 'error', value: 'wrong position' };
  if (mark !== 'X' && mark !== 'O') {
    return { type: 'error', msg: 'wrong mark. Only "X" or "O" allowed' };
  }
  if (board[position] === 'X' && board[position] === 'O') {
    return { type: 'error', msg: 'position already taken' };
  }
  board[position] = mark;
  return { type: 'success', msg: 'board marked' };
};

const check_winner = (board, mark) => {
  if (board[0] === mark) {
    if (board[1] === mark && board[2] === mark) {
      return { type: 'success', value: `${mark} wins` };
    }
    if (board[3] === mark && board[6] === mark) {
      return { type: 'success', value: `${mark} wins` };
    }
    if (board[4] === mark && board[8] === mark) {
      return { type: 'success', value: `${mark} wins` };
    }
  }

  if (board[2] === mark) {
    if (board[5] === mark && board[8] === mark) {
      return { type: 'success', value: `${mark} wins` };
    }
    if (board[4] === mark && board[6] === mark) {
      return { type: 'success', value: `${mark} wins` };
    }
  }

  if (board[4] === mark) {
    if (board[1] === mark && board[7] === mark) {
      return { type: 'success', value: `${mark} wins` };
    }
    if (board[3] === mark && board[5] === mark) {
      return { type: 'success', value: `${mark} wins` };
    }
  }

  if (board[6] === mark && board[7] === mark && board[8] === mark) {
    return { type: 'success', value: `${mark} wins` };
  }
  return { type: 'fail', value: 'no winner' };
};

const checkGameOver = (board) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '#') return false
  }
  return true
}

module.exports = { genBoard, markBoard, check_winner, checkGameOver };
