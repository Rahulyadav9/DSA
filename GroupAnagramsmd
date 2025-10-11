# Group Anagrams in JavaScript

## Problem
Given an array of strings, group the anagrams together.

### Example
```js
Input:  ["eat", "tea", "tan", "ate", "nat", "bat"]

Output: [
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
function groupAnagrams(words) {
  const map = {}

  for (let word of words) {
    // Sort characters → unique key for anagrams
    const key = word.split('').sort().join('');
    
    if (!map[key]) {
      map[key] =  [];
    }
    map[key].push(word);
  }
  console.log(map)
  return Object.values(map);
}

console.log(groupAnagrams(input));
