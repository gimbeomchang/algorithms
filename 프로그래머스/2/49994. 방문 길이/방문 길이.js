const isValidCoordinate = ({x, y}) => {
    return -5 <= x && x <= 5 && -5 <= y && y <= 5;
}

const CMD = {
    U: { x: 0, y: 1 },
    D: { x: 0, y: -1 },
    R: { x: 1, y: 0 },
    L: { x: -1, y: 0 }
};

const solution = (dirs) => {
    const visited = new Set();
    const current = { x: 0, y: 0 };
    
    [...dirs].forEach((dir) => {
        const cmd = CMD[dir];
        const next = {
            x: current.x + cmd.x,
            y: current.y + cmd.y
        };
        
        if (isValidCoordinate(next)) {
            visited.add(`(${current.x}, ${current.y}) -> (${next.x}, ${next.y})`);
            visited.add(`(${next.x}, ${next.y}) -> (${current.x}, ${current.y})`);
            Object.assign(current, next);
        }
    })
    
    return visited.size / 2;
}