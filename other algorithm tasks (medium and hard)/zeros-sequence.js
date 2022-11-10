// на входе - список из 0 и 1
// вернуть длину самой длинной последовательности нулей
// гарантируется, что есть и нули и единицы
// примеры:
// [0, 0, 0, 1, 0, 1] -> 3
// [1, 1, 0, 1] -> 1


// первое решение O(N) по памяти

const findZeroLength = (arr) => {
    let lengthCollection = []
    let count = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++
        }
        else {
            lengthCollection.push(count)
            count = 0
        }

    }
    lengthCollection.push(count)

    return Math.max(...lengthCollection)
}

// второе решение O(1) по памяти
const findZeroLength_2 = (arr) => {
    let count = 0
    let countZero = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++
            if (count > countZero) {
                countZero = count
            }
        }
        else {
            count = 0
        }

    }

    return countZero
}


console.log(findZeroLength_2([0, 0, 0, 1, 0, 1]))
console.log(findZeroLength_2([1, 1, 0, 1]))

console.log(findZeroLength_2([1, 1, 0, 1, 0, 0]))

console.log(findZeroLength_2([1, 1, 0, 0, 0, 0, 1, 0, 0]))

