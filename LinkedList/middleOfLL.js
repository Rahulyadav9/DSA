class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(arr) {
    let dummy = new Node(0);
    let curr = dummy;
    for (let val of arr) {
      curr.next = new Node(val);
      curr = curr.next;
    }
    this.head = dummy.next;
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow ? slow.data : null;
  }
}

// Example
const ll = new LinkedList();
ll.append([1, 2, 3, 4, 5]);
console.log("Middle Node:", ll.findMiddle()); // Output: 3
