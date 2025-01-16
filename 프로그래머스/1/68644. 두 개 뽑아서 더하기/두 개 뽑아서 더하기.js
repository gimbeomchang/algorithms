const solution = (arr) => {
  const result = new Set();

  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      result.add(arr[i] + arr[j]);
    }
  }

  return [...result].sort((a, b) => a - b);
};
