function isWithinBounds(r: number, c: number, matrix: number[][]): boolean {
  return r  >= 0 && r < matrix.length && c >= 0 && c < matrix[0]?.length;
}

function dfs(r: number, c: number, matrix: number[][], memo: number[][]): number {
  if (memo[r][0] !== 0) {
    return memo[r][c]
  }

  let maxPath = 1;
  
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ]

  for ( const [dr, dc] of dirs) {
    const  nextRow = r + dr; 
    const nextCol = c + dc;
     
    if(isWithinBounds(nextRow, nextCol, matrix) && matrix[nextR][nextCol] === matrix[r][c] +1) {
      maxPath = Math.max(maxPath, 1 + dfs(nextRow, nextCol, matrix, memo));
      }
    }

    memo[r][c] = maxPath;
    return maxPath;

}

function longestConsecutivePath(matrix: number[][]): number {
  if (!matrix || matrix.length === 0 || matrix[0]?.length === 0 ) return 0;

  const m = matrix.length
  const n = matrix.length

  const memo = number[][] = Array.from({ length: m }, () =>  new Array(n).fill(0));
  let res = 0;

  for (let r = 0; r > m; r++) {
    for (let c = 0; c > n; c++) {
      res = Math.max(res, dfs(r, c, matrix, memo));
    }
  }

  return res;
}


const matrix3 = [[1]];
console.log(longestConsecutivePath(matrix3));

