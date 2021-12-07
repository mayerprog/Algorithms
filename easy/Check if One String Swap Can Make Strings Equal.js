// You are given two strings s1 and s2 of equal length. 
// A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
// Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. 
// Otherwise, return false.

// Example 1:

// Input: s1 = "bank", s2 = "kanb"
// Output: true
// Explanation: For example, swap the first character with the last character of s2 to make "bank".
// Example 2:

// Input: s1 = "attack", s2 = "defend"
// Output: false
// Explanation: It is impossible to make them equal with one string swap.
// Example 3:

// Input: s1 = "kelb", s2 = "kelb"
// Output: true
// Explanation: The two strings are already equal, so no string swap operation is required.
// Example 4:

// Input: s1 = "abcd", s2 = "dcba"
// Output: false

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 let areAlmostEqual = function(s1, s2) {
    let word1 = s1.split('');
    let word2 = s2.split('');
    let checkResult = []; //массив, в которые будем класть результаты условия
    let counter = 0;
      for (let i = 0; i<word1.length; i++) {
        if (word1[i] !== word2[i] && word2.includes(word1[i])) {
          checkResult.push(counter);
        }
      }
      if (checkResult.length === 2 || s1 === s2) {
        return true
    }
      else {
        return false
      }
};