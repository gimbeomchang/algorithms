const solution = (n, left, right) => {
    return [...new Array(right - left + 1)].map((_, i) => {
        const idx = left + i; // left ~ right 자르기 전의 원본 배열에서의 인덱스
        const row = Math.floor(idx / n);
        const col = idx % n;
        
        if (row >= col) return row + 1;
        else return col + 1;
    });
};
