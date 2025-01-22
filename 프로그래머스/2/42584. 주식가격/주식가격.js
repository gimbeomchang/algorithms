const solution = (prices) => {
  const len = prices.length;
  const result = new Array(len).fill(0);
  const stack = [0]; // prices 의 index 를 저장하는 stack.

  for (let i = 1; i < len; i++) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
      const j = stack.pop();
      result[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    result[j] = len - j - 1;
  }

  return result;
};
