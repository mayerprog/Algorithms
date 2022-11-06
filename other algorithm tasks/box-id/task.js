const fs = require('fs');

let data = fs.readFileSync('02.txt', 'utf8');
let testCase = data.split('\n')

const findID = (testCase) => {
    let letterObj = {}
    let arrDuplicates = []
    let objToArr
    let onlyThree = []
    let onlyTwo = []
    arrTestCase = testCase.map(el => el.split(''))

    for (let i = 0; i < arrTestCase.length; i++) {
        for (const letter of arrTestCase[i]) {
            letterObj[letter] = letterObj[letter] ? letterObj[letter] + 1 : 1
        }
        arrDuplicates.push({...letterObj})
        letterObj = {}
    }
    objToArr = arrDuplicates.map(obj => Object.values(obj))
    objToArr = objToArr.map(arr => [...new Set(arr)]) 
    objToArr.filter(arr =>{
        if(arr.includes(2)) onlyTwo.push(2)
        if(arr.includes(3)) onlyThree.push(3)
    })
    
    return onlyThree.length * onlyTwo.length
}
// console.log(findID(['abcdef', 'bababc', 'abccde', 'abcccd', 'aabcdd', 'abcdee', 'ababab']))
console.log(findID(testCase))
//TESTS PASSED


