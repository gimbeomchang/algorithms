const solution = (board, moves) => {
  const n = board.length;
  let cnt = 0;
  const bucket = [];

  moves.forEach((move) => {
    for (let i = 0; i < n; i++) {
      const top = bucket[bucket.length - 1];
      const target = board[i][move - 1];
      if (target) {
        if (target === top) {
          bucket.pop();
          cnt++;
        } else {
          bucket.push(board[i][move - 1]);
        }

        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return cnt * 2;
};
