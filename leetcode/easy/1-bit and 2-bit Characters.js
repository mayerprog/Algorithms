// We have two special characters:

// The first character can be represented by one bit 0.
// The second character can be represented by two bits (10 or 11).
// Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

// Example 1:

// Input: bits = [1,0,0]
// Output: true
// Explanation: The only way to decode it is two-bit character and one-bit character.
// So the last character is one-bit character.
// Example 2:

// Input: bits = [1,1,1,0]
// Output: false
// Explanation: The only way to decode it is two-bit character and two-bit character.
// So the last character is not one-bit character.

/**
 * @param {number[]} bits
 * @return {boolean}
 */
 let isOneBitCharacter = function(bits) {
    let mi_reshili;
    for (let i = 0; i<bits.length; i++) {
      while (bits[i] === 1) {
        i+=2;
        mi_reshili = false;
      }
      if (bits[i] === 0) {
        mi_reshili = true;
      }
    };
  return mi_reshili;
  
  }