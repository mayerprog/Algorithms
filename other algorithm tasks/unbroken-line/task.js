const fs = require('fs');

let data = fs.readFileSync('05.txt', 'utf8');
let testCase = data.split('\n')

const findUnbroken = (testCase) => {
    for (let i = 0; i < testCase.length; i++) {
        for (let j = 0; j < testCase[i].length; j++) {
            return (testCase[i][j] + testCase[i][j+1]).typeOf()
        }
    }
}

console.log(findUnbroken(['qjhvhtzxzqqjkmpb']))