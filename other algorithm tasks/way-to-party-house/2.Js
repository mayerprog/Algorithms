const fs = require('fs');

let data = fs.readFileSync('01 (2).txt', 'utf8');
let testCase = data.split(', ')

// console.log(testCase[0])

const findClub = (testCase) => {

    let allSteps = new Set()

    // for (let i = 0; i < testCase.length; i+2) {
        let stepInt = parseInt(testCase[0], 16)
        if (testCase[0][0] === 'L') {
            allSteps.add({x: -stepInt, y: 0})
        }
        else {
            allSteps.add({x: stepInt, y: 0})
        }
    // }

    return allSteps
}

console.log(findClub(testCase))

