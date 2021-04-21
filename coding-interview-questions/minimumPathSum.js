const minPathSum = (grid) => {

 let rows = grid.length;
 let cols = grid[0].length;

 // initialize dp table and filled with 0
 const dp = [...Array(rows)].map((e) => Array(cols).fill(0));

 dp[0][0] = grid[0][0]
 //console.log(dp)

 // first column
 for(let i = 1; i < rows; i++) {
    dp[i][0] = grid[i][0] + dp[i-1][0];
}
 console.log('column', dp)

 // first row
 for(let j = 1; j < cols; j++) {
     dp[0][j] = grid[0][j] + dp[0][j-1]
 }
 console.log('row', dp)

 // fill the rest of dp
 for(let i = 1; i < rows; i++) {
     for(let j = 1; j < cols; j++) {
         dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1])
     }
 }

 console.log('rest', dp)

 return dp[rows-1][cols-1]

}


console.log(minPathSum([[1,2,3],[4,5,6]]))