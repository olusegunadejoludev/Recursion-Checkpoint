function isPalindrome(word) {
  // Convert the word to lowercase (case-insensitive check)
  const lowercaseWord = word.toLowerCase();
  
  // Initialize counters for the start and end of the word
  let start = 0;
  let end = lowercaseWord.length - 1;
  
  // Iterate until the pointers meet in the middle
  while (start < end) {
      // Get characters at the pointers
      const startChar = lowercaseWord[start];
      const endChar = lowercaseWord[end];

      // If characters are not the same, it's not a palindrome
      if (startChar !== endChar) {
          return false;
      }
      
      // Move the pointers towards the center
      start++;
      end--;
  }
  
  // If the loop completes, the word is a palindrome
  return true;
}

// Example usage:
const testWord = "radar";
if (isPalindrome(testWord)) {
  console.log(`${testWord} is a palindrome.`);
} else {
  console.log(`${testWord} is not a palindrome.`);
}