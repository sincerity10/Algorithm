// 알고리즘 스터디 - 자료구조: Stack
// 초기 작성: 20.04.11

import LinkedList from 'mylinkedlist';
import Node from 'mylinkedlist';

export default class Stack {
    constructor() {
      // We're going to implement Stack based on LinkedList since these
      // structures are quite similar. Compare push/pop operations of the Stack
      // with prepend/deleteHead operations of LinkedList.
      this.linkedList = new LinkedList();
    }
    push(value) {
        this.linkedList.prepend(value);
    }
    pop() {
    // Let's try to delete the first node (the head) from the linked list.
    // If there is no head (the linked list is empty) just return null.
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
    }
}

var mystack = new Stack();
mystack.push(3);
mystack.push(5);
mystack.push(6);
mystack.pop();
console.log(mystack);