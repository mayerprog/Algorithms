const fs = require('fs');

let data = fs.readFileSync('04.txt', 'utf8');
let testCase = data.split('\n').map(item => item.split(' '))

const compareWords = (arr) => {
    let setForCompare = new Set()
    let isAnagram = false
    for(let i = 0; i < arr.length; i++) {
        if (setForCompare.has(arr[i])) {
            isAnagram = true
            break
        } 
        setForCompare.add(arr[i])
    }
    return isAnagram
}

const findPassword = (testCase) => {
    let sortedWords
    let noAnagrams = []
    
    for (let i = 0; i < testCase.length; i++) {
        for (let j = 0; j < testCase[i].length; j++) {
            sortedWords = testCase[i].map(el => el.split('').sort().join(''))
            if(!compareWords(sortedWords)){
                noAnagrams.push(sortedWords)
                break
            } 
        }
    }
    return noAnagrams.length
}

console.log(findPassword(testCase))

