class LinkedListLength extends LinkedList {
  getLength() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      count++;
      curr = curr.next;
    }
    return count;
  }
}

// Example
const ll2 = new LinkedListLength();
ll2.append([1, 2, 3, 4, 5]);
console.log("Length:", ll2.getLength()); // Output: 5
