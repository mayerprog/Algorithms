// [[1, 1, 0, 0],
//  [1, 0, 1, 0],
//  [0, 1, 1, 0],
//  [0, 1, 0, 1],
//  [0, 0, 0, 1]]
// найти острова, соединенные цифрами 1 по вертикали и горизонтали(не по диагонали). 
// вернуть тот же двумерный массив, только все единицы заменить на другие цифры, в соответствии с нумерацией острова:
// [[1, 1, 0, 0],
//  [1, 0, 2, 0],
//  [0, 2, 2, 0],
//  [0, 2, 0, 3],
//  [0, 0, 0, 3]]

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

const DFS2 = (M, i, j, ROW, COL, count) => {

    if (i < 0 || j < 0 || i > (ROW - 1) || j > (COL - 1) || M[i][j] != -1) {
        return;
    }

    if (M[i][j] == -1) {

        M[i][j] = count

        DFS2(M, i + 1, j, ROW, COL, count);     
        DFS2(M, i - 1, j, ROW, COL, count);     
        DFS2(M, i, j + 1, ROW, COL, count);     
        DFS2(M, i, j - 1, ROW, COL, count);     
    }
}



const findIsland = (M) => {
    let ROW = M.length
    let COL = M[0].length
    let count = 1

    let newM = []

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (M[i][j] == 1) {
                DFS(M, i, j, ROW, COL);
            }
        }
    }

    for (let i = 0; i < ROW; i++) {
        for (let j = 0; j < COL; j++) {
            if (M[i][j] == -1) {
                DFS2(M, i, j, ROW, COL, count);
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






