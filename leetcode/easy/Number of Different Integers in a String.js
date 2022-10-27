// You are given a string word that consists of digits and lowercase English letters.
// You will replace every non-digit character with a space. 
// For example, "a123bc34d8ef34" will become " 123  34 8  34". 
// Notice that you are left with some integers that are separated by at least one space: "123", "34", "8", and "34".
// Return the number of different integers after performing the replacement operations on word.
// Two integers are considered different if their decimal representations without any leading zeros are different.

// Example 1:

// Input: word = "a123bc34d8ef34"
// Output: 3
// Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.
// Example 2:

// Input: word = "leet1234code234"
// Output: 2
// Example 3:

// Input: word = "a1b01c001"
// Output: 1
// Explanation: The three integers "1", "01", and "001" all represent the same integer because
// the leading zeros are ignored when comparing their decimal values.

/**
 * @param {string} word
 * @return {number}
 */
 function myParseInt (value) {
    let newValue = '';
    for (let i = 0; i<value.length; i++) {
        if (newValue.length > 0 || value.charAt(i) !== '0')
            newValue += value.charAt(i);
    }
    if (newValue.length === 0) {
        return '0'
    }
    return newValue;

}
let numDifferentIntegers = function(word) {
    const numbers = new Set(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']);
    const results = new Set();
    for (let i = 0; i < word.length; i++) {
        let value = '';
        while (numbers.has(word.charAt(i)) && i < word.length) {
            value += word.charAt(i);
            i++;
        }
        if (value.length > 0) {
            results.add(myParseInt(value))
        }
    }
    return results.size;
};