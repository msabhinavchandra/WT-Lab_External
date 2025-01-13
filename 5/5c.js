
// option 1

function removeDuplicates(arr) {
  // Use a Set to store unique values, as it automatically removes duplicates
  return [...new Set(arr)];
}
// Example usage:
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
