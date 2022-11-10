// на входе строка
// найти длину самой длинной подстроки, в которой не повторяются символы
// пример:
// 'kekaabcd' -> 4 (подстрока abcd)
// 'abcdakakakek' -> 4 (подстрока abcd)
// 'aaabacd' -> 4 (подстрока bacd)

const findSubString = (string) => {
    let letterCollection = new Map()
    let maxWordLength = 0
    let wordLength = 0
    let start = 0

    for (let i = 0; i < string.length; i++) {
        if (letterCollection.has(string[i])) {
            start = (letterCollection.get(string[i]) + 1 > start)
            ? letterCollection.get(string[i]) + 1 
            : start
            letterCollection.set(string[i], i)
        }
        else {
            letterCollection.set(string[i], i)
            wordLength = i - start + 1
            if (wordLength > maxWordLength) {
                maxWordLength = wordLength
            }

        }
    }
    return maxWordLength
}

console.log(findSubString('abcaaaaaaabcdeaaaaaabc'))