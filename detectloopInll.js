function detectAndRemoveLoop(head) {
  let slow = head;
  let fast = head;

  // Detect loop
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) break;
  }

  if (slow !== fast) return false; // no loop

  // Find start of loop
  slow = head;
  while (slow.next !== fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // Remove loop
  fast.next = null;
  return true;
}
