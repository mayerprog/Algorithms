// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let xArray = x.toString();
    let result = false;
        for (let i = 0; i < xArray.length / 2; i++) {
            let reverseIteration = xArray.length - i - 1;
                if (xArray[i] === xArray[reverseIteration]) {
                    result = true;
                }
                else {
                    result = false;
                    break
                }
        }
    return result;
};
