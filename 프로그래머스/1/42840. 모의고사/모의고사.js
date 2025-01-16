const solution = (answers) => {
  const result = [];

  const scores = [0, 0, 0];

  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  answers.forEach((answer, i) => {
    patterns.forEach((pattern, j) => {
      if (answer === pattern[i % pattern.length]) scores[j]++;
    });
  });

  const max = Math.max(...scores);

  return scores
    .map((score, i) => {
      if (score === max) return i + 1;
      else return;
    })
    .filter((v) => !!v)
    .sort((a, b) => a - b);
};
