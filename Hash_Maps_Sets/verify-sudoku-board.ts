function verifySudokuBoard(board: number[][]): boolean {
    const rowSets: Set<number>[] = Array.from({ length: 9 }, () => new Set<number>());
    const columnSets: Set<number>[] = Array.from({ length: 9}, () => new Set<number>());
    const subgridSets: Set<number>[][] = Array.from({ length: 3 }, () => 
        Array.from({ length: 3 }, () => new Set<number>())
    );

    for (let r = 0; r < 9; r ++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num === 0) continue;

            const subgridRow = Math.floor(r / 3);
            const subgridCol = Math.floor(c / 3);

            if (rowSets[r].has(num)) return false;
            if (columnSets[c]?.has(num)) return false;
            if (subgridSets[subgridRow][subgridCol].has(num)) return false;

            rowSets[r]?.add(num);
            columnSets[c]?.add(num);
            subgridSets[subgridRow][subgridCol].add(num);
        }
    }
    return true;
}

const validBoard = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const invalidBoard = [
  [5, 5, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];
console.log(verifySudokuBoard(validBoard)); 
console.log(verifySudokuBoard(invalidBoard));