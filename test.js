
const DFS = (M, i, j, ROW, COL, count) => {

    if (i < 0 || j < 0 || i > (ROW - 1) || j > (COL - 1) || M[i][j] != 1) {
        return;
    }

    if (M[i][j] == 1) {

        M[i][j] = -1

        DFS(M, i + 1, j, ROW, COL, count);     
        DFS(M, i - 1, j, ROW, COL, count);     
        DFS(M, i, j + 1, ROW, COL, count);     
        DFS(M, i, j - 1, ROW, COL, count);     
    }
}



const findIsland = (M) => {
    let ROW = M.length
    let COL = M[0].length
    let count = 1

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (M[i][j] == 1) {
                DFS(M, i, j, ROW, COL, count);
            }
        }
    }

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (M[i][j] == -1) {
                DFS(M, i, j, ROW, COL, count);
                count++
            }
        }
    }
    return M
}

console.log(findIsland([[1, 1, 0, 0],
                        [1, 0, 1, 0],
                        [0, 1, 1, 0],
                        [0, 1, 0, 1],
                        [0, 0, 0, 1]]))






