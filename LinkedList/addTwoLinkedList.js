class Node{
 constructor(value){
     this.data = value;
     this.next=null;
 }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    appendLinked(value){
        
        let node = new Node(value);
        if(this.head == null){
            this.head = node;
            return;
        }
        let curr = this.head;
        
        while(curr.next!==null){
            curr = curr.next;
        }
        curr.next = node;
        return this.head;
    }
    sumOfnode(l1, l2){
        let carry = 0;
        let dummyNode = new Node(0);
        let curr = dummyNode;
        
        while(l1!=null || l2 != null || carry>0){
            let value1 = l1?.data || 0;
            let value2 = l2?.data || 0;
            let sum = value1+value2+carry;
            carry = Math.floor(sum/10);
            let node = new Node(sum%10);
            curr.next = node;
            curr = curr.next;
            if(l1) l1=l1.next;
            if(l2) l2=l2.next;
        }
         
        return dummyNode.next;
    }
    printLl(ll){
        let curr = ll;
        let res=[];
        while(curr){
            res.push(curr.data);
            curr = curr.next;
        }
        return res.join('->')
    }
}

let ll = new LinkedList();
let l1;
let l2;
for(let i of [1,2,3,4]){
    l1 = ll.appendLinked(i);
}
let ll2 = new LinkedList();
for(let i of [5,6,7,8]){
    l2 = ll2.appendLinked(i);
}
let result = ll.sumOfnode(l1, l2);
console.log(ll2.printLl(result))
