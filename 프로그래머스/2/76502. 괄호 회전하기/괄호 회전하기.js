const rotate = (arr) => {
    const head = arr.shift();
    arr.push(head);
    return arr;
}

const isPair = (arr) => {
    const stack = [];
    
    for (const c of arr) {
        if (c === '(' || c === '{' || c === '[') stack.push(c);
        else {
            const lastIdx = stack.length - 1;
            if (c === ')') {
                if(stack[lastIdx] === '(') stack.pop();
                else return false;
            }
            if (c === '}') {
                if(stack[lastIdx] === '{') stack.pop();
                else return false;
            }
            if (c === ']') {
                if(stack[lastIdx] === '[') stack.pop();
                else return false;
            }
        }
    }
    
    return stack.length === 0;
}

const solution = (s) => {
    let cnt = 0;
    for (let i = 0; i < s.length - 1; i++) {
        const nextArr= [...s];
        cnt += Number(isPair(nextArr));
        s = rotate(nextArr);
    }
    return cnt;
}