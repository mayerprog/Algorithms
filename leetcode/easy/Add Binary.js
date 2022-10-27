// Given two binary strings a and b, return their sum as a binary string.
// Example 1:

// Input: a = "11", b = "1"
// Output: "100"
// Example 2:

// Input: a = "1010", b = "1011"
// Output: "10101"
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

 var addBinary = function(a, b) {
    var sumLen = Math.max(a.length, b.length) + 1;
    var vUme = 0;
    let arrayResult = [];

    for(let i = 0; i < sumLen; i++) {
        let digit_a = 0;
        if (i < a.length)
            digit_a = parseInt(a[a.length - i - 1]);
        let digit_b = 0;
        if (i < b.length)
            digit_b = parseInt(b[b.length - i - 1]);
        let curSum = digit_a + digit_b + vUme;
        // First digit of sum
        if (curSum < 2)
            vUme = 0
        else
            vUme = 1
        // Second digit of sum
        if (curSum % 2 == 0)
            arrayResult.unshift(0)
        else
            arrayResult.unshift(1)
    }
    
    if (arrayResult[0] == 0)
        arrayResult.splice(0, 1);
    result = arrayResult.join('')
    return result;
};