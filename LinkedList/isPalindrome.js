function isPalindrome(head) {
  if (!head || !head.next) return true;

  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half
  let prev = null;
  while (slow) {
    let next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // Compare both halves
  let left = head, right = prev;
  while (right) {
    if (left.data !== right.data) return false;
    left = left.next;
    right = right.next;
  }

  return true;
}

// Example: 1 -> 2 -> 2 -> 1 → true
let n1 = new Node(1);
n1.next = new Node(2);
n1.next.next = new Node(2);
n1.next.next.next = new Node(1);
console.log("Palindrome:", isPalindrome(n1)); // true
