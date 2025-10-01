```
const arr = [0,1,2,0,1,2,2,0,1,2];

let low = 0, mid = 0, high = arr.length - 1;

while (mid <= high) {
    if (arr[mid] === 0) {
        [arr[low], arr[mid]] = [arr[mid], arr[low]];
        low++;
        mid++;
    } else if (arr[mid] === 1) {
        mid++;
    } else { // arr[mid] === 2
        [arr[mid], arr[high]] = [arr[high], arr[mid]];
        high--;
    }
}

console.log(arr);
// [0, 0, 0, 1, 1, 1, 2, 2, 2, 2]
```
