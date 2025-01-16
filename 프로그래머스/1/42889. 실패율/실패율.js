function solution(N, stages) {
  const processedStages = new Array(N + 1).fill(0);
  stages.forEach((stage) => processedStages[stage - 1]++);

  // [index, ratio] 를 원소로 가지는 2차원 배열
  const fRatio = processedStages.map((s, i) => {
    const sum = processedStages.slice(i).reduce((acc, cur) => acc + cur, 0); // TODO: 시간 복잡도 줄이기 - O(N^2) -> O(M + N * logN)
    return [i + 1, s / sum];
  });

  fRatio.pop(); // 마지막 스테이지를 클리어한 사람의 실패율을 제거함.

  return fRatio.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}
