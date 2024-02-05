const numIslands = (grid) => {
  if (!grid || grid.length === 0) {
    return 0;
  }
  const numRows = grid.length;
  const numCols = grid[0].length;

    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row > numRows || col > numCols || grid[row][col] === "0") {
            return
        }
        grid[row][col] = 0;
        dfs(row + 1, col)
        dfs(row - 1, col)
        dfs(row, col + 1)
        dfs(row,col-1)
    }
    
  let count = 0;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
    }
    return count
};

const grid = [
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

const islandsCount = numIslands(grid);
console.log("Number of islands:", islandsCount);
