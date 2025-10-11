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
    const dummy = new Node(0);
    let curr = dummy;

    for (let val of arr) {
      curr.next = new Node(val);
      curr = curr.next;
    }

    this.head = dummy.next;
  }

  print() {
    let curr = this.head;
    let result = "";
    while (curr) {
      result += curr.data + " -> ";
      curr = curr.next;
    }
    console.log(result + "null");
  }

  // 🔄 Reverse the linked list
  reverse() {
    let prev = null;
    let curr = this.head;
    let next = null;

    while (curr !== null) {
      next = curr.next;   // store next node
      curr.next = prev;   // reverse the link
      prev = curr;        // move prev forward
      curr = next;        // move curr forward
    }

    this.head = prev;     // update head to new first node
  }
}

// Example
const ll = new LinkedList();
ll.append([1, 2, 3, 4, 5]);

console.log("Original List:");
ll.print();

ll.reverse();

console.log("Reversed List:");
ll.print();
