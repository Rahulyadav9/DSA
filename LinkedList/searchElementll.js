class LinkedListSearch extends LinkedList {
  search(value) {
    let curr = this.head;
    while (curr) {
      if (curr.data === value) return true;
      curr = curr.next;
    }
    return false;
  }
}

// Example
const ll3 = new LinkedListSearch();
ll3.append([10, 20, 30, 40, 50]);
console.log("Search 30:", ll3.search(30)); // true
console.log("Search 100:", ll3.search(100)); // false
