// 알고리즘 스터디 - 자료구조: Queue
// 초기 작성: 20.04.11

class Node {
    constructor(value,next=null){
        this.value=value;
        this.next=next;
    }
}

// Linked List 구조체 및 기능정의
class Queue {
    // Linkd List의 필수요소인 head와 tail 정의
    constructor(){
        this.front=null;
        this.back=null;
    }
    enqueue(value){
        var newnode = new Node(value);
        if(this.back==null){
            this.back=newnode;
            this.front=newnode;
            return;
        }
        else{
            this.back.next=newnode;
            this.back=newnode;
        }
    }
    dequeue(){
        this.front=this.front.next;
    }
    traverse(){
        var index_node= this.front;
        while(index_node){
            console.log(index_node.value);
            index_node=index_node.next;
        }
    }
}

var myqueue = new Queue();
myqueue.enqueue(4);
myqueue.enqueue(7);
myqueue.enqueue(5);
myqueue.enqueue(9);
myqueue.enqueue(8);
myqueue.dequeue();
myqueue.traverse();
//console.log(myqueue);