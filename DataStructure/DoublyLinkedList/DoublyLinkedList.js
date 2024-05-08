

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
        

    }
    push(val){
        const current = new Node(val)
        if(this.head === null){
            this.head = current;
            this.tail = current;
            
        }else{
            this.tail.next = current;
            current.prev = this.tail;
            this.tail = current;

        }
        this.length++;
        return this
      
    }
    pop(){
        if(this.length <= 0){
            return undefined;
        }
        const current = this.tail.prev;
        this.tail.prev = null;
        current.next = null;
        this.tail = current;

        return this

    }
    shift(){
        if(this.length <= 0) return undefined;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return this;
        }

        let temp = this.head;
        this.head = temp.next;
        temp.next = null;
        this.head.prev = null;
        this.length--;
        return temp;
    }
    get(val){}
    remove(index){}
    insert(index,val){}
    reverse(){}
}

const first = new DoublyLinkedList();
first.push(13)
first.push(35)
console.log(first)