function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a; // intersection node or null
}

// Example setup
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

// A: 1 -> 9 -> 1 -> 2 -> 4
// B: 3 -> 2 -> 4  (intersection at 2)
let common = new Node(2);
common.next = new Node(4);

let headA = new Node(1);
headA.next = new Node(9);
headA.next.next = new Node(1);
headA.next.next.next = common;

let headB = new Node(3);
headB.next = common;

console.log("Intersection Node:", getIntersectionNode(headA, headB)?.data); 
// Output: 2
