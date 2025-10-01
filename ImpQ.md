# 🚨 Must Solve These 50 Last-Moment DSA Questions Before Your Interview 🚨  
Each question should be solved in **< 40 min (with code)**
solution: https://github.com/Rahulyadav9/DSA/blob/main/dsa_50_solutions_js.md
---

## 🔹 Arrays
1. Two Sum
   ```js
   Input: nums = [2,7,11,15], target = 9
   Output: [0,1]
    ```
2. Best Time to Buy and Sell Stock
    ```
       Input: prices = [7,1,5,3,6,4]
       Output: 5 (Buy on day 2 → 1, sell on day 5 → 6)
    ```
3. Maximum Subarray (Kadane’s Algorithm)  
   ```
      Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
      Output: 6 ([4,-1,2,1])
      
      Input: nums = [1]
      Output: 1
      
      Input: nums = [5,4,-1,7,8]
      Output: 23
   ```
4. Merge Intervals
   ```
       Examples:
       Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
       Output: [[1,6],[8,10],[15,18]]
       
       Input: intervals = [[1,4],[4,5]]
       Output: [[1,5]] 
   ```

5. Product of Array Except Self
   ```
     Input: nums = [1,2,3,4]
      Output: [24,12,8,6]
      
      Input: nums = [-1,1,0,-3,3]
      Output: [0,0,9,0,0]
   ```



## 🔹 Strings
6. Valid Palindrome
   ```
     Input: s = "A man, a plan, a canal: Panama"
     Output: true

     Input: s = "race a car"
     Output: false

     Input: s = " "
      Output: true
 
   ```

8. Longest Substring Without Repeating Characters
    ```
   Input: s = "abcabcbb"
   Output: 3
   Explanation: The answer is "abc".
   text
   Copy code
   Input: s = "bbbbb"
   Output: 1
   Explanation: The answer is "b".
   text
   Copy code
   Input: s = "pwwkew"
   Output: 3
   Explanation: The answer is "wke"
   ```
10. Group Anagrams
   ```
      Input: strs = ["eat","tea","tan","ate","nat","bat"]
      Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
      text
      Copy code
      Input: strs = [""]
      Output: [[""]]
      text
      Copy code
      Input: strs = ["a"]
      Output: [["a"]]
   ```
12. Longest Palindromic Substring
    ```
      Input: s = "babad"
      Output: "bab"
      Explanation: "aba" is also a valid answer.
      text
      Copy code
      Input: s = "cbbd"
      Output: "bb"
      text
      Copy code
      Input: s = "a"
      Output: "a"
    ```  
14. Valid Parentheses  
   ```
     Input: s = "()"
      Output: true
      text
      Copy code
      Input: s = "()[]{}"
      Output: true
      text
      Copy code
      Input: s = "(]"
      Output: false
      text
      Copy code
      Input: s = "([)]"
      Output: false
      text
      Copy code
      Input: s = "{[]}"
      Output: true
   ```
---

## 🔹 Linked List
11. Reverse Linked List
    ```
       Input: 1 → 2 → 3 → 4 → 5  
       Output: 5 → 4 → 3 → 2 → 1 
    ```
13. Merge Two Sorted Lists
   ```
       Input: l1 = 1 → 2 → 4, l2 = 1 → 3 → 4  
        Output: 1 → 1 → 2 → 3 → 4 → 4  
   ``` 
15. Linked List Cycle Detection
  ```
       Input: head = [3,2,0,-4], pos = 1 (tail connects to node index 1)  
      Output: true  
      
      Input: head = [1,2], pos = 0  
      Output: true  
      
      Input: head = [1], pos = -1  
      Output: false  
   ```  
17. Remove Nth Node From End
    ```
       Input: head = [1,2,3,4,5], n = 2  
       Output: [1,2,3,5] 
    ```
19. Add Two Numbers (Linked List)  
    ```
       Input: l1 = [2,4,3], l2 = [5,6,4]  
      Output: [7,0,8]  
      Explanation: 342 + 465 = 807
    ```
---

## 🔹 Stacks & Queues
16. Min Stack
    ```
       Input: ["MinStack","push","push","push","getMin","pop","top","getMin"]  
       [[],[-2],[0],[-3],[],[],[],[]]  
      Output: [null,null,null,null,-3,null,0,-2]
    ```
18. Implement Queue using Stacks
    ```
       Input:  
      ["MyQueue","push","push","peek","pop","empty"]  
      [[],[1],[2],[],[],[]]  
      Output: [null,null,null,1,1,false]
    ```
20. Valid Parentheses (Stack)
    ```
       Input: "()"  
      Output: true  
      
      Input: "()[]{}"  
      Output: true  
      
      Input: "(]"  
      Output: false 
    ```
22. Daily Temperatures
    ```
       Input: [73,74,75,71,69,72,76,73]  
      Output: [1,1,4,2,1,1,0,0]
    ```
24. Sliding Window Maximum  
    ```
       Input: nums = [1,3,-1,-3,5,3,6,7], k = 3  
      Output: [3,3,5,5,6,7]  
    ```
---

## 🔹 Binary Trees
21. Maximum Depth of Binary Tree  
22. Symmetric Tree  
23. Binary Tree Level Order Traversal  
24. Lowest Common Ancestor  
25. Diameter of Binary Tree  

---

## 🔹 Binary Search
26. Binary Search (Basic)  
27. Search in Rotated Sorted Array  
28. Find Minimum in Rotated Sorted Array  
29. First Bad Version  
30. Median of Two Sorted Arrays  

---

## 🔹 Recursion & Backtracking
31. Subsets  
32. Combination Sum  
33. Permutations  
34. Word Search  
35. N-Queens  

---

## 🔹 Graphs
36. Number of Islands  
37. Clone Graph  
38. Course Schedule  
39. Rotten Oranges  
40. Pacific Atlantic Water Flow  

---

## 🔹 Heaps & Priority Queue
41. Kth Largest Element in an Array  
42. Top K Frequent Elements  
43. Merge K Sorted Lists  
44. Find Median from Data Stream  
45. Sliding Window Median  

---

## 🔹 Dynamic Programming
46. Climbing Stairs  
47. Coin Change  
48. Longest Increasing Subsequence  
49. Word Break  
50. Maximum Product Subarray  
