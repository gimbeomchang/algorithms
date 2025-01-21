const solution = (prices) => {
  const result = new Array(prices.length).fill(0);
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      result[i]++;
      if (price > prices[j]) break;
    }
  }

  return result;
};
