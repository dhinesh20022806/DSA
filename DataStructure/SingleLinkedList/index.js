"use strict";

// piece of data - val
// reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;

    let current = this.head;

    this.head = current.next;

    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    let node = new Node(val);
    if (!this.head){
      this.head = node;
      this.tail = node;
    }
    else{
      node.next = this.head;
    this.head = node;
    }
    this.length++;
    return this;
  }
  get(position = this.length - 1){
    if(position < 0 || position >= this.length) return null

    let current = this.head;
    let counter = 0;
    while(counter !== position ){
      current = current.next;
      counter++

    }

    return current



  }
  set(index, val){
   let foundNode = this.get(index);
   if(foundNode) {
    foundNode.val = val;
    return true
   }

    return false;

  }
  insert(index,val){
    if(index < 0 || index > this.length){

     return false;

    }
    if(index === 0){
      this.unshift(val)
      
    }
    else if(index === this.length){
      this.push(val)
    }
    else{
      let beforeNode = this.get(index -1);
      let temp = beforeNode.next;
      let insertNode = new Node(val);

      beforeNode.next = insertNode;
      insertNode.next = temp;

    }
    this.length++

    return true;
  }
  remove(index){
    if(index < 0 || index >= this.length){
      return undefined;
    }
    if(index === this.length - 1){
      return this.pop();
    }
    if(index === 0){
      return this.shift();
    }
  
     let previousNode = this.get(index -1);
     let removed = previousNode.next;
     previousNode.next = removed.next;

    
    this.length--;
    return removed;
    

    
  }
  print(){
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr)
  }

  reverse(){
  let node = this.head;
  this.head = this.tail;
  this.tail = node;

    let next = null;
    let prev = null;
    while(node){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this



  }
}

const first = new SinglyLinkedList();

first.push("hi");
first.push("bye");
first.push("see you");
first.push("test");


first.unshift("good night");


first.set(2, 'hello, world')

first.insert(1,"dhinesh")
console.log(first.insert(100,"balaji"))

const result = first.get(2)
console.log(result)


console.log(first.length);
console.log(first);
first.print()
console.log("++++++++++++++++")
console.log(first.reverse())
first.print()
