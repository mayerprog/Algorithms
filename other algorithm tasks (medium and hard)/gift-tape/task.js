const fs = require('fs');

let data = fs.readFileSync('02.txt', 'utf8');
let testCase = data.split('\n')

const tapeFoot = (testCase) => {
    let perimeter
    let cubicFoot
    let interimResult = []
    let result

    let splittedTestCase = testCase.map(el => el.split('x').map(string => parseInt(string, 10)))
    splittedTestCase = splittedTestCase.map(item => item.sort((a, b) => a - b))
    perimeter = splittedTestCase.map(arr => (arr[0] + arr[1]) * 2)
    cubicFoot = splittedTestCase.map(arr => arr.reduce((sum, current) => sum * current))

    for (let i = 0; i < perimeter.length; i++) {
        let dataSum = perimeter[i] + cubicFoot[i]
        interimResult.push(dataSum)
    }

    result = interimResult.reduce((sum, current) => {
        return sum + current
    }, 0)

    return result
}

console.log(tapeFoot(testCase))
//TESTS PASSED