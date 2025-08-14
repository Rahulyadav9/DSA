## **📒 Linked List Notes (JavaScript)**

### **1. What is a Linked List?**

A **linked list** is a linear data structure where elements (**nodes**) are connected using pointers (references).
Each node contains:

* **Data** → value
* **Next** → reference to the next node

---

### **2. Types of Linked Lists**

1. **Singly Linked List** → Each node points to the next node.
2. **Doubly Linked List** → Each node points to both next and previous nodes.
3. **Circular Linked List** → Last node points back to the head.

---

### **3. Singly Linked List Structure**

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // pointer to next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; // first node
  }

  // Add node at end
  append(data) {
    const newNode = new Node(data);
    if (!this.head) { // empty list
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) current = current.next;
    current.next = newNode;
  }

  // Print list
  print() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    console.log(result + 'null');
  }

  // Delete by value
  delete(data) {
    if (!this.head) return;
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    if (current.next) current.next = current.next.next;
  }

  // Reverse list
  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

// Usage
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); // 10 -> 20 -> 30 -> null
list.reverse();
list.print(); // 30 -> 20 -> 10 -> null
```

---

### **4. Time Complexity**

| Operation      | Time Complexity |
| -------------- | --------------- |
| Access element | O(n)            |
| Search         | O(n)            |
| Insert at head | O(1)            |
| Insert at end  | O(n)            |
| Delete node    | O(n)            |

---

### **5. Advantages**

* Dynamic size (no pre-allocation like arrays).
* Easy insert/delete without shifting elements.

### **6. Disadvantages**

* No direct access by index.
* Extra memory for pointers.
* Sequential access is slower than arrays.

---

If you want, I can also make **a JavaScript Doubly Linked List version** with forward & backward traversal — that’s useful for interview prep.
