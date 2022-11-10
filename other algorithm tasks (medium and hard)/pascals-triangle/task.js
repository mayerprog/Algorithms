const generate = (numRows) => {
    let output = [[1]]
    for (let i = 0; i < numRows - 1; i++) {
        let lastArray = output[output.length - 1]
        let row = [1]
        for (let j = 1; j < lastArray.length; j++) {
            row.push(lastArray[j] + lastArray[j - 1])
        }
        row.push(1)
        output.push(row)
    }
    let oneDArray = [].concat.apply([], output)
    oneDArray = oneDArray.map(arr => arr.toString().split(''))
    let count = 0
    for (let n = 0; n < oneDArray.length; n++) {
        for (let m = 0; m < oneDArray[n].length; m++) {
            count++
        }
    }
    return count
}

console.log(generate(1653))

