"use strict";

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    if(this.values.length === 0){
        this.values.push(newNode);
        return
    }
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let array = this.values;
    const element = this.values[index]
    while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = array[parentIndex];
        if(element.priority >= parent.priority ) break;
      [array[parentIndex], array[index]] = [array[index], array[parentIndex]];
      index = parentIndex;
    }
  }
  dequeue() {
    let min = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < swap.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}


const ER = new PriorityQueue();
ER.enqueue("Common cold", 1)
ER.enqueue("gunshot wound", 5)
ER.enqueue("high fever", 2)

console.log(ER.values)