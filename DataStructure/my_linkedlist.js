//
class Node {
    constructor(value,next=null){
        this.value=value;
        this.next=next
    }
  }

class LinkedList {
    constructor(){
        this.head=null;
        this.tail=null;
    }
    add(value){
        var newnode = new Node(value);
        if(this.tail==null){
            this.tail=newnode;
            this.head=newnode;
            return;
        }
        else{
            this.tail.next=newnode;
            this.tail=newnode;
        }
    }

    prepend(value){
        var newnode = new Node(value,this.head);
        if(this.tail==null){
            this.tail=newnode;
        }

        this.head=newnode;
    }

    search(value){
    var index = 0;
    if(this.head !== null){
        var node_index = this.head; //value 2인 노드부터 시작
        /*do {
            if(node_index.value == value){ //값을 찾았을 때 return
                return index;
            }
            index++;
            node_index = node_index.next;
        } while(node_index!=null)*/
        while(node_index){
            if(node_index.value == value){
                return index;
            }
            index++;
            node_index = node_index.next;
        }
        return null;
    }
}
traverse(){
    var index_node= this.head;
    while(index_node){
        console.log(index_node.value);
        index_node=index_node.next;
    }
}
insert(index,value){
    var prenode=this.head;
    if(index!=0){
        for(var i=0; i<index-1; i++){
            prenode=prenode.next;
            if(prenode==null){
                console.log("overflow");
                break;
            }
        }
        if(prenode){
            var newnode = new Node(value,prenode.next);
            prenode.next=newnode;
            //console.log(newnode);
        }
    }
    else{
        var newnode = new Node(value,this.head);
        if(this.tail==null){
            this.tail=newnode;
        }
        this.head=newnode;
    }
}
delete(index){
    var prenode=this.head;
    if(index!=0){
        for(var i=0; i<index-1; i++){
            prenode=prenode.next;
            if(prenode==null){
                console.log("overflow");
                break;
            }
        }
        if(prenode){
            prenode.next=prenode.next.next;
        }
    }
    else{
        this.head=this.head.next;
    }
}
}

var mylinkedlist = new LinkedList();
mylinkedlist.add(3);
mylinkedlist.add(4);
mylinkedlist.add(5);
mylinkedlist.prepend(2); //2345
//console.log(mylinkedlist);
//console.log(mylinkedlist.search(5));
//console.log(mylinkedlist.search(2));
//console.log(mylinkedlist.search(4));
//console.log(mylinkedlist.insert(2,7));
mylinkedlist.insert(2,7);//23745
mylinkedlist.insert(7,10);
mylinkedlist.delete(0) //3745
mylinkedlist.insert(0,14) //14,3,7,4,5
mylinkedlist.delete(1);
mylinkedlist.delete(3);
mylinkedlist.insert(3,11);
mylinkedlist.traverse();
//console.log(mylinkedlist.)