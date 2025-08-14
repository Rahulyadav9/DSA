# 🚨 50 Last‑Moment DSA Solutions in JavaScript (.md) 🚨
Each solution aims for an optimal approach you can code in **< 40 minutes**. Copy/paste and practice!

---

## 🔹 Arrays

### 1) Two Sum
```js
// O(n) time, O(n) space
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
  return [];
}
```

### 2) Best Time to Buy and Sell Stock
```js
// Single pass O(n)
function maxProfit(prices) {
  let minP = Infinity, ans = 0;
  for (const p of prices) {
    minP = Math.min(minP, p);
    ans = Math.max(ans, p - minP);
  }
  return ans;
}
```

### 3) Maximum Subarray (Kadane’s)
```js
function maxSubArray(nums) {
  let best = nums[0], cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    best = Math.max(best, cur);
  }
  return best;
}
```

### 4) Merge Intervals
```js
function merge(intervals) {
  intervals.sort((a,b)=>a[0]-b[0]);
  const res = [];
  for (const it of intervals) {
    if (!res.length || res[res.length-1][1] < it[0]) res.push(it.slice());
    else res[res.length-1][1] = Math.max(res[res.length-1][1], it[1]);
  }
  return res;
}
```

### 5) Product of Array Except Self
```js
function productExceptSelf(nums) {
  const n = nums.length, res = Array(n).fill(1);
  let pref = 1;
  for (let i = 0; i < n; i++) { res[i] = pref; pref *= nums[i]; }
  let suf = 1;
  for (let i = n - 1; i >= 0; i--) { res[i] *= suf; suf *= nums[i]; }
  return res;
}
```

---

## 🔹 Strings

### 6) Valid Palindrome
```js
function isPalindrome(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g,'');
  let l = 0, r = s.length - 1;
  while (l < r) if (s[l++] !== s[r--]) return false;
  return true;
}
```

### 7) Longest Substring Without Repeating Characters
```js
function lengthOfLongestSubstring(s) {
  const pos = new Map();
  let l = 0, ans = 0;
  for (let r = 0; r < s.length; r++) {
    if (pos.has(s[r])) l = Math.max(l, pos.get(s[r]) + 1);
    pos.set(s[r], r);
    ans = Math.max(ans, r - l + 1);
  }
  return ans;
}
```

### 8) Group Anagrams
```js
function groupAnagrams(strs) {
  const m = new Map();
  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!m.has(key)) m.set(key, []);
    m.get(key).push(s);
  }
  return [...m.values()];
}
```

### 9) Longest Palindromic Substring
```js
function longestPalindrome(s) {
  if (!s) return "";
  let start = 0, end = 0;
  const expand = (L,R)=>{
    while (L>=0 && R<s.length && s[L]===s[R]) { L--; R++; }
    return [L+1, R-1];
  };
  for (let i=0;i<s.length;i++){
    let [l1,r1]=expand(i,i), [l2,r2]=expand(i,i+1);
    if (r1-l1 > end-start){ start=l1; end=r1; }
    if (r2-l2 > end-start){ start=l2; end=r2; }
  }
  return s.slice(start,end+1);
}
```

### 10) Valid Parentheses
```js
function isValid(s) {
  const st = [], pairs = {')':'(',']':'[','}':'{'};
  for (const ch of s) {
    if (ch in pairs) { if (!st.length || st.pop() !== pairs[ch]) return false; }
    else st.push(ch);
  }
  return st.length === 0;
}
```

---

## 🔹 Linked List

```js
class ListNode {
  constructor(val, next=null){ this.val = val; this.next = next; }
}
```

### 11) Reverse Linked List
```js
function reverseList(head) {
  let prev = null, cur = head;
  while (cur) { const nxt = cur.next; cur.next = prev; prev = cur; cur = nxt; }
  return prev;
}
```

### 12) Merge Two Sorted Lists
```js
function mergeTwoLists(l1, l2) {
  const dummy = new ListNode(0); let cur = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) { cur.next = l1; l1 = l1.next; }
    else { cur.next = l2; l2 = l2.next; }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return dummy.next;
}
```

### 13) Linked List Cycle Detection
```js
function hasCycle(head) {
  let s=head,f=head;
  while (f && f.next){ s=s.next; f=f.next.next; if (s===f) return true; }
  return false;
}
```

### 14) Remove Nth Node From End
```js
function removeNthFromEnd(head, n) {
  const dummy = new ListNode(0, head);
  let fast = dummy, slow = dummy;
  for (let i = 0; i < n; i++) fast = fast.next;
  while (fast.next) { fast = fast.next; slow = slow.next; }
  slow.next = slow.next.next;
  return dummy.next;
}
```

### 15) Add Two Numbers (Linked List)
```js
function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0); let cur = dummy, carry = 0;
  while (l1 || l2 || carry) {
    const sum = (l1?l1.val:0) + (l2?l2.val:0) + carry;
    carry = Math.floor(sum/10);
    cur.next = new ListNode(sum%10); cur = cur.next;
    if (l1) l1 = l1.next; if (l2) l2 = l2.next;
  }
  return dummy.next;
}
```

---

## 🔹 Stacks & Queues

### 16) Min Stack
```js
class MinStack {
  constructor(){ this.st=[]; this.min=[]; }
  push(x){ this.st.push(x); this.min.push(this.min.length?Math.min(this.min[this.min.length-1],x):x); }
  pop(){ this.min.pop(); return this.st.pop(); }
  top(){ return this.st[this.st.length-1]; }
  getMin(){ return this.min[this.min.length-1]; }
}
```

### 17) Implement Queue using Stacks
```js
class MyQueue{
  constructor(){ this.in=[]; this.out=[]; }
  push(x){ this.in.push(x); }
  _shift(){ if(!this.out.length) while(this.in.length) this.out.push(this.in.pop()); }
  pop(){ this._shift(); return this.out.pop(); }
  peek(){ this._shift(); return this.out[this.out.length-1]; }
  empty(){ return !this.in.length && !this.out.length; }
}
```

### 18) Valid Parentheses (Stack)
```js
// same as #10 using stack
```

### 19) Daily Temperatures
```js
function dailyTemperatures(T) {
  const n=T.length, res=Array(n).fill(0), st=[];
  for (let i=0;i<n;i++){
    while (st.length && T[i] > T[st[st.length-1]]) {
      const j = st.pop(); res[j] = i - j;
    }
    st.push(i);
  }
  return res;
}
```

### 20) Sliding Window Maximum
```js
function maxSlidingWindow(nums, k) {
  const dq=[]; const res=[];
  for (let i=0;i<nums.length;i++){
    if (dq.length && dq[0] <= i-k) dq.shift();
    while (dq.length && nums[dq[dq.length-1]] <= nums[i]) dq.pop();
    dq.push(i);
    if (i >= k-1) res.push(nums[dq[0]]);
  }
  return res;
}
```

---

## 🔹 Binary Trees

```js
class TreeNode {
  constructor(val, left=null, right=null){ this.val=val; this.left=left; this.right=right; }
}
```

### 21) Maximum Depth of Binary Tree
```js
function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```

### 22) Symmetric Tree
```js
function isSymmetric(root) {
  const isMir = (a,b)=>{
    if(!a||!b) return a===b;
    return a.val===b.val && isMir(a.left,b.right) && isMir(a.right,b.left);
  };
  return isMir(root, root);
}
```

### 23) Binary Tree Level Order Traversal
```js
function levelOrder(root) {
  if (!root) return [];
  const q=[root], res=[];
  while (q.length){
    const size=q.length, cur=[];
    for (let i=0;i<size;i++){
      const n=q.shift(); cur.push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);
    }
    res.push(cur);
  }
  return res;
}
```

### 24) Lowest Common Ancestor (BST or BT)
```js
// For Binary Search Tree (BST)
function lowestCommonAncestorBST(root, p, q){
  while (root){
    if (p.val < root.val && q.val < root.val) root = root.left;
    else if (p.val > root.val && q.val > root.val) root = root.right;
    else return root;
  }
  return null;
}
// For Binary Tree
function lowestCommonAncestorBT(root, p, q){
  if (!root || root===p || root===q) return root;
  const L = lowestCommonAncestorBT(root.left, p, q);
  const R = lowestCommonAncestorBT(root.right, p, q);
  if (L && R) return root;
  return L || R;
}
```

### 25) Diameter of Binary Tree
```js
function diameterOfBinaryTree(root) {
  let ans = 0;
  const depth = (n)=>{
    if (!n) return 0;
    const l = depth(n.left), r = depth(n.right);
    ans = Math.max(ans, l + r);
    return 1 + Math.max(l, r);
  };
  depth(root);
  return ans;
}
```

---

## 🔹 Binary Search

### 26) Binary Search (Basic)
```js
function binarySearch(nums, target){
  let l=0, r=nums.length-1;
  while (l<=r){
    const m = l + ((r-l)>>1);
    if (nums[m]===target) return m;
    if (nums[m] < target) l = m+1; else r = m-1;
  }
  return -1;
}
```

### 27) Search in Rotated Sorted Array
```js
function searchRotated(nums, target){
  let l=0,r=nums.length-1;
  while(l<=r){
    const m=l+((r-l)>>1);
    if(nums[m]===target) return m;
    if(nums[l] <= nums[m]){
      if(nums[l] <= target && target < nums[m]) r=m-1; else l=m+1;
    }else{
      if(nums[m] < target && target <= nums[r]) l=m+1; else r=m-1;
    }
  }
  return -1;
}
```

### 28) Find Minimum in Rotated Sorted Array
```js
function findMin(nums){
  let l=0,r=nums.length-1;
  while(l<r){
    const m=l+((r-l)>>1);
    if(nums[m] > nums[r]) l=m+1; else r=m;
  }
  return nums[l];
}
```

### 29) First Bad Version
```js
// given isBadVersion API
function solution(isBadVersion){
  return function(n){
    let l=1, r=n;
    while(l<r){
      const m = l + ((r-l)>>1);
      if(isBadVersion(m)) r=m; else l=m+1;
    }
    return l;
  }
}
```

### 30) Median of Two Sorted Arrays
```js
function findMedianSortedArrays(A, B){
  if (A.length > B.length) return findMedianSortedArrays(B, A);
  let m=A.length, n=B.length, half=((m+n)>>1);
  let l=0, r=m;
  while (true){
    const i = (l+r)>>1;     // cut in A
    const j = half - i;     // cut in B
    const Aleft = i>0?A[i-1]:-Infinity;
    const Aright = i<m?A[i]:Infinity;
    const Bleft = j>0?B[j-1]:-Infinity;
    const Bright = j<n?B[j]:Infinity;
    if (Aleft <= Bright && Bleft <= Aright){
      if ((m+n)%2) return Math.min(Aright, Bright);
      return (Math.max(Aleft,Bleft) + Math.min(Aright,Bright))/2;
    } else if (Aleft > Bright) r = i - 1;
    else l = i + 1;
  }
}
```

---

## 🔹 Recursion & Backtracking

### 31) Subsets
```js
function subsets(nums){
  const res=[[]];
  for (const x of nums){
    const add = res.map(a=>a.concat(x));
    res.push(...add);
  }
  return res;
}
```

### 32) Combination Sum
```js
function combinationSum(candidates, target){
  candidates.sort((a,b)=>a-b);
  const res=[], path=[];
  const dfs=(i, sum)=>{
    if (sum===target){ res.push(path.slice()); return; }
    if (sum>target || i===candidates.length) return;
    // choose
    path.push(candidates[i]);
    dfs(i, sum + candidates[i]);
    path.pop();
    // skip
    dfs(i+1, sum);
  };
  dfs(0,0);
  return res;
}
```

### 33) Permutations
```js
function permute(nums){
  const res=[];
  const backtrack=(i)=>{
    if(i===nums.length){ res.push(nums.slice()); return; }
    for(let j=i;j<nums.length;j++){
      [nums[i],nums[j]]=[nums[j],nums[i]];
      backtrack(i+1);
      [nums[i],nums[j]]=[nums[j],nums[i]];
    }
  };
  backtrack(0);
  return res;
}
```

### 34) Word Search
```js
function exist(board, word){
  const m=board.length, n=board[0].length;
  const dirs=[[1,0],[-1,0],[0,1],[0,-1]];
  const dfs=(r,c,k)=>{
    if (k===word.length) return true;
    if (r<0||c<0||r>=m||c>=n||board[r][c]!==word[k]) return false;
    const tmp=board[r][c]; board[r][c]='#';
    for(const [dr,dc] of dirs) if(dfs(r+dr,c+dc,k+1)) { board[r][c]=tmp; return true; }
    board[r][c]=tmp; return false;
  };
  for (let i=0;i<m;i++) for (let j=0;j<n;j++) if (dfs(i,j,0)) return true;
  return false;
}
```

### 35) N-Queens
```js
function solveNQueens(n){
  const cols=new Set(), d1=new Set(), d2=new Set(), res=[], cur=Array(n).fill().map(()=>'.'.repeat(n).split(''));
  const backtrack=(r)=>{
    if(r===n){ res.push(cur.map(row=>row.join(''))); return; }
    for(let c=0;c<n;c++){
      if(cols.has(c)||d1.has(r-c)||d2.has(r+c)) continue;
      cols.add(c); d1.add(r-c); d2.add(r+c); cur[r][c]='Q';
      backtrack(r+1);
      cols.delete(c); d1.delete(r-c); d2.delete(r+c); cur[r][c]='.';
    }
  };
  backtrack(0);
  return res;
}
```

---

## 🔹 Graphs

### 36) Number of Islands
```js
function numIslands(grid){
  if(!grid.length) return 0;
  const m=grid.length,n=grid[0].length;
  const dfs=(r,c)=>{
    if(r<0||c<0||r>=m||c>=n||grid[r][c]!=='1') return;
    grid[r][c]='0';
    dfs(r+1,c); dfs(r-1,c); dfs(r,c+1); dfs(r,c-1);
  };
  let count=0;
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) if(grid[i][j]==='1'){ count++; dfs(i,j); }
  return count;
}
```

### 37) Clone Graph
```js
function cloneGraph(node){
  if (!node) return null;
  const map=new Map();
  const dfs=(n)=>{
    if (map.has(n)) return map.get(n);
    const copy={ val:n.val, neighbors:[] };
    map.set(n, copy);
    for (const nei of n.neighbors) copy.neighbors.push(dfs(nei));
    return copy;
  };
  return dfs(node);
}
```

### 38) Course Schedule
```js
function canFinish(numCourses, prerequisites){
  const adj=Array.from({length:numCourses},()=>[]);
  const indeg=Array(numCourses).fill(0);
  for(const [a,b] of prerequisites){ adj[b].push(a); indeg[a]++; }
  const q=[], order=[];
  for(let i=0;i<numCourses;i++) if(indeg[i]===0) q.push(i);
  while(q.length){
    const u=q.shift(); order.push(u);
    for(const v of adj[u]) if(--indeg[v]===0) q.push(v);
  }
  return order.length===numCourses;
}
```

### 39) Rotten Oranges
```js
function orangesRotting(grid){
  const m=grid.length, n=grid[0].length;
  const q=[]; let fresh=0, minutes=0;
  for(let i=0;i<m;i++) for(let j=0;j<n;j++){
    if(grid[i][j]===2) q.push([i,j]);
    if(grid[i][j]===1) fresh++;
  }
  const dirs=[[1,0],[-1,0],[0,1],[0,-1]];
  while(q.length && fresh){
    const size=q.length; minutes++;
    for(let s=0;s<size;s++){
      const [r,c]=q.shift();
      for(const [dr,dc] of dirs){
        const nr=r+dr, nc=c+dc;
        if(nr>=0&&nc>=0&&nr<m&&nc<n&&grid[nr][nc]===1){
          grid[nr][nc]=2; fresh--; q.push([nr,nc]);
        }
      }
    }
  }
  return fresh? -1 : minutes;
}
```

### 40) Pacific Atlantic Water Flow
```js
function pacificAtlantic(heights){
  const m=heights.length, n=heights[0].length;
  const pac=Array.from({length:m},()=>Array(n).fill(false));
  const atl=Array.from({length:m},()=>Array(n).fill(false));
  const dfs=(r,c,vis,prev)=>{
    if(r<0||c<0||r>=m||c>=n||vis[r][c]||heights[r][c] < prev) return;
    vis[r][c]=true;
    dfs(r+1,c,vis,heights[r][c]); dfs(r-1,c,vis,heights[r][c]);
    dfs(r,c+1,vis,heights[r][c]); dfs(r,c-1,vis,heights[r][c]);
  };
  for(let i=0;i<m;i++){ dfs(i,0,pac,-Infinity); dfs(i,n-1,atl,-Infinity); }
  for(let j=0;j<n;j++){ dfs(0,j,pac,-Infinity); dfs(m-1,j,atl,-Infinity); }
  const res=[];
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) if(pac[i][j]&&atl[i][j]) res.push([i,j]);
  return res;
}
```

---

## 🔹 Heaps & Priority Queue

### 41) Kth Largest Element in an Array
```js
// Quickselect average O(n)
function findKthLargest(nums, k){
  k = nums.length - k;
  const part=(l,r)=>{
    const pivot=nums[r]; let i=l;
    for(let j=l;j<r;j++) if(nums[j] <= pivot) { [nums[i],nums[j]]=[nums[j],nums[i]]; i++; }
    [nums[i],nums[r]]=[nums[r],nums[i]]; return i;
  };
  let l=0,r=nums.length-1;
  while(true){
    const p=part(l,r);
    if(p===k) return nums[p];
    if(p<k) l=p+1; else r=p-1;
  }
}
```

### 42) Top K Frequent Elements
```js
function topKFrequent(nums, k){
  const freq=new Map();
  for(const x of nums) freq.set(x,(freq.get(x)||0)+1);
  const buckets=Array(nums.length+1).fill(0).map(()=>[]);
  for(const [num,count] of freq) buckets[count].push(num);
  const res=[];
  for(let c=buckets.length-1;c>=0 && res.length<k;c--) res.push(...buckets[c]);
  return res.slice(0,k);
}
```

### 43) Merge K Sorted Lists
```js
function mergeKLists(lists){
  const arr=[];
  for(const head of lists){
    let p=head; while(p){ arr.push(p.val); p=p.next; }
  }
  arr.sort((a,b)=>a-b);
  const dummy=new ListNode(0); let cur=dummy;
  for(const v of arr){ cur.next=new ListNode(v); cur=cur.next; }
  return dummy.next;
}
// (Alt: min-heap for O(N log k) if needed)
```

### 44) Find Median from Data Stream
```js
class MedianFinder{
  constructor(){ this.small=[]; this.large=[]; } // small: max-heap via negative, large: min-heap
  _pushMax(h,x){ h.push(-x); this._siftUp(h); }
  _pushMin(h,x){ h.push(x); this._siftUp(h); }
  _popMax(h){ const v=-this._pop(h); return v; }
  _popMin(h){ return this._pop(h); }
  _topMax(h){ return -h[0]; }
  _topMin(h){ return h[0]; }
  _pop(h){ const n=h.length-1; [h[0],h[n]]=[h[n],h[0]]; const v=h.pop(); this._siftDown(h,0); return v; }
  _siftUp(h){ let i=h.length-1; while(i>0){ const p=(i-1)>>1; if((h===this.large? h[i]>=h[p] : h[i]<=h[p])) break; [h[i],h[p]]=[h[p],h[i]]; i=p; } }
  _siftDown(h,i){ const n=h.length; while(true){ let l=i*2+1, r=i*2+2, b=i;
      if (h===this.large){ if(l<n && h[l]<h[b]) b=l; if(r<n && h[r]<h[b]) b=r; }
      else { if(l<n && h[l]>h[b]) b=l; if(r<n && h[r]>h[b]) b=r; }
      if(b===i) break; [h[i],h[b]]=[h[b],h[i]]; i=b; } }
  addNum(num){
    if(!this.small.length || num <= this._topMax(this.small)) this._pushMax(this.small,num);
    else this._pushMin(this.large,num);
    if(this.small.length > this.large.length + 1) this._pushMin(this.large, this._popMax(this.small));
    if(this.large.length > this.small.length) this._pushMax(this.small, this._popMin(this.large));
  }
  findMedian(){
    if(this.small.length > this.large.length) return this._topMax(this.small);
    return (this._topMax(this.small) + this._topMin(this.large))/2;
  }
}
```

### 45) Sliding Window Median
```js
// Multiset via two heaps with lazy deletion
function medianSlidingWindow(nums, k){
  const small=[], large=[], del=new Map(); let smallSize=0, largeSize=0;
  const add=(x)=>{
    if(!small.length || x <= -small[0]) pushMax(small,x), smallSize++;
    else pushMin(large,x), largeSize++;
    rebalance();
  };
  const remove=(x)=>{
    del.set(x, (del.get(x)||0)+1);
    if (x <= -small[0]) smallSize--; else largeSize--;
    while(small.length && del.get(-small[0])) { const v=-popMax(small); del.set(v, del.get(v)-1); }
    while(large.length && del.get(large[0])) { const v=popMin(large); del.set(v, del.get(v)-1); }
    rebalance();
  };
  const rebalance=()=>{
    if (smallSize > largeSize + 1){ const v = -popMax(small); smallSize--; pushMin(large,v); largeSize++; }
    if (largeSize > smallSize){ const v = popMin(large); largeSize--; pushMax(small,v); smallSize++; }
  };
  const getMedian=()=> smallSize>largeSize ? -small[0] : (-small[0]+large[0])/2;
  // heap helpers
  function pushMax(h,x){ h.push(-x); siftUpMax(h); }
  function pushMin(h,x){ h.push(x); siftUpMin(h); }
  function popMax(h){ swap(h,0,h.length-1); const v=h.pop(); siftDownMax(h,0); return v; }
  function popMin(h){ swap(h,0,h.length-1); const v=h.pop(); siftDownMin(h,0); return v; }
  function swap(h,i,j){ const t=h[i]; h[i]=h[j]; h[j]=t; }
  function siftUpMax(h){ let i=h.length-1; while(i>0){ const p=(i-1)>>1; if(h[i]>=h[p]) break; swap(h,i,p); i=p; } }
  function siftUpMin(h){ let i=h.length-1; while(i>0){ const p=(i-1)>>1; if(h[i]>=h[p]) break; swap(h,i,p); i=p; } }
  function siftDownMax(h,i){ const n=h.length; while(true){ let l=i*2+1,r=i*2+2,b=i; if(l<n && h[l]<h[b]) b=l; if(r<n && h[r]<h[b]) b=r; if(b===i) break; swap(h,i,b); i=b; } }
  function siftDownMin(h,i){ const n=h.length; while(true){ let l=i*2+1,r=i*2+2,b=i; if(l<n && h[l]<h[b]) b=l; if(r<n && h[r]<h[b]) b=r; if(b===i) break; swap(h,i,b); i=b; } }
  const res=[];
  for(let i=0;i<nums.length;i++){
    add(nums[i]);
    if(i>=k-1){
      res.push(getMedian());
      remove(nums[i-k+1]);
    }
  }
  return res;
}
```

---

## 🔹 Dynamic Programming

### 46) Climbing Stairs
```js
function climbStairs(n){
  if(n<=2) return n;
  let a=1,b=2;
  for(let i=3;i<=n;i++){ [a,b]=[b,a+b]; }
  return b;
}
```

### 47) Coin Change
```js
function coinChange(coins, amount){
  const dp=Array(amount+1).fill(Infinity); dp[0]=0;
  for(const c of coins) for(let a=c;a<=amount;a++) dp[a]=Math.min(dp[a], dp[a-c]+1);
  return dp[amount]===Infinity? -1 : dp[amount];
}
```

### 48) Longest Increasing Subsequence
```js
function lengthOfLIS(nums){
  const tails=[];
  for(const x of nums){
    let l=0,r=tails.length;
    while(l<r){
      const m=(l+r)>>1;
      if(tails[m] < x) l=m+1; else r=m;
    }
    tails[l]=x;
  }
  return tails.length;
}
```

### 49) Word Break
```js
function wordBreak(s, wordDict){
  const set=new Set(wordDict), n=s.length, dp=Array(n+1).fill(false); dp[0]=true;
  for(let i=1;i<=n;i++){
    for(let j=0;j<i;j++){
      if(dp[j] && set.has(s.slice(j,i))){ dp[i]=true; break; }
    }
  }
  return dp[n];
}
```

### 50) Maximum Product Subarray
```js
function maxProduct(nums){
  let curMax=nums[0], curMin=nums[0], ans=nums[0];
  for(let i=1;i<nums.length;i++){
    const x=nums[i];
    if(x<0) [curMax,curMin]=[curMin,curMax];
    curMax=Math.max(x, curMax*x);
    curMin=Math.min(x, curMin*x);
    ans=Math.max(ans, curMax);
  }
  return ans;
}
```
