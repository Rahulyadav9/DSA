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
  const map = new Map();

  for (let word of words) {
    const key = word.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(input));
