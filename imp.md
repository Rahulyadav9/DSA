const input = ["eat", "tea", "tan", "ate", "nat", "bat"] 
// output::: [ // ["eat", "tea", "ate"], // ["tan", "nat"], // ["bat"] // ];

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(words) {
  const map = new Map();

  for (let word of words) {
    // Sort characters → unique key for anagrams
    const key = word.split('').sort().join('');
    
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }

  return Array.from(map.values());
}

console.log(groupAnagrams(input));
