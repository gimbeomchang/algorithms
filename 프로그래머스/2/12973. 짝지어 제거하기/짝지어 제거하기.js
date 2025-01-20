const solution = (s) => {
  const stack = [];

  [...s].forEach((c) => {
    const len = stack.length;

    if (!len) stack.push(c);
    else {
      const top = stack[len - 1];
      if (top === c) stack.pop();
      else stack.push(c);
    }
  });

  return Number(stack.length === 0);
};
