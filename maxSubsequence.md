const arr = [10, 9, 2, 5, 3, 7, 101, 18];
/*
  [
  [10, 101], 
  [9, 101], 
  [2, 5, 7, 101, 18],  max increasing subsequence array
  [5, 7, 101, 18], 
  [3, 7, 101, 18],
  [7, 101, 18], 
  [101], 
  [18]
]

*/
```js
let newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr[i] = [arr[i]];
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] > newArr[i][newArr[i].length - 1]) {
      newArr[i].push(arr[j]);
    }
  }
}

// Find longest increasing sequence
let longest = newArr.reduce((a, b) => (a.length > b.length ? a : b));

console.log("All subsequences:", newArr);
console.log("Longest subsequence:", longest);
```
