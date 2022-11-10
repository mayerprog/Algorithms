const fs = require('fs');

let data = fs.readFileSync('01 (1).txt', 'utf8');
let testCase = data.split('\n')

let result = 0;

const finalResult = (testCase) => {
    for (let i = 0; i < testCase.length; i++) {
            result += parseInt(testCase[i], 10)
        }
        return result
    }

console.log(finalResult(testCase))

// TESTS PASSED
